## Unit 2 - JavaScript

The purpose of this unit is to review JavaScript, a language which can be used to make web pages dynamic. Since JavaScript is a programming language, it shares many features of most programming languages such as variables and functions.

### Adding JS to your project

There are 3 ways to add JavaScript to your project:

* Internal - Adding JavaScript code in the HTML document via script tags: `<script> /* JavaScript Code Here */ </script>`
* External - Creating a new file that holds all of your JS code and linking that file to your HTML
* Inline - Adding JS code directly in the `onclick` attribute of functions

### Basic JS

* Declare variables with the `var`  keyword eg. `var five = 5;` or the `let` keyword eg. `let five = 5;` 
* JS is a dynamically type language which means you do not have variable types in you code, they are determined at runtime.
* Common JS types: `string`, `number`, `undefined`, `null`, `boolean`, `object`, `function`.
* Operators: `+`, `-`, `*`, `/` and `%`
* Comments: single line - `// I am a comment`, multiline - `/* I am a comment */`

### Control Statements
* There are times when you want the program to take different paths depending on conditions
  * eg. You might want to change the behaviour of the site depending on whether or not the user is over 18
* JS gives you a few tools to allow you to do this - control statements
* The `if...else` statement allows you to execute the code in side the if block if the condition is true, otherwise, it will execute the code in the else block
  * eg. if (age > 18) { console.log("I'm at least 18 years old); } else { console.log("I'm under 18 years old"); }
* A `while` statement allows you to execute code inside the while block as long as some condition is true
  * eg. while (isThirsty) { drinkWater(); }
* Conditional statements resolve to either `true` or `false` they can be made up of `true`, `false`, variables and conditional operators.
  * eg. Conditional statement: `true && myVar == 18 && myOtherVar > -5`
* A `for` statement allows you to execute code a certain number of times
  * eg. for (let i = 0; i < 10; ++i) { console.log("The value of i in this loop is:", i); }
  * Every for statement can be written as a while loop with a counter
* A `for...in` or `for...of` loop allows you to execute some code for element of an iterable type such as an array

### Functions
* Functions are used extensively in javaScript, there are three ways to declare a function.
* They allow you to repeatedly execute a certain piece of code
* They can also be thought of an abstraction of an action.
  * eg. `getUserAge()` you don't need to even see the code to understand that it will obtain user's age
* Every variable declared inside the function block has function scope - they cannot be used or even seen outside of the function and they are destroyed when the function completes
  * This ensures that even if there is a variable with the same name as in another function, they cannot interfere with each other
* Functions can be passed around like variables. 
* They can be called by using the parentheses after the function name eg. `myFunction()` 
* A function can also call themselves, this is called recursion
  * When performing recursion, ensure that you have a stopping condition, otherwise you will recurse infinitely and overflow your stack.

```javascript
/* Three ways to declare functions */

function myFunction(parameter) {
  // do something
}

var myFunction = function(parameter) {
  // do something
}

(parameter) => {
  // do something
}
```

### Arrays and Objects
* An Array is a collection of ordered elements
* An Object is a collection of key value pairs where the values maybe variables, functions or other objects
* JS is a pass-by-reference language
  * Every time a variable is moved, (eg. into a different function as a param,) it's value isn't copied, instead its reference is copied
  * This allows the language to be much faster

```javascript
// Initializing arrays
let array = [];
// or 
let array = [1, 2, 3];

// Obtaining array length
let length = array.length;

// Accessing array items
let firstItem = array[0]; // Arrays begin at 0!
let secondItem = array[1];
let lastItem = array[array.length - 1];

// Inserting into array
array.push("new item");

// Removing from array (end)
let lastItem = array.pop() // Last item is removed and returned

// looping over array
for (let i = 0; i < array.length; ++i) {
  let item = array[i];
  // do something
}
// or
array.forEach((item) => {
  // do something
})
```

```javascript
// Creating object
let course = {
  name: "Comp-466",
  description: "Advanced Technologies for Web-Based Systems",
  assignments: 3,
  "completed-assignments": 1,
  isFinished: function () {
    return this["completed-assignments"] == this.assignments;
  },
};

// Accessing object property
let courseName = course[name];
let isFinished = course.isFinished();

// Built in objects
let string = new String();
let num = new Number();
let bool = new Boolean();

// Built in objects have useful functions
string.toUpperCase();

// Example of using Math
Math.round(3.5); // Round 3.5 to 4.0
```

### Canvas
* Allows you to draw high performance, interactive graphics on the webpage
* It has native support, no need for external plugins or libraries

```javascript
/* Drawing a line */

// In HTML
<canvas id="canvas" width="200" height="200" ></canvas>

// In JS file
let canvas = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke(); 
```

Generating Random Numbers:
0 <= Math.random() < 1

Scoping Rules
* Variables can only be referenced inside of their scope
* Global variables can be referenced in any part of the program and thus have a global scope
* Variables (and identifiers) defined inside a function can only be referenced inside of that function. Thus, it can be said that functions define a new scope.




Common Global JS Functions
* isNaN() - returns true if the value is not-a-number
* parseFloat() - takes in a string and returns a float, if there are any errors, NaN is returned
* parseInt() - takes in a string and returns a int, if there are any errors, NaN is returned




```javascript
let card = document.getElementByClassName("card"); // get element with class name
let sushi = document.getElementByID("sushi"); // get element with id

document.writeln("<p>something</p>") // allows you to add html code to the html document
window.prompt("Prompt: ") // used to obtain user input

sushi.addEventListener("click", eatSushi());

window.addEventListener("load", start, false);

```


