A basic template to setup a React based project, using Webpack

Note on Linux: you *must* run this one-time-only to enable hot module
replacement:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

To install the latest of everything (which may or may not work), delete the 
package-lock.json, and possibly also package.json.
 
Then run npm init to create an initial package.json, or just use the one here
and delete the existing dependencies to start from scratch. Your milage might
vary depending on the current state of whatever the latest and greatest npm
packages might be screwing around with in their own api's. Note that this list
of packages may be more than you need. Pare it down as you see the need. 

```
npm install prop-types react react-dom react-hot-loader

npm install --save-dev autoprefixer babel-core babel-eslint babel-loader babel-polyfill babel-preset-env babel-preset-react babel-preset-stage-1 chalk cross-env css-loader eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react extract-text-webpack-plugin file-loader html-webpack-plugin postcss-loader rimraf style-loader url-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge
```

Note that I am using node-v8.11.2-linux-x64 at the moment on Ubuntu 18.04.

Here are a couple more notes:

* If you wish to split out more vendor modules, open the 
config/webpack.common.js file and edit the vendor field. For example, maybe
something like this if you were to use the react router, firebase, re-base.
In other words, this is just an idea

```
vendor: ['react', 'react-dom', 'react-router-dom', 'firebase', 're-base'],
```

* If you wish to use stylus for your CSS, you could open the config/webpack.dev.js
and change the module rules to have this entry (again, just an idea):

```
		rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader', 'stylus-loader'],
			},
		],
```

And the config/webpack.prod.js rules might look like this:

```
	rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				/* ExtractTextPlugin moves all the required *.css modules in
				   entry chunks into a separate CSS file. So your styles are
				   no longer inlined into the JS bundle, but in a separate
				   CSS file (styles.css). If your total stylesheet volume is
				   big, it will be faster because the CSS bundle is loaded in
				   parallel to the JS bundle. */
				loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'stylus-loader'])
			},
		],
```

* Initially, I ran into a problem with a 3.x version of extract-text-webpack-plugin,
and I had to replace it with 4.0.0-beta.0, but I haven't seen that problem lately and 
am currently happily using version 3.0.2. Seems they have fixed their problems in
3.x? We'll see. 