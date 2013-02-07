function reduce(xs, fn, seed) {
  // NOTE: that seed is optional; you should give the appropriate default in the function body
  var i = 0, len = xs.length;
  if (typeof seed === 'undefined') {
    seed = xs[0];
    i = 1;
  }

  for (; i < len; i += 1) {
    seed = fn(seed, xs[i]);
  }
  return seed;
}
console.log(reduce([1, 2, 3, 4, 5, 6], function (memo, x) { return memo + x; }));        // => 21
console.log(reduce([1, 2, 3, 4, 5, 6], function (memo, x) { return memo + x; }, 21));    // => 42
console.log(reduce([1, 2, 3], function (memo, x) { return memo.concat([x * 2]); }, [])); // => [2, 4, 6]
