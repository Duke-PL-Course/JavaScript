# JavaScript Assignment

All skeleton files are provided in the `assignments` folder. Please fork this repo to get started. For what forking means or how to fork a repo, please visit [this github help page][help] for a detailed explanation.

Again, please feel free to post questions on [github Issues page][issues] for the repo.

---

## Q1: Multiples of 3 and 5

Find the sum of all positive multiples of 3 or 5 below a specified number (`limit`).

```javascript
function multiples (limit) {
  // ...
}
```

Example Tests:

```javascript
multiples(1);   // => 0
multiples(10);  // => 23
multiples(16);  // => 60
```

### Hint

Numbers that are both multiples of 3 and 5 should only be counted once. For example, **15** should only be counted as once.

Note that `limit` is **non-inclusive**, so if the limit was `15`, the list of numbers we would be interested in are `[3, 5, 6, 9]`.

---

## Q2: Implement Map

The `map` function is one that we saw in Ruby's [`Enumerable`][enumerable] module, and we've seen it in [underscore.js][underscore] as well. We will continue to see it again and again, especially when we explore some of the more functional languages. Because it is such an essential function, we want you to understand how it works by implementing it. In addition, you'll see that the next two questions are in the same vein and ask you to implement two more common functions that are seen in functional languages.

`map` will take an array `xxs` of length greater than or equal to 0, and apply a function `fn`, to all elements of the array. `fn` will take a single parameter, and it is the job of `map` to pass each element of the array to `fn`. What `map` will return is an array of the same length as the input; however, the elements of the array will be transformed by `fn`. Please note that you should not change the original values of the input array `xxs`; it should be treated as **immutable**. So, you should create a new array to be returned.

```javascript
function map (xxs, fn) {
  // ...
}
```

Example Tests:

```javascript
map([1, 2, 3, 4, 5], function (x) { return x * 2; });   // => [2, 4, 6, 8, 10]
map(['foo', 'bar', 'baz'], function (x) { return x + ' is awesome'; }); // => ['foo is awesome', 'bar is awesome', 'baz is awesome']
```

### Hint

`map`'s job is basically to iterate over all elements of an array, applying a function to each, and returning the collective result as a new array. Don't try to over think this one.

Some implementations of `map` in functional languages prefer a recursive implementation involving pattern matching; however, in JavaScript, it will most likely be easier to use an iterative implementation. The choice is ultimately up to you, however.

---

## Q3: Implement Filter

### Hint

---

## Q4: Implement Reduce

### Hint

---

## Q5: Prototypal Inheritance

### Hint

---

## [Bonus] Async Waterfall


<!-- links -->
[enumerable]: http://ruby-doc.org/core-1.9.3/Enumerable.html
[underscore]: http://underscorejs.org
[issues]: https://github.com/Duke-PL-Course/JavaScript/issues?state=open
[help]: https://help.github.com/articles/fork-a-repo
