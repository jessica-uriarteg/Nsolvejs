'use strict' ;
/** @function
 * Down concat of a matrix.
 * @param {Object} matrix
 * @return {Object} matrix
 */
function concat(A,B){
        if (!B || !A) { return ;}
        var Matrix = require('./Mat');
        if (!(B instanceof Matrix)) {B =new  Matrix(B)}
        if (!(A instanceof Matrix)) {A =new  Matrix(A)}
         var array = A.array.concat(B.array)
         return  new Matrix(array) ;
     }
     module.exports = function (A,B,cb) {
       if (cb && typeof cb === 'function') {
         return new Promise(function(full,rej){
           try {
             full(cb(null,concat(A,B)))
           } catch (e) {
             rej(cb( e,null ) )
           }
         }
      )
       } else {
         return concat(A,B) ;
       }
     };