const Utils = {

  parseRequestURL() {
    let url = location.hash.slice('1').toLowerCase() || '/'
    let r = url.split('/')
    let route = r[1]

    return route
  }
}

export default Utils