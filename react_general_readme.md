# Some links

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.3tk94s6k0

https://tylermcginnis.com/react-aha-moments/

https://camjackson.net/post/9-things-every-reactjs-beginner-should-know

https://medium.com/@puppybits/the-revolution-of-pure-views-aed339db7da4#.w7rw7zli9

http://www.reactjsnewsletter.com/

http://twitter.com/tylermcginnis


# General React Notes

Here are some of my own general notes around React.

React is based on the following principles:

Its "View", not "MVC". But, note that while MVC is good at separating technologies (HTML, CSS, JS), it is not good at separating application logic. This is because despite the separation of technologies, all are still highly coupled.

https://www.slideshare.net/floydophone/react-preso-v2

* Composition or OO - Encapsulation of functionality into its own isolated container with its own state and API (props).

var ProfilePic = function() {
	return (
		<img src={'https://photo.fb.com/' + this.props.username'} />
	)
}

var ProfileLink = function() {
	return (
		<a href={'https://www.fb.com/' + this.props.username>
			{this.props.username}
		</a>
	)
}

var Avatar = function() {
	return (
		<div>
			<ProfilePic username={this.props.username} />
			<ProfileLink username={this.props.username} />
		</div>
	)
}

<Avatar username="richardmemory" />

* Unidirectional data flow

Props are always passed to child components.

In React, UI is a function of state. As the state updates, the UI updates. Basically each app just needs to know how to update state.

this.setState triggers a re-render.

* Imperative and Declarative

With Imperative programming, you are telling your computer explicitly **how** to do something.

var numbers = [4,2,3,6]
var total = 0;
for (var i = 0; i < numbers.length; i++) {
		total += numbers[i]
}

With Declaritive programming, you are telling **what** to do. It usually involves abstractions.

var numbers = [4,2,3,6]
var total = numbers.reduce(function (previous, current) {
	return previous + current
}, 0);

The function in the reduce defines the "what" aspect

Declaritive programming reduces side effects (the total variable isn't continually changing values, and with reduce all modifications occur under the hood so to speak in the function), it minimizes mutability (no chance to overwrite the contents of the numbers array), thus producing fewer bugs.

Here is a declaritive example (state isn't maintained in the DOM):
<MyButton
	onClick={this.handleToggleHighlight}
	hightlight={this.state.highlight}
/>

But react's setState is imperative (very much a how not a what).

And here is a declaritive way of doubling an array:

```
const myDoubler = (anArray) => {
	return anArray.map(element => 
		{
			return (element * 2);
		}
	);
}
```

A declaritive way of doubling an array:

```
const myAddr = (anArray) => {
	return anArray.reduce((total, element) => {
		return (total += element)
	}, 0);
}
```

A declaritive way of using React's state to make a Btn component be delaraitive (note that by using state, its not the "how" but rather the "what")

```
<Btn
  onToggleHighlight={this.handleToggleHighlight}
  highlight={this.state.highlight}>
    {this.state.buttonText}
</Btn>
```

* Just JavaScript. No such thing as ng-repeat.

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

* React requires all list elements to have unique key. For example

```
	<ul>
		{this.state.posts.map(post => (
			<li key={post.id}>{post.title}</li>
		))}
	</ul>
```

Note, that is also an example of how to render a list in react. Other libraries have a special template syntax, like Angular's "ngFor" or Vue's "v-for", that essentially make a copy of the element for each item in the array.

React, on the other hand, leans on JavaScript to do the heavy lifting. "this.state.posts.map" is not a React thing.