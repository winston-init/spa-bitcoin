const Contact = {
  render: async () => {
    const view = /* html */ `
      <div class="contact-container">
        <h1 class="title">Send us a message</h1>
        <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been.</p>
        <input type="text" class="input" placeholder="Name" spellcheck="false">
        <input type="email" class="input" placeholder="Email Address" spellcheck="false">
        <input type="text" class="input" placeholder="Subject">
        <textarea placeholder="Message"></textarea>
        <button class="btn btn-send">
          <a href="/#/message">Send</a>
        </button>
      </div>
    `

    return view
  },
  afterRender: async () => {
    document.querySelector('footer').classList.remove('fixed-in-bottom')
  }
}

export default Contact