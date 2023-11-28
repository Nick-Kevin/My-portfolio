import Welcome from './pages/Welcome.js';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { Ball } from './canvas/balls.js';
import nodeGardenMass from './canvas/node-garden-mass.js';

var windowHeight = window.innerHeight;

export const portraitMode = window.matchMedia("(orientation: portrait)");

const routes = [
    {
        path: "/",
        view: Welcome
    },
    {
        path: "/home",
        view: Home
    },
    {
        path: "/work",
        view: Work
    },
    {
        path: "/about",
        view: About  
    },
    {
        path: "/contact",
        view: Contact   
    }
];

const getId = (element) => {
    return document.getElementById(element);
}

const setStyleDisplayToElement = (displayValue, element) => {
    return (element.style.display = displayValue);
}

const getElementBySelector = (element) => {
    return document.querySelector(element);
}

const addClassToElement = (classValue, element) => {
    return element.classList.add(classValue);
}

const removeClassToElement = (classValue, element) => {
    return element.classList.remove(classValue);
}

const setOverflowValueToBodyElement = (value) => {
    document.body.style = `overflow: ${value}`;
}

const addClassToEachElementInArray = (classValue, arrayVariable) => {
    arrayVariable.forEach(element => addClassToElement(classValue, element));
}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const checkPathMatch = (path) => {
    return location.pathname === path;
}

const distanceFromViewportTop = (element) => {
    return element.getBoundingClientRect().top;
}

const isElementOnAreaToReveal = (element, heightToRevealTheElement) => {
    return distanceFromViewportTop(element) < windowHeight - heightToRevealTheElement;
}

const revealElementOnArea = (heihtToRemoveFromTheWindowHeightToRevealElements) => {
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {
        if(isElementOnAreaToReveal(reveal, heihtToRemoveFromTheWindowHeightToRevealElements)) {            
            addClassToElement("active", reveal);
        } else {
            removeClassToElement("active", reveal);
        }
    })
}

const setupWelcomePageAnimations = () => {
    const boyWithGlassesImage = getElementBySelector(".boy-glasses");
    addClassToElement('scrollingRight', boyWithGlassesImage);

    const parameterImage = getElementBySelector(".parameter");
    addClassToElement('scrollingLeft', parameterImage);

    const copyright = getElementBySelector(".text p");
    addClassToElement('makeOpacity', copyright);

    const nickKevin = getElementBySelector('.white-milk') ;
    addClassToElement('changeColor', nickKevin);

    const nickKevinCaracter = [
        getElementBySelector(".n1"), getElementBySelector(".i1"), getElementBySelector(".c"),
        getElementBySelector(".k1"), getElementBySelector(".k2"), getElementBySelector(".e"),
        getElementBySelector(".v"), getElementBySelector(".i2"), getElementBySelector(".n2")
    ];
    addClassToEachElementInArray('zoom', nickKevinCaracter);

    const LetIsVisitButton = getId("letsVisit");
    setStyleDisplayToElement('none', LetIsVisitButton);
    nickKevinCaracter[0].addEventListener('animationend', () => {
        setStyleDisplayToElement('initial', LetIsVisitButton);
        addClassToElement('scrollingUp', LetIsVisitButton)   ;
    })
}

const setupHomePageAnimationsForPortraitMode = () => {
    const firstContent = getElementBySelector(".first-content p");
    addClassToElement('scrollingUp', firstContent);

    window.addEventListener('scroll', revealElementOnArea(100));
}

const setupHomePageAnimationsForLandscapeMode = () => {
    const mainContent = getElementBySelector(".main-content");
    addClassToElement('scrollingDown', mainContent);

    const links = getElementBySelector(".link");
    links.style.visibility = "hidden";
    setTimeout(() => {
        links.style.visibility = "visible";
        addClassToElement('scrollingLeft', links);
    }, 500);  
}

const setupBurgerMenuFeature = () => {
    var burgerMenu = getId('burger-menu');
    var overlay = getId('menu');

    burgerMenu.addEventListener('click', function() {
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
    });
}

const clickTheIconToHiddeItAndShowTheOther = (iconToHidde, iconToShow) => {
    iconToHidde.addEventListener('click', () => {
        setStyleDisplayToElement('none', iconToHidde);
        setStyleDisplayToElement('initial', iconToShow);
    })
}

const clickIconToCompleteTheTooltip = (icon, tooltip, tooltipValue) => {
    icon.addEventListener('click', () => {
        tooltip.innerHTML = tooltipValue;
    });
}

const isAudioPaused = (audio) => {
    return audio.paused;
}

const getElementArea = (verticalArea, horizentalArea) => {
    return verticalArea && horizentalArea;
}

const isTouchEnabled = () => {
    return ('ontouchstart' in window) ||
        ( navigator.maxTouchPoint > 0 ) ||
        ( navigator.msMaxTouchPoints > 0);
}

