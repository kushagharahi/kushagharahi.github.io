# kusha.me

Source code for [kusha.me](https://kusha.me), my static blog and portfolio website built on VueJS and hosted on GitHub pages. 

## Getting Started 

You will need [npm](https://www.npmjs.com/) installed. The `dev` branch is for on-going development. `master` is the current compiled site, and `rc` is the code for the current `master` compiled site.

All commands assumed to be run in the root project directory.
* Clone repo
* Run `npm install` to restore dependencies 
* To compile without prerendering and JS Obfuscation run `npm run build`, it will output the compiled site to `/dist`
* To compile with prerendering and JS Obfuscation: `npm run buildprod`, it will output the compiled site to `/dist`
* To start a http server with hot-reloading run `npm start` This launches a [webpack-dev-server](https://github.com/webpack/webpack-dev-server) on `8080`. 

## Deployment

You can modify the `deployProd` command in the `package.json` to force push the `/dist` folder contents to the branch specified. If GitHub pages is set up on the repository you can push to the branch that your site is hosted off of. Usage: `npm run deployProd`

You can also use this command to push "revisions" of the compiled site onto another branch.

## Built With

* [VueJS](https://vuejs.org/) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - JS Build tool

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
