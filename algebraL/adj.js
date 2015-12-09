'use strict' ;
var     det = require('./det'),
     minor = require('./minor'),
     trans = require('./trans') ;
/** @function
 * The adjunted matrix.
 * @param  {Object} matrix
 * @return {Object} matrix
 */
function adj(B){

       if (!B) { return ;}
       var  Matrix = require('./Mat');
       if (B.row > 1) {
         if( B.row === B.column ){
           var ii=B.row,kk=B.column,array = [],i,k ;
           for (i=1 ;i<=ii;i++){
             array[i-1]=[];
             for (k=1 ;k<=kk;k++){
                 array[i-1][k-1]=Math.pow(-1,i+k)*det(minor(i,k,B));
             }
           }
           return trans(new Matrix(array)) ;
         }
       }
       return new Matrix([[1]]);
     }
   module.exports = function (B,cb) {
     if (cb && typeof cb === 'function') {
       setImmediate(function () {
         cb(adj(B));
       });
     } else {
       return adj(B) ;
     }
   };
