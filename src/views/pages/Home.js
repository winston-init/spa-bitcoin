import animationUI from './../../js/animation.js'
import interfaceUI from './../../js/ui.js'
import main from './../../js/app.js'

const Home = {
  render: async () => {
    const view = /* html */`
    <main>
      <section class="home">
          <h1 class="title">Conheça o mercado do Bitcoin</h1>
          <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt quidem 
          consequatur aid assumenda maxime, eaque magni et ab natus fugit! Atque repudiandae libero in alias 
          corrupti eaque dolorem.</p>
          <img src="assets/images/undraw_bitcoin2_ave7.svg" alt="">
          <a href="#about">
              <span class="scroll-arrow"></span>
          </a>
      </section>
      <section class="about" id="about">
          <div class="what-is">
              <div class="content-container">
                  <h1 class="title">O que é?</h1>
                  <p class="text">Bitcoin é uma moeda digital, descentralizada e que não necessita de terceiros para 
                  funcionar. Isso significa que você não depende de bancos, grandes corporações ou governos para 
                  movimentar o seu dinheiro. Com o Bitcoin, o dinheiro é realmente seu. O Bitcoin foi a primeira 
                  criptomoeda do mundo e há oito anos funciona sem qualquer interrupção, baseada em uma rede 
                  descentralizada extremamente segura chamada Blockchain criada por Satoshi Nakamoto.</p>
              </div>
              <img src="assets/images/undraw_digital_currency_qpak.svg" alt="">
          </div>

          <div class="for-what">
              <img src="assets/images/undraw_crypto_portfolio_2jy5.svg" alt="">
              <div class="content-container">
                  <h1 class="title">Para que serve?</h1>
                  <p class="text">A lógica da moeda digital é a mesma do dinheiro em espécie. Sua função é, basicamente, 
                  permitir transações de compra e venda de bens e serviços. Grandes empresas, como WordPress, DELL e 
                  Soundcloud, já aceitam pagamento com criptomoeda. Outra possibilidade é a transferência de valores 
                  pela internet, sem a necessidade de taxas cobradas por instituições financeiras e bancárias.</p>
              </div>
          </div>
      </section>
      <section class="convert-btc" id="convert-btc">
          <h1 class="title">Try convert some numbers</h1>
          
          <div class="currency">
              <input type="number" id="input-currency">

              <div class="currency-symbol-wrapper active">
                  <div class="currency-symbol">USD</div>
                  <div class="arrow-down show"></div>
              </div>
              
              <ul class="select-currency-container">
                  <li>USD</li>
                  <li>BRL</li>
                  <li>EUR</li>
              </ul>
          </div>
          
          <div>
              <button class="switch-order">
                  <img src="assets/icons/swap_vert-black-18dp.svg" alt="Swap currencies">
              </button>
          </div>
          
          <div class="result">
              <div class="result-content"></div>
              <div class="result-symbol">BTC</div>
          </div>
      </section>
    </main>
    `

    return view
  },
  afterRender: async () => {
    const footer = document.querySelector('footer')
    
    document.querySelector('header').classList.remove('no-display')
    footer.classList.remove('no-display')
    document.querySelector('main').classList.remove('full-container')

    footer.classList.remove('fixed-in-bottom')

    const animation = animationUI()
    const ui = interfaceUI()
    const app = main()

    ui.eventDropdown()

    animation.scrollWindow()
    animation.clickToScroll()
    animation.switchOrder()

    const inputCurrency = document.querySelector('#input-currency')

    inputCurrency.value = 0

    app.calculateInput()

    inputCurrency.addEventListener('input', () => {
      app.calculateInput()
      ui.resizeDueChar()
    })
  }
}

export default Home