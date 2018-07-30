# Introduction

This project provides a basic template or starting point to setup a React based project, using Webpack 4 (code name: legato ) 

I use this as a starting point for all React based projects I work on. For me, this project provides a flexible and extensible alternative to create-react-app (see https://reactjs.org/docs/create-a-new-react-app.html).

The initial "React application" provided in this project is pretty much the same thing create-react-app creates by default; or in other words, it's not much more than the React equivalent of Hello World. 

In short, this project provides a convenient starting point for most applications. I customize it as I need for whatever project I am working on, and I can control all of the aspects of the project, including the build. I am sure create-react-app is fine for some introductory situations (certainly far smarter people than I created it), but personally I find this a much better starting point. That's just me. I am sure there are plenty of deficiencies to my logic, but it has worked so far.

If you are looking for a total introduction to React, Webpack, web development, Java Script, etc, this is probably not the place. This project assumes you have some knowledge of all of those concepts. I use it for my own purposes, and it works for me.

# A few usage notes

To use this project, you may wish to install the latest npm node_modules (which may or may not work depending on the current state of the various modules). Start by deleting the package-lock.json, and possibly also package.json. Or just clear out the dependencies in package.json and adapt it for your needs. The current dependencies are more or less bare bones (although I am sure that is debatable). For example, there is no HTTP client like axios included, no package for the React router, etc. 

Any of which are typically easy to add, though some might require their own unique Webpack configuration. That part is up to you.

Your mileage might vary depending on the current state of whatever the latest and greatest npm node modules might be as they are always screwing around with in their own api's, breaking things, etc. In which case google is your friend to see if anyone else is running into these problems, and you can commiserate with others on a github issues list for whatever modules happens to have caused the latest problem. The module developers sometimes apologize for or sometimes defend the current state of things, and in any case usually help sort through the problem. And that is why they pay us as developers money: to solve problems.

I run into these kinds situations relatively frequently, and such is life in the world of web development with JS where APIs, modules, libraries and whatnot are being updated continuously. I periodically refresh the package.json in this project with the latest just to see where things are. Sometimes it just works. Sometimes it doesn't. 
 
If you decided to start from scratch by entirely deleting package.json, simply run "npm init" from the command line to create an initial package.json.

## Host requirements

Note I am assuming you already have Node installed on your machine and generally have familiary with it. I suspect it would be easy to use yarn rather than npm, but I have chosen npm.

At the moment, I am using node-v8.11.2-linux-x64 on my Ubuntu 18.04 host.

I haven't performed any testing on Windows or Apple hosts, and I have no intention of doing so anytime soon, but I likewise haven't intentially added any code that would preclude usage of this project on those hosts.

## Initial npm install commands?

Here are the npm install commands you could start with on a fresh package.json. In theory this could be the starting point. Customize these as you see the need.

```
$ cd <to this project>

$ npm install prop-types react react-dom react-hot-loader

$ npm install --save-dev autoprefixer babel-core babel-eslint babel-loader babel-polyfill babel-preset-env babel-preset-react babel-preset-stage-1 chalk cross-env css-loader eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react extract-text-webpack-plugin file-loader html-webpack-plugin postcss-loader rimraf style-loader url-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge
```

## Start the project in your browser

To see the project in your browser, run this command:

```
$ npm run dev
```

That should start the application on your local host, by default using PORT=3000. And as you modify the code, the hot module replacement feature should just automatically cause the browser to update as well.

## Deployment

To build a deployment snapshot of your application, run this:

```
$ npm run build
```
And then look in the "dist" directory. You can test the contents of the "dist" directory locally, by using this simple node server:

git@github.com:esausilva/quick-node-server.git

## Problems with hot module replacement?

If you run into problems getting hot module replacement to recognize changes made to the source code, meaning the contents of the browser are not being dynamically refreshed as you make edits, and you are on a Linux host, you may need to run this command (one time only).

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Editor

I am currently using VS Code, looks at the moment it is version 1.25.1, though it is updated frequently. I have also installed the following extensions:

```
ES7 React/Redux/GraphQL/React-Native snippets by dsznajder
ESLint by Dirk Baeumer
And a few others related to git, github, npm, etc, which I won't list here.
```

## Chrome Extensions

I mostly use Chrome for my development. I have installed the following Chrome extensions:

```
React Developer Tools, version 3.2.4
Redux DevTools, version 2.15.3
JSON Formatter, version 0.6.0
```

## A few more usage notes:

* If you wish to split out more vendor modules, open the config/webpack.common.js file and edit the vendor field. For example, maybe something like this if you were to use the react router, firebase, re-base (assuming you installed those node modules). 

In other words, this is just an idea (customize as you see fit).

```
vendor: ['react', 'react-dom', 'react-router-dom', 'firebase', 're-base'],
```

* If you wish to use stylus you could open the config/webpack.dev.js
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

* Initially, I ran into a problem with a 3.x version of extract-text-webpack-plugin, and I had to replace it with 4.0.0-beta.0, but I haven't seen that problem lately and am currently happily using version 3.0.2. Seems they have fixed their problems in 3.x? We'll see.

* There are some pretty decent webpack-react tutorials out there. Here are a couple I found useful:

https://webpack.js.org/concepts/

https://www.valentinog.com/blog/react-webpack-babel/

https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

https://esausilva.com/2018/01/13/learn-webpack-for-react/

https://survivejs.com/webpack/introduction/ (not specific to React)

https://webpack.academy/ (not specific to React)

https://youtu.be/jUTE7lmrS70 (video by Sean Larkin)


# General React Notes

Here are some of my own general notes around React.

React is built around a few powerful concepts:

* A Virtual DOM, which is held in memory and thus much faster to update.

* It re-renders only the piece(s) of page (DOM elements) that needs to be updated.

* Its not a framework, meaning it isn't an all inclusive, one-stop-shopping mall. For example, if you need HTTP (ie. rest) functionality, then you need something like axios. React doesn't direclty provide separation of concerns into MVC. It pretty much just defines the View aspect and leaves the rest to you. 

* The main selling point of React is: components, which are typically classes (but in the case of statement components might be a simple function). The concept of a component allows the developer to construct their application into logical building blocks (Lego(tm) blocks?). In complex applications, separate teams can be given their own component to develop, and they are free to develop it as they see fit as long as they maintain a well definied interface. Stated differently: Its object oriented development.

* Angular, Vue and other JS frameworks also use components. The difference is React components are just JavaScript functions:

```
function simpleComponent() {
  return <p>A simple component</p>
}
```

Here is an example of possibly the simplest React application:

```
import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  return <div>Hello World!</div>;
}

ReactDOM.render(<Hello/>, document.querySelector('#main_react_mount_point'))
```
The above will look for an HTML element with an ID of main_react_mount_point, where it will insert the Component and start doing it's virtual DOM magic.

* Here is an example of what a github page **might** look like if it were divided up into React components. The green boxes are an example of what the individual Components might be.

https://www.valentinog.com/blog/wp-content/uploads/2018/05/github-components.jpg

* Minimally, each component must return JSX as shown in the simple function above (but in "stateful" components is returned via a render method). JSX looks like HTML, but is actually a mixture of HTML and JS.

* JSX is syntax sugar to allow HTML tags to be combined with JS, or more specifically ES6+. Babel does all of the necessary conversion of JSX back to regular ES6 (or ES5 as necessary).

* Contrasted to frameworks like Angular, React does not contain any control directives for conditionals or looping. Instead, it relies entirely on regular old JS syntax (such as array map, filter, etc) to do this. In other words, you won't find ng-if, ng-repeat, etc in React.

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

* When modifying values state, you can't do it directly. You must use React's setState API. This react API does two things. (1) It changes the value of the state, (2) it triggers the re-render operation, which traverses all components (unless one is a "pure" component), and updates everything that needs to be updated. If you directly modify values in state, at the very least the famed React re-render operation does not occur, and stuff gets weird and out of sync quickly with their virtual DOM.

* If you have data maintained in state displayed in a form (and i suspect most form data typically ends up in state one way or another), React simply will not allow you to directly modify it in the form (try it yourself and see). It requires you to use an onChange API, which is responsible for calling whatever method wraps the setState API to modify the value in state.

* Any data from state which should be stored on the server must be handled and synchronized separately, using the proper APIs, authentication, etc.

* Each "stateful" component explicitly extends React.Component, and must implement the render method which returns JSX.

```
import React, { Component } from 'react';
class MyComponent extends Component {
    render() {
    }
```

Additionally, there are several lifecycle methods that can be overridden as necessary, such as shouldComponentUpdate, componentDidMount, etc, etc. See: https://reactjs.org/docs/react-component.html

* The render function must return a single top level HTML element .... or alternatively, it can surround multiple elements with a Fragment tag (an example of where this might be useful is when you are using Flex CSS, and you wish to encapsulate the Flex parent and Flex children relationship).

* Here is a simple example of a "stateless" component:

```
const MyComponent = (props) => (
    return <div>stuff</div>
);
```

* Stateless components have no knowledge of state data, and have no ability to change it, though they can call state-modifying methods passed via props from a parent component.

* All methods inherited from Component contain reference to "this". However, any custom methods inside the same component (such as event handlers) do not by default have reference to "this". This can easily be fixed by declaring the custom methods using arrow functions, which by definition automatically bind to "this". For example,

```
	myEventHandler = (event) => {
		event.preventDefault();
		this.setState({
			someStateValue: someNewValue,
		});
	}
```

If you wish to use regular functions, you'll need to perform the bind to "this" inside of the component constructor, like this:

```
	constructor(props) {
		super(props);
		this.state = {
			someStateValue: '',
		};

		// Set up this pointers in each user defined function
		this.myEventHandler = this.myEventHandler.bind(this);
	};

	myEventHandler = (event) => {
		event.preventDefault();
		this.setState({
			someStateValue: someNewValue,
		});
	}


```

* Webpack is the mechanism that wraps around the whole thing from a "build perspective". It handles the module bundling, transpiling, configuration details, makes development easier with a web development server, determines how assets are bundled, CSS compilation, deployment etc. I have heavily commented the webpack files. You can refer to those for more details.

# Styling

## Plain old CSS

Here is a simple CSS file example, for example call it app.css:

```
html, body, #root, .room {
	height: 100%;
	margin: 0;
  }
  .lit {
	background-color: white;
	color: black;
  }
  .dark {
	background-color: black;
	color: white;
  }
```

And here is how it might be used in a React component:

```
import './app.css';

class MyComponent extends Component {
	state = {
		someStateVar: true,
	}

	render() {
		const brightness = this.state.someStateVar ? 'lit' : 'dark';
		return (
			<div className={`room ${brightness}`}>
etc ...
```

# Credits

I gathered the information to pull all of this together from various places, far too many to count, nor do I even know where to start to give individual credit. If you feel you need credit, let me know.

That said, Easu Silva's blog really helped me get started on the Webpack concepts. His tutorial on Webpack is fantastic. See his blog here: https://esausilva.com/. He based his work on https://webpack.academy/ by Sean Larkin, which is also great. 
