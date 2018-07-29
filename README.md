A basic template to setup a React based project, using Webpack. I use this as a starting point for all react projects I work on. It provides a much more flexible and extensible replacement of create-react-app (see https://reactjs.org/docs/create-a-new-react-app.html).

The react application here is pretty much the same thing create-react-app creates by default; Not much more than the react equivalent of Hello World. But it provides a convienient starting point for most applications.

Here are some of my own general notes around React.

React is built around a few powerful concepts:

* A Virtual DOM, which is held in memory and thus much faster to update.

* It re-renders only the piece(s) of page (DOM elements) that needs to be updated.

* Its not a framework, meaning it isn't an all inclusive, one-stop-shopping mall. For example, if you need HTTP (ie. rest) functionality, then you need something like axios. React doesn't direclty provide separation of concerns into MVC. It pretty much just defines the View aspect and leaves the rest to you. 

* The main selling point of React is: components, which are typically classes (but in the case of statement components might be a simple function). The concept of a component allows the developer to construct their application into logical building blocks (lego blocks?). In complex applications, separate teams can be given their own component to develop, and they are free to develop it as they see fit as long as they maintain a well definied interface. Stated differently: Its object oriented development.

* Minimally, each component must provide a render method which must return the JSX for the component.

* JSX is syntax sugar to allow HTML tags to be combined with JS, or more specifically ES6+. Babel does all of the necessary conversion of JSX back to regular ES6 (or ES5 as necessary).

* Props are the API for (ie. way to pass data) to each component. Prop-types are the mechanism to provide type safety for the API. 

* State holds the state of the application. Yeah, I can't think of a better way to put it than to use that circular definition. State is an object containing other objects that represent the state of the application. It can be set in the constructor or as part of the component, like this:

```
	state = {
		myBoolean: true,
		myNumeric: 0,
		myString: 'Hello world',
		myList: [],
		myObject: {},
	}
```

* When modifying state, you can't do it directly. You must use the setState API. This react API does two things. (1) It changes the value of the state, (2) it triggers the re-render operation, which traverses all components (unless one is a "pure" component), and updates everything that needs to be updated. If you directly modify state, the re-render doesn't occur and stuff gets weird quickly.

* If you have data maintained in state displayed in a form, React will not allow you to directly modify it in the form. It requires you to use an onChange API, which is responsible for calling whatever method wraps the setState API to modify the value in state.

* Each component extends React.Component, and thus inherits several methods, render being one. Additionally, there are several lifecycle methods that can be overriden as necessary, such as shouldComponentUpdate, componentDidMount, etc, etc. See: https://reactjs.org/docs/react-component.html

* Webpack is the mechanism that wraps around the whole thing from a "build perspective". It handles the module bundling, transpiling, configuration details, makes development easier with a web development server, determines how assets are bundled, CSS compilation, deployment etc. 

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

* There are some pretty decent webpack-react tutorials out there. Here are a couple I found useful:

https://www.valentinog.com/blog/react-webpack-babel/

https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

https://esausilva.com/2018/01/13/learn-webpack-for-react/



