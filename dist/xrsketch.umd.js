(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('three')) :
  typeof define === 'function' && define.amd ? define(['three'], factory) :
  (global.xrsketch = factory(global.THREE));
}(this, (function (THREE) { 'use strict';

  function xrsketch() {
    console.log("I'm the xrskecth module and THREE is:", THREE);
  }

  return xrsketch;

})));
