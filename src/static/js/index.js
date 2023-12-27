import Welcome from './pages/Welcome.js';
import Home from './pages/home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import SundaySchool from './pages/Projects/Dev/SundaySchool.js';
import MyPortfolio from './pages/Projects/Dev/MyPortfolio.js';
import Game2048 from './pages/Projects/Dev/Game2048.js';
import PorteParole from './pages/Projects/UI-UX/PorteParole.js';
import SundaySchoolDesign from './pages/Projects/UI-UX/SundaySchoolDesign.js';
import nodeGardenMass from './canvas/node-garden-mass.js';

const windowHeight = window.innerHeight;

export const portraitMode = window.matchMedia("(orientation: portrait)");

const routes = [
    {
        path: "/",
        view: Welcome,
        instance: false
    },
    {
        path: "/home",
        view: Home,
        instance: false
    },
    {
        path: "/work",
        view: Work,
        instance: false
    },
    {
        path: "/about",
        view: About,
        instance: false
    },
    {
        path: "/contact",
        view: Contact,
        instance: false   
    },
    {
        path: "/sunday-school",
        view: SundaySchool,
        instance: true
    },
    {
        path: "/my-portfolio",
        view: MyPortfolio,
        instance: true
    },
    {
        path: "/2048",
        view: Game2048,
        instance: true
    },
    {
        path: "/sunday-school-design",
        view: SundaySchoolDesign,
        instance: true
    },
    {
        path: "/porte-parole",
        view: PorteParole,
        instance: true
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
    });
};

const setupCarouselItemsSlider = () => {
    const carouselIndicator = document.querySelectorAll('.carousel-indicator [aria-current]');
    const carouselIndicatorContainer = document.querySelectorAll('.default-carousel .ox-s');;

    let observer = new MutationObserver( function (mutations ) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'aria-current') {
                if (mutation.target.getAttribute('aria-current') === "true") {
                    for (let indicatorContainerIndex = 0; indicatorContainerIndex < carouselIndicatorContainer.length; indicatorContainerIndex++) {
                        const scrollLeftValue = mutation.target.offsetLeft - carouselIndicatorContainer[indicatorContainerIndex].offsetLeft;
                        carouselIndicatorContainer[indicatorContainerIndex].scrollTo({
                            left: scrollLeftValue,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });

    let config =  { attributes: true };
    carouselIndicator.forEach( indicator => {
        observer.observe(indicator, config);
    });
}

/*const loadFlowbite = () => {
    const flowbiteScript = document.createElement('script');
    flowbiteScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js';
    flowbiteScript.async = true
    document.head.appendChild(flowbiteScript);

    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    tailwindScript.async = true
    document.head.appendChild(tailwindScript);
}*/

const router = async () => {
    const match = routes.find(route => checkPathMatch(route.path));

    let view;
    if (match.instance) {        
        view = match.view;
    } else {
        view = new match.view();
    }
    document.querySelector("#home").innerHTML = await view.getHtml();

    switch(match.path) {

        case "/":
            const welcomePageSection = getElementBySelector("section");
            welcomePageSection.style.overflow = 'hidden';

            setupWelcomePageAnimations();
        break;

        case "/home":
            document.body.style.backgroundColor = "var(--main-color)";
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

            /*const workHeader = getId('header');
            let workHeaderPaddingLeftAndRight;

            if (portraitMode.matches) {
                workHeaderPaddingLeftAndRight = 40 * 2;
            } else {
                workHeaderPaddingLeftAndRight = 64 * 2;
            }*/

            //workHeader.style.width = mainWidth - workHeaderPaddingLeftAndRight + 'px';
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

        case '/sunday-school':
            const swiper = new Swiper(".swiper", {
                direction: "horizontal",
                loop: "infinite",
              
                // Pagination
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  dynamicBullets: true,
                  renderBullet: function(index, className) {
                    return '<span class="' + className + '"> welcome here' + (index + 1) + '</span>';
                  }
                },
              
                // Navigation arrows
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
            setupCarouselItemsSlider();
        break;

        case '/my-portfolio':
            const carousel = getElementBySelector('.default-carousel');
            addClassToElement('my-shadow', carousel);
            setupCarouselItemsSlider();
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
