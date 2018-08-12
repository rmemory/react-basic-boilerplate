# Introduction

* Implicit binding
* Explicit binding
* New binding
* window binding

This first question to ask when determing this binding is:  Where is this function invoked?

var sayName = function(name) {
	console.log('Hello, ' + name);
}

sameName('Richard');

# Implicit binding
Look to the left of the dot at call time

var me = {
	name: 'Richard',
	age: 100,
	sayName: function() {
		console.log(this.name)
	}
}

me.sayName(); // left of the dot, means this in this case points at "me", so the result here is 'Richard'.

var Person = function(name, age) {
	return {
		name: name,
		age, age,
		sayName: function() {
			console.log(this.name);
		},
		mother: {
			name: 'Sarah',
			sayName: function() {
				console.log(this.name);
			}
		}
	};
};

var fred = Person('Fred', 42);
fred.sayName(); // prints Fred
fred.sayName(); // prints Sarah

# Explicit binding
This involves call, apply, and bind

var sayName = function() {
	console.log('My name is ' + this.name);
}

var sarah = {
	name: 'Sarah',
	age: 100,
}

sayName.call(sarah); //this is bound to sarah

var languages = ['JavaScript', 'Ruby', 'Python'];

sayName.apply(sarah, languages); // deconstructs the three elements of the array into their own args

var newFunc = sayName.bind(sarah); // returns a new function with sarah bound as this, but not calling it.

newFunc();

The difference between call and apply is that apply lets you pass in an array as the second argument, while call requires that parameters be listed explicitly.

This will print out undefined:

```
var myUser = { 
   username: 'richard', 
   age: 100, 
   email: 'richard@gmail.com' 
 }; 
 var getMyUsername = function(){ 
   console.log(this.username); 
 }; 
 setTimeout(getMyUsername, 3000); 
 
```

# new binding

var Animal = function(color, name, type) {
	// When creating Animal with new keyword
	// it automatically adds a "this" field:
	// this = {}
	this.color = color;
	this.name = name;
	this.type = type
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');


# window binding

var sayAge = function() {
	console.log(this.age)
};

var me = {
	age: 25
};

sayAge(); // nothing left of the dot, no using of bind === undefined

window.age = 35;
sayAge(); // result is 35

if I add 'use strict;' in the function tells the parser to not allow that function to access 'window' binding.