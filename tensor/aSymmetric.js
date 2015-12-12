'use strict'
/** @function
 * Builder of a asymmetric tensor
 * @param {Number} n {Number} m {Function} mapping .
 * @return {Object} vector
 */
  var fac = [],data
var product = function (vec,res,i,_vec) {
  i = (i=== undefined) ? (vec.length -1) : i
 res = res || 1
 fac.unshift(res)
 if (i === 0) {
   return (_vec &&_vec[i]) ? res*vec[i]*_vec[i] : res*vec[i]
 }else {
   return product(vec,(_vec &&_vec[i]) ? res*vec[i]*_vec[i] : res*vec[i],i-1,_vec)
 }
}
function toPlaneArray(_data,res,i) {
 var l =_data.length -1
 i = (i=== undefined) ? 0: i
 res = res || []
if (i === l) {
  return res.concat(_data[i])
}else {
  return toPlaneArray(_data,res.concat(_data[i]),i+1)
}
}
module.exports = function (arg) {
  this._set = function (_data) {
    var data = toPlaneArray(_data)
    var l = data.length,i
    for ( i = 0; i < l; i++) {
      this.data[this._index+i]=data[i]
    }
    this._index = (this._index+l-1)%this._fac
  }
  this.set = function () {
      var data = arguments[arguments.length-1]
      var arg = Array.prototype.slice.call(arguments,0,arguments.length-1)
      this.data[product(this.facDimArray,undefined,undefined,arg)]=data
  }
  Object.defineProperty(this, 'setData', {
    get: function() { return this.data},
    set: function (data) {this._set(data) ; return this}
   });
  this._ = function functionName() {
    if (arguments.length !== this.index ){return }
    return this.data[product(this.facDimArray,undefined,undefined,arguments)]
  }
  if (Array.isArray(arg[arg.length-1]) ){
    this.setData = arg[arg.length-1]
    arg = arg.slice(0,arg.length-1)
  }
  this._fac = product(arg)
  this.data = new Array(this._fac)
  this.facDimArray = fac
  this.index = arg.length
  this.dim = arg
  this._index = 0
}
