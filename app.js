id = (param) => {
    return document.getElementById(param)
}

$ = (param) => {
    return document.querySelector(param)
}

displayMode = (param, value) => {
    return (param.style.display = value)
}

addClass = (param, value) => {
    return param.classList.add(value)
}

removeClass = (param, value) => {
    return param.classList.remove(value)
}

// Déclaration des variables
const firstAnimation = $(".first-animation")
const secondPage = id("secondPage")
const section = $("section")
const preloader = $(".preloader")
const body = $("body")
const btn = id("letsVisit")
const accueil = $(".accueil")
const rtn = $(".return")
const zoom = $(".zoom")
const whiteMilk = $('.white-milk')
const visibleContentInAccueil = $('.first-content div')
const boyWithGlasses = $(".boy-glasses")
const parameter = $(".parameter")
const copyright = $(".text p")
const burgerMenu = $(".accueil div div:nth-child(2) img")
const menu = $(".accueil div div:nth-child(4)")
const closeMenu = $(".accueil div div:nth-child(4) img")
//const notMenu = $(".accueil :not(.accueil div div:nth-child(4))")
const link = $(".link")
const mainContent = $(".main-content")
const myMusic = $("audio")
const audioOn = id("soundOff")
const audioOff = id("soundOn")
const tooltip = $(".tooltiptext span")
const nickKevin = [
    $(".n1"),
    $(".i1"),
    $(".c"),
    $(".k1"),
    $(".k2"),
    $(".e"),
    $(".v"),
    $(".i2"),
    $(".n2")
]
var elementNotBlur = document.querySelectorAll('.accueil *:not(.accueil div:nth-child(1), .accueil div div:nth-child(4), .accueil div div:nth-child(4) a, .accueil div div:nth-child(4) img)')

// Définition des fonctions utiles
makeFirstPageAnimation = () => {
    nickKevin.forEach((element) => {
        addClass(element, 'zoom')
    })
    addClass(whiteMilk, 'changeColor')
    addClass(copyright, 'makeOpacity')
    displayMode(boyWithGlasses, 'initial')
    addClass(boyWithGlasses, 'scrollingRight')
    displayMode(parameter, 'initial')
    addClass(parameter, 'scrollingLeft')
}

removeFirstPageAnimation = () => {
    nickKevin.forEach((element) => {
        removeClass(element, 'zoom')
    })
    displayMode(btn, 'none')
    removeClass(whiteMilk, 'changeColor')
    removeClass(copyright, 'makeOpacity')
    displayMode(boyWithGlasses, 'none')
    removeClass(boyWithGlasses, 'scrollingRight')
    displayMode(parameter, 'none')
    removeClass(parameter, 'scrollingLeft')
}

makeSecondPageAnimation = () => {
    addClass(mainContent, 'scrollingDown')
    addClass(link, 'scrollingRight')
    addClass(audioOff, 'playOpacity')
    addClass(audioOn, 'playOpacity')
}

removeSecondPageAnimation = () => {
    removeClass(mainContent, 'scrollingDown')
    removeClass(link, 'scrollingRight')
    removeClass(audioOn, 'playOpacity')
    removeClass(audioOff, 'playOpacity')
}

makeBlur = () => {
    addClass(menu, 'notblur')
    elementNotBlur.forEach((element) => {
        addClass(element, 'blur')
        element.addEventListener('click', (event) => {
            event.preventDefault()
        })
    })
}

removeBlur = () => {
    elementNotBlur.forEach((element) => {
        removeClass(element, 'blur')
    })
    removeClass(menu, 'notblur')
}

isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
}

//enlever les éléments qui font du slide comme animation avant le chargement de la page
displayMode(boyWithGlasses, 'none')
displayMode(parameter, 'none')
makeFirstPageAnimation()

// QUAND LA PAGE EST CHARGEE
window.addEventListener("load", () => {

    //initialiser les animations
    displayMode(btn, 'none')
    displayMode(preloader, 'none')
    displayMode(audioOff, 'none')
    displayMode(menu, 'none')
    makeSecondPageAnimation()

    //écouter les évènements pour les animations
    nickKevin[8].addEventListener('animationend', () => {
        nickKevin.forEach((element) => {
            removeClass(element, 'zoom')
        })
    })

    nickKevin[0].addEventListener('animationend', () => {
        displayMode(btn, 'initial')
        addClass(btn, 'scrollingUp')
    })

    btn.addEventListener('animationend', () => {
        removeClass(btn, 'scrollingUp')
    })

    audioOn.addEventListener('click', () => {
        tooltip.innerHTML = 'off'
        myMusic.play()
        displayMode(audioOff, 'initial')
        displayMode(audioOn, 'none')
    })

    audioOff.addEventListener('click', () => {
        tooltip.innerHTML = 'on'
        myMusic.pause()
        displayMode(audioOff, 'none')
        displayMode(audioOn, 'initial')
    })

    btn.addEventListener('click', function (event) {
        event.preventDefault()
        secondPage.scrollIntoView({behavior: 'smooth'})
        removeFirstPageAnimation()
        makeSecondPageAnimation()
    })

    rtn.addEventListener('click', (event) => {
        event.preventDefault()
        firstAnimation.scrollIntoView({behavior: 'smooth'})
        makeFirstPageAnimation()
        removeSecondPageAnimation()
    })

    burgerMenu.addEventListener('click', () => {
        displayMode(burgerMenu, 'none')
        displayMode(menu, 'initial')
        makeBlur()
    })

    closeMenu.addEventListener('click', () => {
        displayMode(burgerMenu, 'initial')
        displayMode(menu, 'none')
        removeBlur()
    })

    //quelque fonctions pour les animations
    if(isElementInViewport(visibleContentInAccueil)) {
        removeFirstPageAnimation()
    } else {
        makeFirstPageAnimation()
    }

    if(audioOn.style.display == 'none') {
        tooltip.innerHTML = 'off'
    } else {
        tooltip.innerHTML = 'on'
    }

    if(myMusic.paused) {
        displayMode(audioOff, 'none')
        displayMode(audioOn, 'initial')
    } else {
        displayMode(audioOff, 'initial')
        displayMode(audioOn, 'none')
    }

})