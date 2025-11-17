const navBar = document.getElementById('nav')
const btnHamburguesa = document.getElementById('btn-hamburguesa')
btnHamburguesa?.addEventListener('click', () => {
  navBar?.classList.toggle('desplegar')
})