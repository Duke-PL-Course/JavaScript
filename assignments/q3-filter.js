function filter(xs, condition) {
  var retval = [], item;
  for (var i = 0, len = xs.length; i < len; i += 1) {
    item = xs[i];
    if (condition(item)) {
      retval.push(item);
    }
  }
  return retval;
}
console.log(filter([1, 2, 3, 4, 5], function (x) { return x % 2 === 0; }));              // => [2, 4]
console.log(filter([1, 2, 3, 4, 5], function (x) { return x % 2 === 1; }));              // => [1, 3, 5]
console.log(filter(['I', 'am', 'fat', 'catz'], function (x) { return x.length >= 3; })); // => ['fat', 'catz']
