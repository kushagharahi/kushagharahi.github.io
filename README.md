# kusha.me 

## [kusha.me](https://kusha.me) -- Just another static blog and portfolio website built on VueJS and hosted on GitHub pages. 

### Features
* Dev server with hot-reloading
* Markdown blog posts

* SEO Features
  * Sitemap generation
  * Prerendered html (Crawlable by search bots)
  * Rich Opengraph for blog posts

### Built With

* [VueJS](https://vuejs.org/) - Web Framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - Build/Bundle Tool

| dev | rc | 
| :-: | :-:|
| [![Build Status](https://travis-ci.org/kushagharahi/kushagharahi.github.io.svg?branch=dev)](https://travis-ci.org/kushagharahi/kushagharahi.github.io) | [![Build Status](https://travis-ci.org/kushagharahi/kushagharahi.github.io.svg?branch=rc)](https://travis-ci.org/kushagharahi/kushagharahi.github.io) |


## Getting Started 
You will need [npm](https://www.npmjs.com/) installed. 

command                    | description
:-------------------------:|:-------------------------------------------------------------------------------------------------:|
`npm install`              | restore dependencies
`npm run hotreload`        | Starts a [http server](https://github.com/webpack/webpack-dev-server) on `8080` with hot-reloading 
`npm run dev-build`        | Compile to `dist` w/o prerendering
`npm run prod-build`       | Compile to `dist` with prerendering

### Docker

command                                                 | description
:------------------------------------------------------:|:-------------------------------------------------------------------------------------------------:|
`docker build -t kushame . && docker run -it kushame`   | Build & Run a prerendered site on 8080

### Branching

| branch    | description
|:---------:|:---------------------------------------:|
| `dev`     | on-going development                    |
| `rc`      | source code for current site            |
| `master`  | current (live) compiled site            |

## License

Source code in this repository is licensed under GPLv3 except for all blog material from the `/src/content/blog/` directory or any subdirectories, or anywhere that blog content appears after compilation.

Copyright (c) 2020 Kusha Gharahi <kusha.me>

 - see [LICENSE.md](LICENSE.md) for more details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
