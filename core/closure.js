var index = 15;

var func = function() {
	var index = 5;

	return function() {
		return index;
	};
};

var func = function() {	
	console.log(firstFunc()()); // => 5
};

func();