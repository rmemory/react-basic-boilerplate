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

A promise is kind of like ordering fast food. You place your order/pay, and they hand you a receipt. Until the transaction is complete at the register, you don’t go anywhere. However once they hand you the receipt you feel comfortable going to sit down. The receipt is assurance (a promise) that you will get the food (data).

A promise is a wrapper around any kind of data. A promise could wrap the integer 17, or the string “hello world”, or some arbitrary object, or anything else you could normally store in a javascript variable.

The promise object is returned immediately from a function, but the data is only resolved when it comes back from wherever it is.

The purpose of a promise is to allow the browser to continue executing code while the promise is fulfilled. Nothing is stopped because the browser immediately received a promise. The browser just wants something to hold onto. A promise is just a receipt.

There are two ways to handle promises: (a) using .then(myCallback), or (b) using async/await

Stated differently, if I I assume getUsers() always returns a promise, I could either use (A) .then mechanism like this:

function getFirstUser() {
    return getUsers().then(function(users) {
           return users[0].name;
    });
}

And in the same vein, if I wish to catch errors, I could do this:

function getFirstUser() {
   return getUsers().then(function(users) {
       return users[0].name;
   }).catch(function(err) {
       return {
         name: 'default user'
       };
   });
}

And I would call the above like this:

const getTheName = getFirstUser();

(B) On the other, if I wish, I could use async/await:


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

However, I must be aware that **all** async functions themselves return a promise, and thus when I call it, I will need to use await, like this:

const getTheName = await getFirstUser();

And if I am implelmenting getUsers myself (and I wish for it to return a promise as shown in the example above) it could look like this:

function getUsers() {
    return new Promise((resolve, reject) => 

        $.ajax({
            url: `http://www.jakescoolapi.com/?t=The+Matrix+users`,
            method: 'GET'
            }).done((response)=>{
                //this means my api call suceeded, so I will call resolve on the response
                resolve(response);
            }).fail((error)=>{
                //this means the api call failed, so I will call reject on the error
                reject(error);
            });
    });
}

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
