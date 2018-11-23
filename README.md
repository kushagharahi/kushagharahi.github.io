# kusha.me 

dev | rc 
- | -
[![Build Status](https://travis-ci.org/kushagharahi/kushagharahi.github.io.svg?branch=dev)](https://travis-ci.org/kushagharahi/kushagharahi.github.io)|[![Build Status](https://travis-ci.org/kushagharahi/kushagharahi.github.io.svg?branch=rc)](https://travis-ci.org/kushagharahi/kushagharahi.github.io)


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
`npm run win-start-dev-server`  | win      | ""
`npm run unix-dev-build`        | unix     | Compile to `dist` w/o prerendering
`npm run win-dev-build`         | win      | ""
`npm run unix-prod-build`       | unix     | Compile to `dist` with prerendering
`npm run win-prod-build`        | win      | ""

## Built With

* [VueJS](https://vuejs.org/) - Web Framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - Build/Bundle Tool

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
