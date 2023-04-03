function toggleMenu() {
    document.getElementById('navbar2').classList.toggle('nav-active')
    document.getElementById('burger').classList.toggle('crossed_line')
}

document.getElementById('burger').addEventListener('click', toggleMenu)

const burger = document.getElementById('burger')
const nav = document.getElementById('navbar2')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)