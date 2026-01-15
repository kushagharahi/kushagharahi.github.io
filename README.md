# kusha.me 

## [kusha.me](https://kusha.me) -- Just another static blog and portfolio website built on VueJS and hosted on GitHub pages. 

### Features
* Dev server with hot-reloading
* Markdown blog posts

* SEO Features
  * Sitemap generation
  * Prerendered html, static files so you can view the site without JS, crawlable by search bots
  * Rich Opengraph for all pages

### Built With

* [VueJS](https://vuejs.org/) - Web Framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - Build/Bundle Tool

## Getting Started 
You will need [npm](https://www.npmjs.com/) installed. 

command                    | description
:-------------------------:|:-------------------------------------------------------------------------------------------------:|
`npm install`                  | restore dependencies
`npm start`            | Starts a [http server](https://github.com/webpack/webpack-dev-server) on `8080` with hot-reloading 
`npm run dev-build`            | Compile to `dist` w/o prerendering
`npm run prd-build`            | Compile to `dist` with prerendering
`npm run run-prd-build`        | Compile to `dist` with prerendering and runs a python 3 webserver
`npm run lint`                 | Runs (eslint/prettier) linting against all .vue/.js files not in build/* 
`npm run lint -- --fix`        | Auto fix linting errors
`npm run lighthouse`           | Runs Google Lighthouse on all the paths in /build/paths.js (you may need to set `CHROME_PATH`, e.g, `export CHROME_PATH=/usr/bin/google-chrome`)

## ❄️ Nix Development

This repository includes a [Nix Flake](https://nixos.wiki/wiki/Flakes) to provide a consistent development environment. It automatically configures Node.js, Python, and a Nix-compatible Chromium instance (required for prerendering and Lighthouse).

1. **Enable Flakes**: Ensure you have Nix installed with [Flakes enabled](https://nixos.wiki/wiki/Flakes#Enable_flakes).
2. **Enter the Shell**:
   ```bash
   nix develop
   ```
3. Run the commands from Getting Started

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

Source code in this repository is licensed under GPLv3 except for all content material from the `/src/content/*` directory or any subdirectories, or anywhere that content material appears after compilation.

Copyright (c) 2023 Kusha Gharahi <kusha.me>

 - see [LICENSE.md](LICENSE.md) for more details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