const setupMusicPlayerFeature = () => {
    const soundOffIcon = getId("soundOffInHome");
    const soundOnIcon = getId("soundOnInHome");
    const tooltip = getId("audio-tooltip");
    const myMusic = getId("my-music");
    
    if(isAudioPaused(myMusic)) {
        tooltip.innerHTML = "on";
        setStyleDisplayToElement('none', soundOnIcon);
    } else {
        tooltip.innerHTML = "off";
        setStyleDisplayToElement('none', soundOffIcon);
    }

    clickTheIconToHiddeItAndShowTheOther(soundOffIcon, soundOnIcon);
    clickTheIconToHiddeItAndShowTheOther(soundOnIcon, soundOffIcon);
    clickIconToCompleteTheTooltip(soundOffIcon, tooltip, "off");
    clickIconToCompleteTheTooltip(soundOnIcon, tooltip, "on");
    soundOffIcon.addEventListener('click', () => {
        myMusic.play();
    });
    soundOnIcon.addEventListener('click', () => {
        myMusic.pause();
    })
}

const router = async () => {
    const match = routes.find(route => checkPathMatch(route.path));

    const view = new match.view();
    document.querySelector("#home").innerHTML = await view.getHtml();

    switch(match.path) {

        case "/":
            const welcomePageSection = getElementBySelector("section");
            welcomePageSection.style.overflow = 'hidden';

            setupWelcomePageAnimations();
            break;

        case "/home":
            setupMusicPlayerFeature();
            setOverflowValueToBodyElement("auto");
            setupBurgerMenuFeature();

            const homeHeader = getId("header");
            addClassToElement('makeOpacity', homeHeader);

            if(portraitMode.matches) {
                const frontEndAndUiUxDesigner = getElementBySelector(".main-content div:nth-child(2)");
                const workLink = getElementBySelector(".link a:first-child");
                const aboutLink = getElementBySelector(".link a:nth-child(3)");
                const myPhoto = getElementBySelector(".link div");

                const reveals = [
                    frontEndAndUiUxDesigner,
                    workLink,
                    aboutLink,
                    myPhoto
                ]

                reveals.map(reveal => addClassToElement('reveal', reveal));

                setupHomePageAnimationsForPortraitMode();                
            } else {
                setupHomePageAnimationsForLandscapeMode();
            }

            break; 

        case "/work":
            setupMusicPlayerFeature();
            setupBurgerMenuFeature();

            const main = getElementBySelector('main');
            const mainWidth = main.getBoundingClientRect().width;

            const workHeader = getId('header');
            let workHeaderPaddingLeftAndRight;

            if (portraitMode.matches) {
                workHeaderPaddingLeftAndRight = 40 * 2;
            } else {
                workHeaderPaddingLeftAndRight = 64 * 2;
            }

            workHeader.style.width = mainWidth - workHeaderPaddingLeftAndRight + 'px';

            break;

        case "/contact":
            const contactNickKevin = getElementBySelector("#header div:first-child h1");
            gsap.to(contactNickKevin, {
                text: {
                    value: "Contact Nick Kevin",
                    speed: 1,
                },
            });
            const cardContent = getElementBySelector(".bg");
            const cardContentHeight = cardContent.getBoundingClientRect().height;
            const cardContentWidth = cardContent.getBoundingClientRect().width;
            const cardContainer = getElementBySelector(".contact-card .contact-card");
            if(portraitMode.matches) {
                cardContainer.style.height = cardContentHeight + 10 + "px";
                cardContainer.style.width = cardContentWidth + 10 + "px";
            } else {
                cardContainer.style.height = cardContentHeight + 20 + "px";
                cardContainer.style.width = cardContentWidth + 20 + "px";
            }

            setupMusicPlayerFeature();
            setupBurgerMenuFeature();
            break;

        case "/about":
            const aboutHeader = getId('header');
            addClassToElement('makeOpacity-2', aboutHeader);

            const aboutMeParagraph = getElementBySelector("#about-content div:nth-child(3) p");
            addClassToElement('opacity-0', aboutMeParagraph);
            aboutHeader.addEventListener('animationend', () => {
                addClassToElement('littleScrollingUp', aboutMeParagraph);
                removeClassToElement('opacity-0', aboutMeParagraph);
            });

            setupBurgerMenuFeature();
            setupMusicPlayerFeature();

            const aboutAreaHeigt = windowHeight;
            window.addEventListener('scroll', () => {
                revealElementOnArea(50);
            });

            var nodeGardenMassCanvas = document.getElementById('node-garden-mass');

            nodeGardenMassCanvas.width = window.innerWidth;
            nodeGardenMassCanvas.height = window.innerHeight;
            
            const nodeGardenMassInstance = new nodeGardenMass;
            nodeGardenMassInstance.drawFrame();

            document.addEventListener("resize", () => {
                const nodeGardenMassInstance = new nodeGardenMass;
                nodeGardenMassInstance.drawFrame();
            });

            window.addEventListener("resize", () => {
                const nodeGardenMassInstance = new nodeGardenMass;
                nodeGardenMassInstance.drawFrame();
            });            
       break;
    }
}

document.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
            if(e.target.matches('[data-link]')) {
                e.preventDefault();
                navigateTo(e.target.href);
            } else if(e.target.closest('[data-link]')) {
                // if the element itself doesn't have data-link, check if parent has it
                e.preventDefault();
                navigateTo(e.target.closest('[data-link]').getAttribute('href'));
            }
    });

    router();
})