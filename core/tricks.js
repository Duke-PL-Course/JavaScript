[10] === 10 // is false
[10]  == 10 // is true
'10' == 10 // is true
'10' === 10 // is false
 []   == 0 // is true
 [] ===  0 // is false
 '' == false // is true but true == "a" is false
 '' ===   false // is false 

// Check if a variable is undefined
// The typeof operator always returns a string!
if (typeof(variable) === "undefined") {
  // do something
}

// Logical operators tricks
var a = 5;
a == 5 && console.log( 'a is 5 \n' ); // a is 5 
a == 7 || console.log( 'a is not 7 \n' ); // a is not 7

// Special chars
$ = 4;
_ = 5;
console.log(_ + $); // 9

// eval this
function test() {
	Print(eval('this')); // 123
}
test.call(123);