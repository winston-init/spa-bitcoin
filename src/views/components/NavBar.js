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
          <!-- <a href="#convert-btc">
              <button class="btn btn-btc">Convert BTC</button>
          </a> -->
      </nav>
    `

    return view
  },
  afterRender: async () => { }

}

export default Navbar