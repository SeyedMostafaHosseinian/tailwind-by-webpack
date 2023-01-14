import './styles/input.scss';

const documentElement = document.documentElement;

const lightModeBtn = document.getElementById("light-mode");
const darkModeBtn = document.getElementById("dark-mode");


lightModeBtn.addEventListener('click',() => {
    documentElement.classList.contains('dark') && documentElement.classList.remove('dark')
    localStorage.setItem('theme','light')
})

darkModeBtn.addEventListener('click',() => {
    !documentElement.classList.contains('dark') && documentElement.classList.add('dark')
    localStorage.setItem('theme','dark')
})

window.addEventListener("DOMContentLoaded", () => {
    const themeMode = localStorage.getItem('theme')
    themeMode === 'dark' && documentElement.classList.add('dark')
})
