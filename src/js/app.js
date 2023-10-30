import router from './router';

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
const contactPage = id("contact")
const preloader = $(".preloader")
const body = $("body")
const btn = id("letsVisit")
const accueil = $(".accueil"); // home page
const rtn = $(".return"); // return button in the home page
const zoom = $(".zoom")
const whiteMilk = $('.white-milk')
const visibleContentInAccueil = $('.first-content div')
const boyWithGlasses = $(".boy-glasses")
const parameter = $(".parameter")
const copyright = $(".text p")
const burgerMenuInHome = $(".accueil div div:nth-child(2) img"); // menu in the home page
const burgerMenuInContact = $("#contact div .content img"); // menu in the contact page
const menuInHome = $(".accueil div div:nth-child(4)"); // links menu in home page
const menuInContact = $("#contact div div:nth-child(3)"); // links menu in contact page
const closeMenuInHome = $(".accueil div div:nth-child(4) img"); // close links menu in home page
const closeMenuInContact = $("#contact div div:nth-child(3) .menu img"); // close links menu in contact page
console.log(closeMenuInContact)
//const notMenu = $(".accueil :not(.accueil div div:nth-child(4))")
const link = $(".link")
const mainContent = $(".main-content")
const myMusic = $("audio")
const audioOn = {
    "inHome": id("soundOffInHome"),
    "inContact": id("soundOffInContact"),
} 
const audioOff = {
    "inHome": id("soundOnInHome"),
    "inContact": id("soundOnInContact"),
}
const tooltip = {
    "inHome": $(".accueil .tooltiptext span"),
    "inContact": $("#contact .tooltiptext span")
}
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
const sections = [
    firstAnimation,
    secondPage,
    contactPage
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
    addClass(audioOff["inHome"], 'playOpacity')
    addClass(audioOn["inHome"], 'playOpacity')
}

removeSecondPageAnimation = () => {
    removeClass(mainContent, 'scrollingDown')
    removeClass(link, 'scrollingRight')
    removeClass(audioOn["inHome"], 'playOpacity')
    removeClass(audioOff["inHome"], 'playOpacity')
}

makeBlur = () => {
    addClass(menuInHome, 'notblur')
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
    removeClass(menuInHome, 'notblur')
}

isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
}

showTheRightPage = () => {
    sections.forEach((section) => {
        isElementInViewport(section) ? displayMode(section, 'initial') : displayMode(section, 'none')
    })
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
    Object.keys(audioOff).forEach((key) => {
        displayMode(audioOff[key], 'none')
    }); // hidde all audioOff button
    displayMode(menuInHome, 'none')
    displayMode(menuInContact, 'none')

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

    // initialize the tooltip text
    Object.keys(audioOn).forEach((key) => {
        audioOn[key].style.display == 'none' ? 
            Object.keys(tooltip).forEach((tooltipKey) => {
                tooltip[tooltipKey].innerHTML = 'off'
            }) : 
            Object.keys(tooltip).forEach((tooltipKey) => {
                tooltip[tooltipKey].innerHTML = 'on'
            })
    })

    // play music if one of audioOn button is clicked and hidde all of audioOn button
    Object.keys(audioOn).forEach((keyOn1) => {
        audioOn[keyOn1].addEventListener('click', () => {
            Object.keys(tooltip).forEach((tooltipKey) => {
                tooltip[tooltipKey].innerHTML = 'off'
            }) 
            myMusic.play()
            Object.keys(audioOff).forEach((keyOff) => {
                displayMode(audioOff[keyOff], 'initial')
            })
            Object.keys(audioOn).forEach((keyOn2) => {
                displayMode(audioOn[keyOn2], 'none')
            })
        })
    })

    // pause music if one of audioOff button is clicked and hidde all of audioOff button
    Object.keys(audioOff).forEach((keyOff1) => {
        audioOff[keyOff1].addEventListener('click', () => {
            Object.keys(tooltip).forEach((tooltipKey) => {
                tooltip[tooltipKey].innerHTML = 'on'
            })
            myMusic.pause()
            Object.keys(audioOff).forEach((keyOff2) => {
                displayMode(audioOff[keyOff2], 'none')
            })
            Object.keys(audioOn).forEach((keyOn) => {
                displayMode(audioOn[keyOn], 'initial')
            })
        })
    })

    btn.addEventListener('click', function (event) {
        event.preventDefault()
        displayMode(secondPage, 'initial')
        secondPage.scrollIntoView({behavior: 'smooth'})
        removeFirstPageAnimation()
        makeSecondPageAnimation()
        /*setTimeout(() => {
            showTheRightPage()
        }, 10000)*/
    })

    rtn.addEventListener('click', (event) => {
        event.preventDefault()
        firstAnimation.scrollIntoView({behavior: 'smooth'})
        makeFirstPageAnimation()
        removeSecondPageAnimation()
    })

    burgerMenuInHome.addEventListener('click', () => {
        displayMode(burgerMenuInHome, 'none')
        displayMode(menuInHome, 'initial')
        makeBlur()
    })

    closeMenuInHome.addEventListener('click', () => {
        displayMode(burgerMenuInHome, 'initial')
        displayMode(menuInHome, 'none')
        removeBlur()
    })

    burgerMenuInContact.addEventListener('click', () => {
        displayMode(burgerMenuInContact, 'none')
        displayMode(menuInContact, 'initial')
    })

    closeMenuInContact.addEventListener('click', () => {
        displayMode(burgerMenuInContact, 'initial')
        displayMode(menuInContact, 'none')
    })

    //quelque fonctions pour les animations
    if(isElementInViewport(visibleContentInAccueil)) {
        removeFirstPageAnimation()
    } else {
        makeFirstPageAnimation()
    }
})