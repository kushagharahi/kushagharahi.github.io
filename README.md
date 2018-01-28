# kusha.me

Source code for [kusha.me](https://kusha.me), my static blog and portfolio website built on VueJS and hosted on GitHub pages. 

## Getting Started 

You will need [npm](https://www.npmjs.com/) installed. The `dev` branch is for on-going development. `master` is the current compiled site, and `rc` is the code for the current `master` compiled site.

All commands assumed to be run in the root project directory.
* Clone repo
* Run `npm install` to restore dependencies 
* To compile without prerendering and JS Obfuscation: `npm run unix-dev-build/win-dev-build`
    * Outputs the compiled site to `/dist`
* To compile with prerendering and JS Obfuscation: `npm run unix-prod-build/win-prod-build` 
    * Outputs the compiled site to `/dist`
* To start a http server with hot-reloading: `npm run unix-start-dev-server/win-start-dev-server` This launches a [webpack-dev-server](https://github.com/webpack/webpack-dev-server) on `8080`. 

## Deployment

The `npm run unix-deploy-prod/win-deploy-prod` commands will build prod, clone the $branch_specified's (currently master) git history into the `dist/` folder, then commit the dist folder contents to the $branch_specified. 

You can also use these commands to push "revisions" of the compiled site onto another branch.

Basically, these commands compile the site and pushes the compiled site to another branch. This makes it convenient for anyone hosting off of a git branch (like GitHub pages does).

## Built With

* [VueJS](https://vuejs.org/) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack](https://webpack.js.org/) - JS Build tool

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

[Check out v1 built with AngularJs(1.0) and Typescript(2.0)](https://github.com/kushagharahi/kushagharahi.github.io/tree/AngularTS)
