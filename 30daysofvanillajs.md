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
### [4. Array Cardio](4arraycardio/index-Start.html)
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