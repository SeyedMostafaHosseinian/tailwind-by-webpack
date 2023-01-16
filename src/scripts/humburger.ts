const humburgerButton = document.getElementById("humberger-button");
const humburgerMenu = document.getElementById("humberger-menu");
const menuCloser = document.getElementById("menu-closer")
let openMenu = false;

function translateMenu() {
    if (!openMenu) {
        openMenu = true;
        humburgerMenu.classList.remove("-translate-x-full")
        menuCloser.classList.remove('hidden')
      }
      else {
        openMenu = false;
        humburgerMenu.classList.add("-translate-x-full")
        menuCloser.classList.add('hidden')
    
      }
}

humburgerButton.addEventListener("click", translateMenu)
menuCloser.addEventListener("click", translateMenu)