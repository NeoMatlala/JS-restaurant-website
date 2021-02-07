/* ----- SHOW MENU ------ */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // check that variables exist
    if(toggle && nav){
        // add show-menu class to the nav-menu
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


/* --------------- REMOVE MOBILE MENU --------------------- */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //remove menu when a link is clicked/selected/touched
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* --------------- SCROLL SECTION ACTIVE LINK ------------ */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach( current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/* ----- CHANGE HEADER/NAV COLOR ON SCROLL ------ */
function scrollHeader(){
    const nav = document.getElementById('header')

    // add scroll-header class to header tag when the scroll is greater than 200vh
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/* ----- SHOW SCROLL TOP FUNCTIONALITY ------ */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    // add show-scroll class to header tag when the scroll is greater than 560vh
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)


/* ----- DARK/LIGHT THEME ------ */
