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

`map` will take an array `xs` of length greater than or equal to 0, and apply a function `fn`, to all elements of the array. `fn` will take a single parameter, and it is the job of `map` to pass each element of the array to `fn`. What `map` will return is an array of the same length as the input; however, the elements of the array will be transformed by `fn`. Please note that you should not change the original values of the input array `xs`; it should be treated as **immutable**. So, you should create a new array to be returned.

```javascript
function map (xs, fn) {
  // ...
}
```

Example Tests:

```javascript
map([1, 2, 3, 4, 5], function (x) { return x * 2; });   // => [2, 4, 6, 8, 10]
map(['foo', 'bar', 'baz'], function (x) { return x + ' is awesome'; }); // => ['foo is awesome', 'bar is awesome', 'baz is awesome']
map([1, 2, 3], function (x) { return 'and a ' + x; }); // => ['and a 1', 'and a 2', 'and a 3']
```

### Hint

`map`'s job is basically to iterate over all elements of an array, applying a function to each, and returning the collective result as a new array. Don't try to over think this one.

Some implementations of `map` in functional languages prefer a recursive implementation involving pattern matching; however, in JavaScript, it will most likely be easier to use an iterative implementation. The choice is ultimately up to you, however.

The type of the returned array does not need to match that of the input array.

---

## Q3: Implement Filter

`filter`, like `map`, is a very common function in functional languages. Filter will look through each value in an array `xs`, similarly to `map`, but instead of returning an array of transformed values, an array of values that meet the given criteria will be returned. The criteria is defined by a function `condition` that is passed as a paremeter, and the return value of `condition` will be a boolean, or something that can be evaluated in an `if` statement.

The contents of the input array `xs` should remain **immutable**, and the order of the output array should be [stable][] with respect to the input array. In other words, the order should be relatively the same, even if some items are omitted: things should not be shuffled around.

```javascript
function filter (xs, condition) {
  // ...
}
```

Example Tests:

```javascript
filter([1, 2, 3, 4, 5], function (x) { return x % 2 === 0; });              // => [2, 4]
filter([1, 2, 3, 4, 5], function (x) { return x % 2 === 1; });              // => [1, 3, 5]
filter(['I', 'am', 'fat', 'catz'], function (x) { return x.length >= 3; }); // => ['fat', 'catz']
```

### Hint

Much of the same structure used in `map` can be used in `filter`.

The returned value of `condition(x)`, where `x` is a single element in the input array, will be an expression that can be evaluated in an `if` statement.

---

## Q4: Implement Reduce

`reduce` is a slightly tricker function than the previous two, because it requires keeping track of something in addition to having an optional **seed value**, also known as the initial value. The basic duty of `reduce` is to boil down a list of elements into a single element. Even though this sounds mundane, it can be used very creatively to implement much more complex functionality.

`reduce` takes a list `xs`, an iterating function `fn`, and an optional `seed`. The list `xs` will be an arbitrary list of elements. The iterating function `fn`, will be a function that takes in two parameters, the first of which being the accumulating `seed` value. The `seed` can be initially provided in the function call to `reduce`; however, if it is not specified, the first value of the list should be used as the seed. Each successive step in `reduce` will essentially replace what was originally the `seed`, with what is returned from the function `fn`. Hopefully, the examples below will clarify.

```javascript
function reduce (xs, fn, seed) {
  // NOTE: that seed is optional; you should give the appropriate default in the function body
  // ...
}
```

Example Tests:

```javascript
reduce([1, 2, 3, 4, 5, 6], function (memo, x) { return memo + x; });        // => 21
reduce([1, 2, 3, 4, 5, 6], function (memo, x) { return memo + x; }, 21);    // => 42
reduce([1, 2, 3], function (memo, x) { return memo.concat([x * 2]); }, []); // => [2, 4, 6]
```

### Hint

Choosing an appropirate default value for the `seed` may be tricky. The flow should be given seed -> first element -> undefined. So if an empty array is passed in, and no seed is provided, the result should be undefined.

A memoizer should be kept that is initialized to the value of the `seed`, and then passed along to the function `fn` along with each successive element. The value of this memoizer should be being set at each step.

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
