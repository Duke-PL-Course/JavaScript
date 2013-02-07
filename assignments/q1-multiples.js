function multiples(limit) {
  var sum = 0;
  for (var i = 3; i < limit; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multiples(1));
console.log(multiples(10));
console.log(multiples(16));
