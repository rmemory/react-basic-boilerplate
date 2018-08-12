# React Life Cycle Events

The Render method in a React component needs to be a pure function. That means it needs to be stateless, it needs to not make any Ajax requests, etc. It should just receive state and props and then render a UI.

Though we can't do those things in the render method, they're still pretty critical for building a React app. So now the question, where should those things go? To answer this question, we'll dive into React Life Cycle methods. Lifecycle methods are special methods each component can have that allow us to hook into the views when specific conditions happen (i.e. when the component first renders or when the component gets updated with new data, etc).

There are many different life cycle methods, but in this post we're going to explore the ones that are used most often (which will cover ~95% of use cases).

You can really break React's Life Cycle Methods down into two categories.

1) When a component gets mounted and unmounted to the DOM.

2) When a component receives new data.

## Mounting / Unmounting

Some life cycle methods which are called when the component is initialized and added to the DOM (mounting), and when the component is removed from the DOM (unmounting). By definition then, these methods will be invoked only once during the life of the component.

* Default props
* Constructor
* componentDidMount
* componentWillUnmount

Step back and think about some items that may be important to do when a component mounts or unmounts.

Here are some things that we may need to do:

* Establish some default props in our component
* Set some initial state in our component
* Make an Ajax request to fetch some data needed for this component
* Set up any listeners (ie Websockets or Firebase listeners)
* Remove any listeners you initially set up (when unmounted)
* What I want you to do is really think about the problem we're trying to solve. If you're good and you understand it, continue on. If not, re-read the section above. Looking at code won't help you too much if you don't understand the underlying issues we're trying to solve.

Let's walk through each one of our needs from above and correlate that with a Life Cycle Method.

### Default state

Establish some default props in our component:

We're going to cover this more in depth in a later section but say we want to make it so that even if the consumer of our component doesn't pass in a certain prop, that prop still has a default value. We can do that with the defaultProps property.

```
class Loading extends React.Component {
  render () {
    ...
  }
}
Loading.defaultProps = {
  text: 'Loading'
}
```

So if we had a Loading component that took in a loading text, we could make sure that if a text attribute isn't provided to the component, this.props.text will by default be 'Loading'.

### Constructor to set some initial state in our component

Sometimes you'll want your component to manage some piece of state. In order to do that you'll first need to set some initial state of your component when your component is first added to the DOM. To do this you can use ES6 constructor property.

```
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state =  {
      email: '',
      password: ''
    }
  }
  render () {
    ...
  }
}
```

Above we've used a constructor to set an email and password property on our state object in our Login component. To update the state, you can call this.setState passing in a function which returns an object which overwrites one or both of the email and password properties.

### componentDidMount

Make an Ajax request to fetch some data needed for this component
This is a very common use case. The component needs some data that it's going to get from an Ajax request. You can do this utilizing componentDidMount. This will get called right after the component is mounted to the DOM.

```
class FriendsList extends React.Component {
  componentDidMount () {
    return axios.get(this.props.url).then(this.props.callback)
  }
  render () {
    ...
  }
}
```

Here we're using Axios to fetch some data then call a callback we received from props once that data is resolved.

Set up any listeners (ie Websockets or Firebase listeners)

As you might have guessed, this is a perfect opportunity to use componentDidMount as well.

```
class FriendsList extends React.Component {
  componentDidMount () {
    ref.on('value', function (snapshot) {
      this.setState(function () {
        return {
          friends: snapshot.val()
        }
      })
    }.bind(this)
  }
  render () {
    ...
  }
}
```

### componentWillUnmount

Now that we've set up that listener, we want to be sure to remove it when the component is removed from the DOM so we don't have memory leaks.

Remove any listeners you initially set up (when unmounted)

That's where componentWillUnmount comes into play.

```
class FriendsList extends React.Component {
  componentWillUnmount () {
    ref.off()
  }
  render () {
    ...
  }
}
```

## When component receives new data

Now let's look at the Life Cycle Event that is going to be called whenever the component receives new data from its parent component.

### getDerivedStateFromProps

Sometimes you’ll need to update the state of your component based on the props that are being passed in. This is the lifecycle method in which you’d do that. It’ll be passed the props and the state, and the object you return will be merged with the current state.

Here's a component which demonstrates the use of the life cycle hooks we've talked about

```
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Tyler McGinnis'
    }
  }
  componentDidMount(){
    // Invoked once the component is mounted to the DOM
    // Good for making AJAX requests
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // The object you return from this function will
    // be merged with the current state.
  }
  componentWillUnmount(){
    // Called IMMEDIATELY before a component is unmounted
    // Good for cleaning up listeners
  }
  render() {
    return ...
  }
}
```