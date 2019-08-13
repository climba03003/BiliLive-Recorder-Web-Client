class BaseSchema {
  constructor(o) {
    if (typeof o !== 'undefined') this.create(o)
  }

  create(o) {
    throw new Error('You should implement your own create method.')
  }

  update(o) {
    throw new Error('You should implement your own update method.')
  }

  static create(o) {
    if (Array.isArray(o)) {
      let r = new Array()
      for (let i = 0; i < o.length; i++) {
        r.push(new this(o[i]))
      }
      return r
    } else {
      return new this(o)
    }
  }

  static find(from, paths, value) {
    // From is Empty then Result Must be Empty
    if (!Array.isArray(from) || from.length === 0) return null
    paths = paths.split('.')
    return from.find(o => {
      let comp = o
      for (let path of paths) {
        comp = comp[path]
      }
      return comp === value
    })
  }

  static findIndex(from, paths, value) {
    // From is Empty then Result Must be Empty
    if (!Array.isArray(from) || from.length === 0) return null
    paths = paths.split('.')
    return from.findIndex(o => {
      let comp = o
      for (let path of paths) {
        comp = comp[path]
      }
      return comp === value
    })
  }

  toJSON() {
    return {}
  }

  toString() {
    return JSON.stringify(this.toJSON())
  }
}

export default BaseSchema
