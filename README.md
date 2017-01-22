# kusha.me
### My static development portfolio website

## Instructions
* Clone repo
* Make sure you have npm installed
* do npm install

To compile and minify everything (ts, sass, css/js)
* run `gulp compile`

runs: 

* gulp-sass/gulp-concat - to compile all sass to css (minified)
* gulp-ts - to compile typescript to js
* gulp-minify - to minify js

To watch all sass changes run `gulp sass:watch`

## If using VSCode

I have my .vscode folder included, contains tasks.json. 

* `gulp compile` linked to `compile` vscode task & vscode build command (ctrl+shift+b in windows)
* `gulp sass:watch` linked to `sass:watch` vscode task

## Notes

404.html is a copy of index.html as an html5mode hack for angular. From the ng docs: `"Using [html5] mode requires URL rewriting on server side, basically you have to 
 rewrite all your links to entry point of your application (e.g. index.html)"`You can not do this in GitHub Pages.
