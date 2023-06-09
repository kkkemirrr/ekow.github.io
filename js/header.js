const aboutUs = document.querySelector('.about')
const contacts = document.querySelector('.cont')
const login = document.querySelector('.login')
const loginGoogle = document.querySelector('.logingoogle')
const close = document.querySelector('.close')
contacts.addEventListener('click', () => {
    contacts.innerHTML = '+996 507567676'
    contacts.style.fontSize = '20px'
    contacts.style.fontWeight = '50px'
    alert(' Наши контакты : +996 507567676')
})
login.addEventListener('click', () => {
    loginGoogle.classList.remove('none')
})
close.addEventListener('click', () => {
    loginGoogle.classList.add('none')
})