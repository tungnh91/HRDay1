// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
//   var result = [];
//   // your code here
//   console.log(document.body);
//   var child = document.body.childNodes;
//   console.log(typeof child);
//   for (var k in child) {
//     console.log(" key " + k + "val" + child[k]);
//   }
//   //var array = Array.prototype.slice.call(child);
//   //console.log( "array" + array);

  
//   //if (childNodes !== undefined) {
//   for (var i = 0; i < array.length; i++) {
//       //console.log('childnode is ' + array[i]);
//       if (childNodes[i].classList.contains(className)) {
//         //console.log(childNodes[i]);
//         result.push(childNodes[i]);







//       } else {
//         getElementsByClassName(childNodes[i]);
//       }
//     }
//   //}

  

//   return result;
  

// };


var getElementsByClassName = function(className) {
  var result = [];

  var helper = function(className, currentNode) {
    if (currentNode === undefined) {
      return;
    }
    var childs = currentNode.childNodes;
    for (var i = 0; i < childs.length; i++) {
      //console.log(childs[i]);
      if (childs[i].classList !== undefined && childs[i].classList.contains(className)) {
        result.push(childs[i]);
      } 
      helper(className, childs[i]);
    }
  };
  
  if (document.body.classList.contains(className)) {
    result.push(document.body);
  }
  helper(className, document.body);
  console.log(result);
  return result;
};