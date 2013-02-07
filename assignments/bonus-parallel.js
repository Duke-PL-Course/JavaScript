/**
 * @param hash is an hash of names to functions
 * @param callback is the final function
 */
function parallel(hash, callback) {
  var i = 0;
  var count = 0;
  var retval = {};
  var cb = function(err, key, data) {
    if (err) {
      callback(err);
      // replace callback with noop so the final
      // callback will only be executed once
      callback = function() {};
    } else {
      i += 1;
      retval[key] = data;
      if (i === count) {
        callback(null, retval);
      }
    }
  };

  // Count the number of functions
  var key;
  for (key in hash) {
    if (hash.hasOwnProperty(key)) {
      count += 1;
    }
  }

  // Dispatch functions
  for (key in hash) {
    if (hash.hasOwnProperty(key)) {
      hash[key](function(err, data) {
        cb(err, key, data);
      });
    }
  }
}

// example with non-erroring tasks
parallel({
  first: function(callback) {
    callback(null, {
      piece: 'of data'
    });
  },
  second: function(callback) {
    callback(null, {
      piece: 'of data'
    });
  }
}, function(err, data) {
  console.log(err, data);
  // > null { first: { piece: 'of data' }, second: { piece: 'of data' } }
});

parallel({
  first: function(callback) {
    callback(null, {
      piece: 'of data'
    });
  },
  second: function(callback) {
    callback('well shit');
  }
}, function(err, data) {
  console.log(err, data);  // > well shit undefined
});
