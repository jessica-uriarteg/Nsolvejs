'use strict' ;
var   minor = require('./minor');

/** @function
 * The determinat of matrix.
 * @param  {Object} matrix.
 * @return {Number} determinant.
 */
  var    det = function (B){
    if (!B) { return ;}
       var det;
       if(  B.row === B.column &&  B.row >= 0 ){
         if(B.row >2){
           var ii=B.column,i, arrayminor=[] ;
           det = 0 ;
           for (i=1 ;i<=ii;i++){
             arrayminor[i-1]= minor(1,i,B);
           det += Math.pow(-1,1+i)*det(arrayminor[i-1])*B._(1,i) ;
           }
         }else{
           if (B.row ===2) {
             det = B._(1,1)*B._(2,2)-B._(1,2)*B._(2,1);
           } else if (B.row === 1 ){
           det = B._(1,1) ;
           }
         }
         return  det;
       }
     };
module.exports = function (B,cb) {
  if (cb && typeof cb === 'function') {
    setImmediate(function () {
      cb(det(B));
    });
  } else {
    return det(B) ;
  }
};
