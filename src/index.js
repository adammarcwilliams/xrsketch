import * as THREE from 'three'
import Sketch from './Sketch'

/* Add THREE to the window for users to access in their sketches */
window.THREE = THREE

let globalMode = false
let instance = null

export function createSketch (s) {
  if (!globalMode && !s) {
    console.error('No sketch passed to createSketch')
    return
  }

  if (instance !== null) {
    console.error(
      'An instance of XRSketch was already present and will be overwritten. Check your not calling createSketch twice or also including a setup function on the window'
    )
  }

  const sketch = new Sketch(s)
  instance = sketch
  return sketch
}

const handleDOMLoad = () => {
  if (typeof window.setup === 'function') {
    globalMode = true
    createSketch()
  }
}

document.addEventListener('DOMContentLoaded', handleDOMLoad)
