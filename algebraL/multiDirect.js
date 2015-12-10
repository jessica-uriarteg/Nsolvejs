'use strict' ;
var product = require('./productDirect');

/** @function
 * multiply the matrix object.
 * @param {Object} matrix {Object} matrix.
 * @return {Object} matrix
 */
function multi (array){
  var l = array.length, A =array[0],B;
    for (var p = 1; p < l; p++){
      B = array[p];
      if(  A.column === B.row){
      A=product(A,B)  ;
      }else{
      return ;
      }
    return A ;
}}
module.exports = function () {
  var arg= Array.prototype.slice.call(arguments);
  var cb = arguments[arguments.length-1];
  if (typeof cb === 'function') {
    arg.pop();
    setImmediate(function () {
      cb(multi (arg));
    });
  } else {
    return multi (arguments) ;
  }
};