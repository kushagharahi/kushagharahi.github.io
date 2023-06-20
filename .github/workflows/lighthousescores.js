const fs = require('fs');

const reportFiles = fs.readdirSync('./.lighthouseci', { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.startsWith('lhr') && !dirent.name.endsWith('.html'))
    .map(dirent => dirent.name);

let comment = '## Lighthouse Scores\n\n';
for (const reportFile of reportFiles) {
    const reportContent = fs.readFileSync('./.lighthouseci/'+reportFile, 'utf8');
    const report = JSON.parse(reportContent);
    const scores = {}
    Object.keys(report.categories).forEach((title) => {
        scores[title] = report.categories[title].score * 100;
    });
    const scoreTable = Object.entries(scores).map(([category, score]) => `- ${category}: ${score}`).join('\n');
    comment += `- ${report.requestedUrl}\n\`\`\`\n${scoreTable}\n\`\`\`\n`;
}
console.log(comment)

module.exports = comment