# Documenting 30 days of Vanilla JS


## Table of Contents
- [Documenting 30 days of Vanilla JS](#documenting-30-days-of-vanilla-js)
  - [Table of Contents](#table-of-contents)
    - [4. Array Cardio](#4-array-cardio)
      - [Array.prototype.sort()](#arrayprototypesort)
      - [textContent](#textcontent)
      - [[nodemaps to Array]](#nodemaps-to-array)
      - [JSX Spread Operator](#jsx-spread-operator)
      - [Array.from()](#arrayfrom)
      - [Array.prototype.includes.()](#arrayprototypeincludes)
      - [String.prototype.split()](#stringprototypesplit)
      - [Destructuring Assignments](#destructuring-assignments)
      - [Array.prototype.reduce()](#arrayprototypereduce)
    - [5 Flex Panels](#5-flex-panels)
      - [CSS Cheat Sheet](#css-cheat-sheet)
      - [HTML DOM querySelector() method](#html-dom-queryselector-method)
      - [HTML DOM addEventListener()](#html-dom-addeventlistener)
      - [Event references](#event-references)
      - [Toggle](#toggle)
    - [6.typeahead](#6typeahead)
      - [fetch()](#fetch)
      - [RegExp.prototype.test()](#regexpprototypetest)
      - [string.prototype.match](#stringprototypematch)
      - [Element.inner.HTML](#elementinnerhtml)
    - [7. Array cardio 2](#7-array-cardio-2)
      - [Array.prototype.every](#arrayprototypeevery)
      - [Array.prototype.some](#arrayprototypesome)
      - [Array.prototype.findIndex()](#arrayprototypefindindex)
      - [Array.prototype.slice()](#arrayprototypeslice)
    - [8. Html5canvas](#8-html5canvas)
      - [HTMLCanvasElement.getContext()](#htmlcanvaselementgetcontext)
      - [CanvasRenderingContext.2D.strokeStyle](#canvasrenderingcontext2dstrokestyle)
      - [CanvasRenderingContext.2D.lineJoin](#canvasrenderingcontext2dlinejoin)
      - [CanvasRenderingContext.2D.lineCap](#canvasrenderingcontext2dlinecap)
      - [CanvasRenderingContext2D.beginPath()](#canvasrenderingcontext2dbeginpath)
      - [CanvasRenderingContext2D.moveTo()](#canvasrenderingcontext2dmoveto)
      - [CanvasRenderingContext2D.lineTo()](#canvasrenderingcontext2dlineto)
      - [CanvasRenderingContext2D.stroke()](#canvasrenderingcontext2dstroke)
    - [10. checkbox challenge](#10-checkbox-challenge)
      - [shiftKey](#shiftkey)
### [4. Array Cardio](4arraycardio/index.html)
**learning targets**

-***use [] to access array objects***

-***use . notation to access object keys***
#### [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
-***The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.***

-***passing in a function to the sort method***

``` 
function compare(a,b) {
      return (a.passed - a.year) - (b.passed - b.year)
    }

    let sortedbylifetime = inventors.sort(compare)
```

-***you are creating a value with the compare function which will be a product of the sort parameters, and using that custom value one can sort the array***
#### [textContent](https://tutorialcodeplay.com/javascript/javascript-textcontent.html#:~:text=textContent%20in%20javascript%20textContent%20property%20is,used%20to%20get%20or%20set%20text%20content.)

-***textContent property is used to get or set text content.***
```HTML
<div id="testid"></div>

<button onclick="fun_name();">Click me</button>
	
<script>
function fun_name()
{
	var elem=document.getElementById("testid");
	elem.textContent="<b>Bold</b><u>UnderLine</u>";
}
</script>
```
#### [nodemaps to Array]
-***nodemaps do not have the same prototype as a traditional array***
#### [JSX Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
-***applied JSX spread (...) operator to take elements out of an interable into an array***
#### [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
-***Array.from() can also be used to create an array out of an iterable***
#### [Array.prototype.includes.()](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/includes)
-***The includes() method determines whether an array includes a certain value among its entries, returning -true or false as appropriate.***

#### [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
#### [Destructuring Assignments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
-***The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.***
```JavaScript
   let lastsort = people.sort((previous,next) => {
      console.log(previous)
      // the names are last, Firstname -> so I am destructuring the array to reflect this 
      let [aLast, aFirst] = previous.split(", ")
      let [bLast, bFirst] = next.split(", ")
      return (aLast > bLast)
    });
```
#### [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/reduce)
```JavaScript
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```
***initialize the object, if the object has no cv key --> create a key : 0 --> everytime that key is iterated on add 1 to the value***
```JavaScript
 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const instances = data.reduce((pv,cv) => {
    // creat the object if it does not exist
    if (!pv[cv]) {
      pv[cv] = 0
    };
    // object[currentvalue] add one
    pv[cv]++
    //return final reduction item
    return pv
    }, {})
```

### [5 Flex Panels](5flexpanels/index-START.html)
**Learning Targets**
#### [CSS Cheat Sheet](https://www.sketchingwithcss.com/samplechapter/cheatsheet.html?utm_source=CSS-Weekly&utm_campaign=Issue-86&utm_medium=email)
-***Using CSS to modify styles***
***Selecting all first children if an element***
```CSS
.class > *:first-child
```

#### [HTML DOM querySelector() method](https://www.w3schools.com/jsref/met_document_queryselector.asp#:~:text=HTML%20DOM%20querySelector%20%28%29%20Method%201%20Definition%20and,5%20Technical%20Details.%20...%206%20More%20Examples.%20)

-***using the query selector all will return items int o a node list which has different properties***
-***one can call .forEach() on the nodelist***

#### [HTML DOM addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
-***listens for an event, first argument, and runs function, second argument***
-***can be used in conjunction with .forEach to apply an event listener to all elements with that class***

#### [Event references](https://developer.mozilla.org/en-US/docs/Web/Events)
-***the list of events that can be passed into eventlistener***

#### [Toggle](https://www.w3schools.com/howto/howto_js_toggle_class.asp)
-***turning on and off class list on an eventlistner***

### [6.typeahead](6typeahead/index-START.html)
**Learning Targets**

#### [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

-***Fetch does not know what data comes after fetched***
```JavaScript
fetch(endpoint).then(blob => console.log(blob))
```
-***A fetch response is a promise (blob), because JS doesn't know what data is in this ressponse, blob can have json called on it ,blob.json() to return another promise, which we can call .then() on again to return the data***
-***includes is specific***
#### [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
-***The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.***
#### [string.prototype.match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
-***The match() method retrieves the result of matching a string against a regular expression.***
#### [Element.inner.HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
-***The Element property innerHTML gets or sets the HTML or XML markup contained within the element.***

### [7. Array cardio 2](7arraycardio2/index-START.html) 
#### [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
#### [Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
#### [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
#### [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### [8. Html5canvas](8html5canvas/index-START.html)
#### [HTMLCanvasElement.getContext()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
-***The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported, or the canvas has already been set to a different context mode.***
-***Later calls to this method on the same canvas element, with the same contextType argument, will always return the same drawing context instance as was returned the first time the method was invoked. It is not possible to get a different drawing context object on a given canvas element.***
#### [CanvasRenderingContext.2D.strokeStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
#### [CanvasRenderingContext.2D.lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
#### [CanvasRenderingContext.2D.lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap)
#### [CanvasRenderingContext2D.beginPath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
#### [CanvasRenderingContext2D.moveTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)
#### [CanvasRenderingContext2D.lineTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
#### [CanvasRenderingContext2D.stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)

### [10. checkbox challenge](10checkboxchallenge/index-START.html)

#### [shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey)
