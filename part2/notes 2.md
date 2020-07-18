## Unit 2 - JavaScript

The purpose of this unit is to review JavaScript, a language which can be used to make web pages dynamic. Since JavaScript is a programming language, it shares many features of most programming languages such as variables and functions.

### Adding JS to your project

There are 3 ways to add JavaScript to your project:

* Internal - Adding JavaScript code in the HTML document via script tags: `<script> /* JavaScript Code Here */ </script>`
* External - Creating a new file that holds all of your JS code and linking that file to your HTML
* Inline - Adding JS code directly in the `onclick` attribute of functions

### Basic JS

* Declare variables with the `var`  keyword eg. `var five = 5;`
* JS is a dynamically type language which means you do not have variable types in you code, they are determined at runtime.
* Common JS types: `string`, `number`, `undefined`, `null`, `boolean`, `object`, `function`.
* Operators: `+`, `-`, `*`, `/` and `%`
* Comments: single line - `// I am a comment`, multiline - `/* I am a comment */`

### Control Statements
* `if` statements allows the code to take different paths depending on a condition
  * eg. `if (myVar === true) { // do something }`
* `if` statements are created using variables 

### Functions
* Functions are used extensively in javaScript, there are three ways to declare a function

```javascript
function myFunction() {
  // do something
}

var myFunction = function() {
  // do something
}

() => {
  // do something
}
```

functions can be passed around like variables. They can be called by using the parentheses after the function name eg. `myFunction()` 


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

Recursion
* Allows functions to call themselves
* Generally slower in performance than Iteration

Manipulating HTML code
* document.writeln("<p>something</p>") - allows you to add html code to the document when the statement is executed
* window.prompt("Prompt: ") - used to obtain user input