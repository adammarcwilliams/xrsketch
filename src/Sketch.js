export default class Sketch {
  constructor (sketch) {
    if (sketch) {
      sketch(this)
    } else {
      // TODO: instead of adding the whole window could we assign only the functions we
      // need from the window to this object whilst keeping variables in scope?
      Object.assign(this, window)
    }

    if (this.setup) this.setup()
  }
}
