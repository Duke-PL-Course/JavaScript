try{ // expected error
  eval('1 + * 5'); // invalid code
} catch(e) { // processing errors
  console.log(e.name); // =>  SyntaxError
} finally { // performed in any case
  console.log('finally');
}
