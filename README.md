# kusha.me ![build status](https://travis-ci.org/kushagharahi/kushagharahi.github.io.svg?branch=dev)

Source code for [kusha.me](https://kusha.me), my static blog and portfolio website built on VueJS and hosted on GitHub pages. 

## Getting Started 
| branch    | description
|:---------:|:----------------------------------------:|
| `dev`     | on-going development.                    |
| `master`  | current compiled site                    |
| `rc`      | source code for current `master` branch  |

You will need [npm](https://www.npmjs.com/) installed. 

command                         | OS       | description
:------------------------------:|:--------:|:------------------------------------------------------------------------------------------------------:|
`npm install`                   | win/unix | restore dependencies
`npm run unix-start-dev-server` | unix     | Starts a [http server](https://github.com/webpack/webpack-dev-server) on `8080` with hot-reloading 
`npm run unix-start-dev-server` | win      | ""
`npm run unix-dev-build`        | unix     | Compile to `dist` w/o prerendering and JS Obfuscation
`npm run win-dev-build`         | win      | ""
`npm run unix-prod-build`       | unix     | Compile to `dist` with prerendering and JS Obfuscation
`npm run win-prod-build`        | win      | ""
`npm run unix-deploy-prod`      | unix     | See deployment section
`npm run win-deploy-prod`       | win      | ""

## Deployment

`npm run unix-deploy-prod/win-deploy-prod` commands will build prod (prerender, minify, uglify, etc), clone the `remote/master` git history into `dist/.git`, then commit the `dist` contents to `master`. `master` branch is deployed to [GitHub Pages](https://pages.github.com/).

tl;dr use `npm run unix-deploy-prod/win-deploy-prod` commands to push "revisions" of the compiled site onto another branch (master).

## Built With

* [VueJS](https://vuejs.org/) - Web Framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - Build/Bundle Tool

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
