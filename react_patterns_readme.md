# Using React with an HTTP client.

See: https://github.com/rmemory/react-axios-example

# Context example

See: https://github.com/rmemory/react-context-example

# Toggle example

See: 
https://github.com/rmemory/react-toggle-example

# Modal example

https://github.com/rmemory/react-modal-example

# Promises

https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8

https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

A promise is kind of like ordering fast food. You place your order/pay, and they hand you a receipt. Until the transaction is complete at the register, you don’t go anywhere. However once they hand you the receipt you feel comfortable going to sit down. The receipt is assurance (a promise) that you will get the food (data). Since you are single threaded, you don’t do anything else until you have that promise in hand. Once your food is ready they’ll bring you your food while you are doing something else. They are “resolving” the “data” by bringing it to you.

A promise is a special kind of javascript object which contains another object. I could have a promise for the integer 17, or the string “hello world”, or some arbitrary object, or anything else you could normally store in a javascript variable.

The promise object is returned immediately from a function, but the data is only resolved when it comes back from wherever it is. The callback in .then() is the only way. Async functions are actually syntactic sugar. Under the hood they are using regular .then().

Any promise we have, using ES2016, we can await. That’s literally all await means: it functions in exactly the same way as calling `.then()` on a promise (but without requiring any callback function).

Alternativley, when using async/await, you’re essentially writing synchronous style code, we can go back to using try/catch:

async function getFirstUser() {
	try {
		let users = await getUsers();
		return users[0].name;
	} catch (err) {
		return {
			name: 'default user'
		};
	}
}

The purpose of a promise is to allow the browser to continue executing code while the promise is fulfilled. Nothing is stopped because the browser immediately received a promise. The browser just wants something to hold onto. A promise is just a receipt.

We can access the data from multiple promises by using await combined with Promise.all. For example, 

let [foo, bar] = await Promise.all([getFoo(), getBar()]);

Or we can handle them seperately:

export const fetchImages = async () => {
	const response = await fetch('https://unsplash.it/list');
	const images = await response.json();

	return images;
};

How do I catch the errors from a promise chain? I use `.catch()`

# FlexBox

http://flexboxfroggy.com/

# React Native Animations

https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae

# More React Native

https://medium.com/@austinhale/building-a-mobile-app-in-10-days-with-react-native-c2a7a524c6b4

# D3

https://medium.com/@Elijah_Meeks/d3-is-not-a-data-visualization-library-67ba549e8520

https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
