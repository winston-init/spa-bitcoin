const Bottombar = {
  render: async () => {
    const view = /* html */`
      <div class="footer">
        <div class="footer-logo">
            <img src="assets/icons/bitcoin_logo.svg" alt="Bitcoin icon">
            <div class="logo">Coinvert</div>
        </div>
        <div class="footer-nav">
            <ul>
                <li><a href="/#/">Convert currencies</a></li>
                <li><a href="/#/contact">Send an message</a></li>
            </ul>
        </div>
        <div class="footer-info">
            <div class="wrapper language-container">
                <div class="language">English</div>
            </div>
            <div class="wrapper social-media-container">
                <ul class="social-medias">
                    <li>
                        <a href="http://github.com/winston-init/spa-bitcoin" target="_blank" rel="noopener noreferrer">
                          <img src="assets/icons/github_logo.svg" alt="Github">
                        </a>
                    </li>
                    <li>
                        <a href="facebook.com">
                          <img src="assets/icons/fb_logo.svg" alt="Facebook">
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com">
                          <img src="assets/icons/twitter_logo.svg" alt="Twitter">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="wrapper copyright-container">
                <span class="copyright">&copy; 2020 Coinvert. All rights reserved.<span>
            </div>
        </div>
      </div>
    `

    return view
  },
  afterRender: async () => { }

}

export default Bottombar