A basic template to setup a React based project, using Webpack

Note on Linux: you *must* run this to enable hot module replacement:

 echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

 To install the latest of everything (which may or may not work), delete the package-lock.json, package.json. Note that this list 
 may be more than you need. Pare it down as you see the need.s 
 
 Run npm init
 
 And do this:

 npm install prop-types react react-dom react-hot-loader

 npm install --save-dev autoprefixer babel-core babel-eslint babel-loader babel-polyfill babel-preset-env babel-preset-react babel-preset-stage-1 chalk cross-env css-loader eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react extract-text-webpack-plugin file-loader html-webpack-plugin postcss-loader rimraf style-loader url-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge

And here is the top of package.json ...

	"name": "react-basic-boilerplate",
	"version": "1.0.0",
	"description": "A basic template to setup a React based project, using Webpack",
	"main": "src/index.js",
	"scripts": {
		"dev": "webpack-dev-server --env.env=dev",
		"dev:bundleanalyzer": "npm run dev -- --env.addons=bundleanalyzer",
		"prebuild": "rimraf dist",
		"build": "cross-env NODE_ENV=production webpack -p --env.env=prod",
		"build:bundleanalyzer": "npm run build -- --env.addons=bundleanalyzer"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/rmemory/react-basic-boilerplate.git"
	},
	"keywords": [],
	"author": "Richard Memory",
	"license": "ISC",
	"bugs": {
		"url": "https://github.com/rmemory/react-basic-boilerplate/issues"
	},
	"homepage": "https://github.com/rmemory/react-basic-boilerplate#readme",

