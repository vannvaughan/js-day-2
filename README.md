# JS Objects & Arrays

## Contents
- [Review](#user-content-review)
    - [History](#user-content-history)
    - [JS and the DOM](#user-content-js-and-the-dom)
    - [JS and the BOM](#user-content-js-and-the-bom)
- [Using JS](#user-content-using-js)
- [Debugging](user-content-debugging)
- [Arrays](#user-content-arrays)
- [Objects](#user-content-objects)
- [Prototypes](#user-content-prototypes)
- [Loops](#user-content-loops)

## Review
### History
Before time began, chaos ruled over the universe--no wait, I'm doing the history of JavaScript. Well, you don't really need to know much about JavaScript's history to use it, but it might help to know a few highlights. This history also might help to explain a few quirks about the language. 

#### Development
JS began at Netscape (an ancient browser and the predecessor to Firefox, for those of you younger than I), and a similar implementation developed later at Microsoft (called JScript). These early stage were an attempt to create a language that would allow programmers to dynamically alter the content of web pages. 

#### Standardization
As you can imagine, having different languages for different browsers was not ideal, so the European Computer Manufacturer Association (ECMA) took on the task of standardizing the language, with cooperation from all of the major companies involved in the web. As a result, we have a JavaScript standardized across browsers, known also as ECMAScript (or ES). The ECMA periodicaly releases new editions (or versions) of ECMAScript, and we're currently on ES5, though many browsers support the features available in the newest edition (ES6). For this course, we'll first focus on ES5, and then we'll show you the advanced features in ES6 later. 

#### Beyond the Browser 
Though JS was designed to work with web pages--and we'll cover this functionality--JS has also become a full-stack language, which allows users to write servers in JS. So though we'll talk today about JS and the browser, we'll try to keep the examples generic enough that they'll serve as examples for the front end or back end. 

### JS and the DOM
The Document Object Model, or DOM, is the application programming interface, or API, which allows us to manipulate HTML and styles on a web page. The browser reads the HTML and creates a map of the document content in the DOM. Essentially, it is a tree of nodes, each of which contains an HTML element. The DOM provides us with access to the HTML through these nodes. Additionally, the DOM provides us with information about the events which happen on the web page. To see the document object model, open your browser and the console and type `document` in the console. You should see the elements of the web page listed under the document object. 

### JS and the BOM
To access the window which contains the web page, we also have access to the Browser Object Model. Through this model, we can access and set properties of the window or find out which browser the user is on. To see the browser object model, open your browser and console again and type `window` or `navigator` in the console. Open the objects to see the properties available to you. 

## Using JS
### Using DOM and BOM
Let's practice using JS a bit to interact with a web page. In particular, let's try the following tasks: 
- Change a heading 
- Change a style 
- Get text input from the user
- Get the window size
- Change the window location
- Get the geolocation of the user

## Debugging 
We can use the Chrome Developer tools to watch our script execute. Open the sources tab on your dev tools. Open your `script.js` file. You can manually set a breakpoint by right-clicking on a line of code, or you can write the expression `debugger;` on a line of code.

Once you have a breakpoint, the execution of your code should pause at that point. (You may have to refresh your page, depending on where you put the breakpoint.)

For a simple example, uncomment the call to `sampleDebugging()` in your `script.js` file. 

Once you have execution paused, click the arched arrow to step line by line through the function. You can watch the values of the variables change on the lines, or you can add variables to the watch stack to see the values. 

## Arrays
### Basics
- Purpose
- Literals
- Accessing elements

### Prototype Methods 
- .push()
- .pop()
- .shift()
- .unshift()
- .slice()
- .splice()
- .concat()
- .forEach()
- .map()
- .reduce()


### Array Object
In addition to creating an array literal, we can also create a new array by using the array object. Here's the code: 

```
var friends = new Array(13);
```

## Objects
### Basics
- Purpose
- Literals
- Key/Value Pairs
- Accessing elements

### Properties and Methods
- Creating Methods
- Using the keyword 'this'

### Prototype Methods
- .hasOwnProperty()
- .assign()

## Prototypes
- Purpose
- Creating a Prototype

## Loops, Arrays, and Objects
- standard for loops
- for in loops
- for of loops