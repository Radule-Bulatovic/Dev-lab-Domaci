const handleNavSlide = () => {
   const navBurger = document.querySelector('.nav__burger-menu')
   const nav = document.querySelector('.nav__list-elements')
   const navLinks = document.querySelectorAll('.nav__list-element')

   navBurger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')

      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = ''
         } else {
            link.style.animation = `showLinks 0.5s ease forwards ${
               index / 7 + 0.8
            }s`
         }
      })
      navBurger.classList.toggle('toggle')
   })
}

handleNavSlide()
