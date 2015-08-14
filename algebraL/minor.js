'use strict' ;
var  _ = require('lodash') ,
matrix = require('./matrix'); 

/** @function
 * The minor m,n of matrix.
 * @param {Number} m  {Number} n  {Object} matrix
 * @return {Object} matrix
 */
     module.exports =  function (m,n,B){
       if(typeof m === 'number' && typeof n === 'number'&& B instanceof  matrix&&  0<m && m <= B.raw && 0<n && n <= B.column ){
         var ii=B.raw,array,i ;
         array = _.clone(B.array,true);
         for (i=1 ;i<=ii;i++){
               array[i-1].splice(n-1,1);
         }
         array.splice(m-1,1);
         return  new matrix(array);
       }
     };
