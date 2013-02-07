/**
 * @param tasks is an array of functions
 * @param callback is the final function
 */
function waterfall(tasks, callback) {
  var i = 0;
  var cb = function(err) {
    var newArgs;
    if (err) {
      callback(err);
    } else {
      i += 1;
      newArgs = Array.prototype.slice.call(arguments);
      if (i === tasks.length) {
        callback.apply(null, newArgs);
      } else {
        newArgs.push(cb);
        tasks[i].apply(null, newArgs.slice(1));
      }
    }
  };

  tasks[i](cb);
}

// example with non-erroring tasks
waterfall([
  // the first task will always have the signature function (callback)
  function (callback) {
    // do stuff
    callback(null, 'one', 'two');
  },
  function (arg1, arg2, callback) {
    callback(null, arg1 + '1', arg2 + '2');
  }
], function (err, result1, result2) {
  // usually it is not idiomatic to return multiple result parameters;
  // however, we want to show that it is possible
  console.log(err, result1, result2);  // > null "one1" "two2"
});

waterfall([
  function (callback) {
    if (true) {
      // uh-oh, I error out
      callback("oh nooooez");
    } else {
      callback(null, 'would otherwise be foo');
    }
  },
  // the second task should never be called
  function (foo, callback) {
    console.log("I'm never called");
    callback(null, foo + 'bar');
  }
], function (err, result) {
  console.log(err, result);  // > "oh nooooez" undefined
});