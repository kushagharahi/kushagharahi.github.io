# kusha.me 

| dev | rc | 
| :-: | :-:|
| [![Build Status](https://travis-ci.org/kushagharahi/kushagharahi.github.io.svg?branch=dev)](https://travis-ci.org/kushagharahi/kushagharahi.github.io) | [![Build Status](https://travis-ci.org/kushagharahi/kushagharahi.github.io.svg?branch=rc)](https://travis-ci.org/kushagharahi/kushagharahi.github.io) |


Source code for [kusha.me](https://kusha.me), my static blog and portfolio website built on VueJS and hosted on GitHub pages. 

## Getting Started 
| branch    | description
|:---------:|:----------------------------------------:|
| `dev`     | on-going development                    |
| `master`  | current (live) compiled site            |
| `rc`      | source code for current `master` branch |

You will need [npm](https://www.npmjs.com/) installed. 

command                         | description
:------------------------------:|:------------------------------------------------------------------------------------------------------:|
`npm install`              | restore dependencies
`npm run hotreload`        | Starts a [http server](https://github.com/webpack/webpack-dev-server) on `8080` with hot-reloading 
`npm run dev-build`        | Compile to `dist` w/o prerendering
`npm run prod-build`       | Compile to `dist` with prerendering

## Built With

* [VueJS](https://vuejs.org/) - Web Framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - Build/Bundle Tool

## License

Source code in this repository is licensed under GPLv3 except for any material from the `/src/content/blog/` directory or any subdirectories, or anywhere that content appears after compilation (e.g. any files created when running `npm run *-*-build`).

Copyright (c) 2018 Kusha Gharahi <kusha.me>

 - see [LICENSE.md](LICENSE.md) for more details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
