// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }
  if (typeof obj === 'object') {
    var result = [];
    for (var k in obj) {
      if ( typeof obj[k] === 'function' || obj[k] === undefined) {
        continue;
      }
      result.push(stringifyJSON(k) + ':' + stringifyJSON(obj[k]));
    }
    return '{' + result.join(',') + '}';
  }
};
