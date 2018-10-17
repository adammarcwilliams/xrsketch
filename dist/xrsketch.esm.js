import * as THREE from 'three';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Sketch = function Sketch(sketch) {
  _classCallCheck(this, Sketch);

  if (sketch) {
    sketch(this);
  } else {
    // TODO: instead of adding the whole window could we assign only the functions we
    // need from the window to this object whilst keeping variables in scope?
    Object.assign(this, window);
  }

  if (this.setup) this.setup();
};

/* Add THREE to the window for users to access in their sketches */

window.THREE = THREE;
var globalMode = false;
var instance = null;
function createSketch(s) {
  if (!globalMode && !s) {
    console.error('No sketch passed to createSketch');
    return;
  }

  if (instance !== null) {
    console.error('An instance of XRSketch was already present and will be overwritten. Check your not calling createSketch twice or also including a setup function on the window');
  }

  var sketch = new Sketch(s);
  instance = sketch;
  return sketch;
}

var handleDOMLoad = function handleDOMLoad() {
  if (typeof window.setup === 'function') {
    globalMode = true;
    createSketch();
  }
};

document.addEventListener('DOMContentLoaded', handleDOMLoad);

export { createSketch };
