//Barra de navegação para celular
class MobileNavbar{
  constructor(mobileMenu, navList, navLinks){
    this.mobilMmenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick() {
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobilMmenu) {
        this.addClickEvent();
    }
    return this;
  }
}

const MobileNavbar = MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".navi-list li",
);
MobileNavbar.init();

//Questionário

function calcular() {
  var txtv = window.document.querySelector('input#txtvel')
  var res = window.document.querySelector('div#res')
  var vel = Number(txtv.value)
  res.innerHTML = `<p class="paragrafo">Sua velocidade atual é de </p>`
  if (vel > 60) {
    res.innerHTML += `<p class="paragrafo">Voce está Multado</p>`
  }
  res.innerHTML += `<p class="paragrafo">Dirija sempre com o sinto</p>`
}