function map(xs, fn) {
  var retval = [];
  for (var i = 0, len = xs.length; i < len; i += 1) {
    retval.push(fn(xs[i]));
  }
  return retval;
}
console.log(map([1, 2, 3, 4, 5], function (x) { return x * 2; }));   // => [2, 4, 6, 8, 10]
console.log(map(['foo', 'bar', 'baz'], function (x) { return x + ' is awesome'; })); // => ['foo is awesome', 'bar is awesome', 'baz is awesome']
console.log(map([1, 2, 3], function (x) { return 'and a ' + x; })); // => ['and a 1', 'and a 2', 'and a 3']
