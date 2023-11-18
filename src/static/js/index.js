import Welcome from './pages/Welcome.js';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { Ball } from './canvas/balls.js';
import nodeGardenMass from './canvas/node-garden-mass.js'

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

const revealElementBySlideUp = () => {
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {
        if(isElementOnAreaToReveal(reveal, 100)) {
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

    window.addEventListener('scroll', revealElementBySlideUp);
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
            setOverflowValueToBodyElement("hidden");
            setupWelcomePageAnimations();
            break;

        case "/home":
            setupMusicPlayerFeature();
            setOverflowValueToBodyElement("auto");
            setupBurgerMenuFeature();

            const header = getId("header");
            addClassToElement('makeOpacity', header);

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

        case "/contact":
            const boxLabel = getElementBySelector(".logo");
            if(isTouchEnabled()) {
                boxLabel.innerHTML = "Click me";
            } else {
                boxLabel.innerHTML = "Hover me";
            }

            const box = getElementBySelector(".contact-card");
            const boxes = document.querySelectorAll(".box");
            document.body.addEventListener('click', event => {
                const isBoxClicked = box.contains(event.target);

                if(isBoxClicked) {
                    addClassToElement('change-position', boxLabel);
                    addClassToElement('click-card', box);
                    boxes.forEach(boxe => addClassToElement('click-box', boxe));    
                } else {
                    removeClassToElement('change-position', boxLabel);
                    removeClassToElement('click-card', box);
                    boxes.forEach(boxe => removeClassToElement('click-box', boxe));
                }
            })

            setupMusicPlayerFeature();
            setupBurgerMenuFeature();
            break;

        case "/about":
            setupBurgerMenuFeature();
            setupMusicPlayerFeature();

            const aboutMeParagraph = getElementBySelector("#about-content > div:nth-child(3) p");
            gsap.to(aboutMeParagraph, {
                duration: 14,
                ease: "none",
                text: {
                    value: "I am a dedicated computer science student currently pursuing my Master's degree at the Institut Supérieur Polytechnique de Madagascar (ISPM). My academic journey has fueled my passion for front-end development and UI/UX design, although I thrive in the dynamic realm of web development, boasting proficiency in both front-end and back-end technologies. Having completed a comprehensive internship that involved dual roles as a front-end and back-end developer, I have actively contributed to various web development projects throughout my academic tenure.My overarching goal is to ascend to the ranks of top-tier front-end developers, leveraging modern and popular technologies to create high-quality products. Beyond the world of coding, I find solace in listening to pop music and indulging in series whenever I'm away from my computer.",                    
                },
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