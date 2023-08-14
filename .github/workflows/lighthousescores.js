const fs = require('fs');

const lighthouseDir = './.lighthouseci'

const reportFiles = fs.readdirSync(lighthouseDir, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.startsWith('lhr') && !dirent.name.endsWith('.html'))
    .map(dirent => dirent.name);

let comment = '## Lighthouse Scores\n\n';
for (const reportFile of reportFiles) {
    const reportContent = fs.readFileSync(`${lighthouseDir}/${reportFile}`, 'utf8');
    const report = JSON.parse(reportContent);
    var scores = new Map();
    Object.keys(report.categories).forEach((title) => {
        scores[title] = report.categories[title].score * 100;
    });
    const scoreTable = Object.entries(scores).map(([category, score]) => `- ${category}: ${score}`).join('\n');
    comment += `- ${report.requestedUrl}\n\`\`\`\n${scoreTable}\n\`\`\`\n`;
}
comment += `\n\n`
const reportLinks = fs.readFileSync(`${lighthouseDir}/links.json`, 'utf-8')
JSON.parse(reportLinks, (url, reportLink) => {
    if(url)
        comment += `\n \`${url}\` : ${reportLink}`
})

console.log(comment)

module.exports = comment