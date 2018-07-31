# Using React with an HTTP client.

To fetch data from the server, you will need an HTTP library. Unlike other frameworks, React doesn't have an opinion on it. 

In any case, there are many of them out there. Fetch, Axios, and Superagent are probably the 3 most popular -- and Fetch is actually part of the JS standard library now. My own favorite is Axios because of how simple it is.

To use it, first add the module to the project:

```
$ npm install --save axios
```

Then import it into which Components will use it:

```
import axios from 'axios';
```

To access an API, here is an example in the componentDidMount lifecycle method:

```
componentDidMount() {
  axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
}
```

See: https://github.com/rmemory/react-axios-example