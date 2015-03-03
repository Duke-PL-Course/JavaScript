// set 
localStorage.setItem('name', 'Vasya');
// set using []
localStorage['name'] = name;

// get
var name = localStorage.getItem('name');
// get using []
var name = localStorage['name'];

// remove
localStorage.removeItem('name');

// clear
localStorage.clear(); // clean storage, but need reload page
location.reload(); // reload page