(function () {
  var lis = document.getElementsByTagName('li');
  var genClick = function(index) {
    return function (e) {
      alert(index);
    };
  }
  for (var i = 0, len = lis.length; i < len; i += 1) {
    var li = lis[i];
    li.onclick = genClick(i);
  }
}());
