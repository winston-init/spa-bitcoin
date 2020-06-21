const Navbar = {
  render: async () => {
    const view = /* html */`
      <nav>
          <ul class="navbar">
              <li class="navbar-item">
                <a href="/#/">Home</a>
              </li>
              <li class="navbar-item">
                  <a href="/#/account">Account</a>
              </li>
              <li class="navbar-item">
                  <a href="/#/contact">Contact us</a>
              </li>
          </ul>
          <div class="hamburguer-icon">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
      </nav>
    `

    return view
  },
  afterRender: async () => {
    const hamburguerIcon = document.querySelector('.hamburguer-icon')

    function openNavScreen() {
      const navbar = document.querySelector('.navbar')
      const body = document.querySelector('body')

      navbar.classList.toggle('mobile')
      hamburguerIcon.classList.toggle('close-mode')
      body.classList.toggle('blocked')

      console.log('event triggered')
    }

    hamburguerIcon.addEventListener('click', openNavScreen)
  }

}

export default Navbar