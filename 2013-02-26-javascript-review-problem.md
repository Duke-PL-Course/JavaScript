# JavaScript Practice Review Problem

## Identifying Child Elements

The purpose of this problem is to learn a little bit about how the document object model (DOM) works along with event handlers, and to review closures. In this exercise, you'll be adding click handlers to items in a list. The behavior of the handler should be to pop up an alert that contains the position of the child. In other words, when clicking the first list item, it should pop up an alert with the contents `0` because it is the 0-th child.

In the `./review/` directory, you will find two files: `review.html` and `review.js`. The first file is going to be the test environment for running your code. Modify the code in `review.js` to add these click handlers.

## Hints

* Use [`document.getElementById()`](http://www.w3schools.com/jsref/dom_obj_core_document.asp) to retrieve a DOM element
* Refer to the [DOM Node][] API for some helpful methods.

[DOM Node]: http://www.w3schools.com/jsref/dom_obj_node.asp
