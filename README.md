# TypeScript Package Boilerplate

This is a boilerplate for a TypeScript NodeJS library. It uses the [Yarn](https://yarnpkg.com/) package manager and you should absolutely not use NPM; among other issues, `npm link` (see below) is buggy as hell, which will make developing your package a nightmare.


### Packages
- [TSLint](https://www.npmjs.com/package/tslint)(with my personal preferences) for linting.
- [Prettier](https://www.npmjs.com/package/prettier) for formatting the build output (though there's currently no config file as I don't really use it all that often).
- I've added the [Debug](https://www.npmjs.com/package/debug) pacakge as a dependency as it's bad practice to use `console.log()`. You can of course remove Debug and use another logger package of your choosing.
- Instead of using the TypeScript transpilers declarations, the [dts-bundle-generator](https://www.npmjs.com/package/dts-bundle-generator) package generates them into a single file.
- [Mocha](https://www.npmjs.com/package/mocha) has been added for testing, however you may want to remove this (and its @types dev package) in favour of a different testing package, such as [Jest](https://www.npmjs.com/package/jest).
- For rapid development, [Nodemon](https://www.npmjs.com/package/nodemon) is used to watch the source (src) folder and re-transpile your package if you change the TypeScript folders. This is useful if you're developing a project (or running tests) using `yarn link`.


### Setup
1. Clone this repository with `git clone https://github.com/RW-DiefBell/TypeScript-Library-Boilerplate.git`, or download these files as a zip archive from the top of this GitHub page.
2. Delete the `.git` folder from the package directory (it's hidden by default in Windows document explorer) to detach your copy of this boilerplate from my Git repository.
3. Edit the following in your `package.json` file:
	- name
	- version
	- description
	- repository
	- author
	- license (if you change this then you'll also need to replace the `LICENSE.txt` file).
	- keywords
4. Run `yarn install` to download all default dependencies.
5. Go edit `tslint.json` to match your personal preferences.
6. Write your package code in `./src`, with `./src/index.ts` exporting everything from your package.
7. Run `yarn build` to transpile your TypeScript code into the `./lib` folder. This will also lint your project (and fix issues if possible), create a declaration file, and run the Prettier formatter over your transpiled code.


### Development
When developing a package, you'll most likely want to write a project in parallel that implements your package so that you can test its end-to-end functionality:
1. Run `yarn link` to link your transpiled package in `./lib` to your global Yarn repository.
2. From the package you're developing, run `yarn link YOUR-PACKAGE-NAME`. The package name is what you've specified in `package.json`.
3. User `yarn run watch` in this directory to watch the `src` directory and re-transpile as you make changes.


### Publishing
So I've never <i>actually</i> published an NPM package, so I'll write this when I have and I've got some experience with doing it.