const NotFound = {
  render: async () => {
    const view = /* html */ `
      <div class="not-found-container">
        <h1 class="title">404</h1>
        <h3 class="subtitle">Page not found</h3>
        <div class="text">The link you clicked may be broken or the page may have been removed or renamed.</div>
        <a href="/#/">
          <button class="btn btn-back">
            <img src="assets/icons/arrow_back.svg">
            Home
          </button>
        </a>
      </div>
    `

    return view
  },
  afterRender: async () => { 
    document.querySelector('header').classList.add('no-display')
    document.querySelector('footer').classList.add('no-display')
    document.querySelector('main').classList.add('full-container')
  }
}

export default NotFound