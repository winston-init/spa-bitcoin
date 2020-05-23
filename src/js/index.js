'use strict'

import Home from './../views/pages/Home.js'
import Contact from './../views/pages/Contact.js'
import MessageSent from './../views/pages/SentMessage.js'
import NotFound from './../views/pages/404.js'

import Navbar from './../views/components/NavBar.js'
import Bottombar from './../views/components/BottomBar.js'

import Utils from './../services/Utils.js'

const routes = {
  '/' : Home,
  '/contact' : Contact,
  '/message' : MessageSent
}

const router = async () => {
  const header = null || document.querySelector('header')
  const content = null || document.querySelector('main')
  const footer = null || document.querySelector('footer')

  window.scrollTo(0, 0)

  header.innerHTML = await Navbar.render()
  await Navbar.afterRender()
  footer.innerHTML = await Bottombar.render()
  await Bottombar.afterRender()


  let request = Utils.parseRequestURL()


  let parsedURL = (request.resource ? '/' + request.resource : '/')
   + (request.id ? '/:id' : '')
   + (request.verb ? '/' + request.verb : '')


  let page = routes[parsedURL] ? routes[parsedURL] : NotFound
  content.innerHTML = await page.render()
  await page.afterRender()
}

window.addEventListener('hashchange', router)

window.addEventListener('load', router)
