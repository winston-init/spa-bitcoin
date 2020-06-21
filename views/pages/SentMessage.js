const MessageSent = {
  render: async () => {
    const view = /* html */ `
      <h2 class="message">Hello person, your message was sent with sucess. So as possible, we'll send you an email 
      to person@email.com with the answer.</h2>
    `

    return view
  },
  afterRender: async () => {
    document.querySelector('footer').classList.add('fixed-in-bottom')
    document.querySelector('body').classList.remove('blocked')
   }
}

export default MessageSent