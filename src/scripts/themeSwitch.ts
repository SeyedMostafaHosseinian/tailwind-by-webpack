const themeSwitcher = document.getElementById('theme-switcher')
const documentElement = document.documentElement

themeSwitcher?.addEventListener('click',function handle(e) {
 
    const currentTheme = (!localStorage.getItem('myProjrct-theme') ? 'light' : localStorage.getItem('myProjrct-theme') === 'light' ? 'light' : 'dark' )
    console.log(currentTheme)
    if(currentTheme === 'light'){
        documentElement.classList.add('dark')
        localStorage.setItem('myProjrct-theme','dark')
        console.log(1)

    }else if(currentTheme === 'dark') {
        documentElement.classList.remove('dark') 
        localStorage.setItem('myProjrct-theme','light')
        console.log(2)
    }

})
window.addEventListener("DOMContentLoaded", () => {
    const themeMode = localStorage.getItem('myProjrct-theme')
    themeMode === 'dark' && documentElement.classList.add('dark')
})