import Welcome from './pages/Welcome.js';
import Home    from './pages/Home.js'   ;
import Work    from './pages/Work.js'   ;
import About   from './pages/About.js'  ;
import Contact from './pages/Contact.js';

const routes = [
    {
        path: "/"       ,
        view: Welcome
    },
    {
        path: "/home"   ,
        view: Home
    },
    {
        path: "/work"   ,
        view: Work
    },
    {
        path: "/about"  ,
        view: About  
    },
    {
        path: "/contact",
        view: Contact   
    }
];

const getId                        = (element)                   => {
    return document.getElementById(element);
}

const setStyleDisplayToElement     = (displayValue, element)     => {
    return (element.style.display = displayValue);
}

const getElementBySelector         = (element)                   => {
    return document.querySelector(element);
}

const addClassToElement            = (classValue, element)       => {
    return element.classList.add(classValue);
}

const addClassToEachElementInArray = (classValue, arrayVariable) => {
    arrayVariable.forEach(element => addClassToElement(classValue, element));
}

const navigateTo                   = url                         => {
    history.pushState(null, null, url);
    router();
}

const checkPathMatch               = (path)                      => {
    return location.pathname === path;
}

const setupWelcomePageAnimations   = ()                          => {
    const boyWithGlassesImage = getElementBySelector(".boy-glasses");
    addClassToElement('scrollingRight', boyWithGlassesImage)        ;

    const parameterImage      = getElementBySelector(".parameter")  ;
    addClassToElement('scrollingLeft', parameterImage)              ;

    const copyright           = getElementBySelector(".text p")     ;
    addClassToElement('makeOpacity', copyright)                     ;

    const nickKevin           = getElementBySelector('.white-milk') ;
    addClassToElement('changeColor', nickKevin)                     ;

    const nickKevinCaracter = [
        getElementBySelector(".n1"), getElementBySelector(".i1"), getElementBySelector(".c") ,
        getElementBySelector(".k1"), getElementBySelector(".k2"), getElementBySelector(".e") ,
        getElementBySelector(".v") , getElementBySelector(".i2"), getElementBySelector(".n2")
    ]                                                               ;
    addClassToEachElementInArray('zoom', nickKevinCaracter)         ;

    const LetIsVisitButton    = getId("letsVisit")                  ;
    setStyleDisplayToElement('none', LetIsVisitButton);
    nickKevinCaracter[0].addEventListener('animationend', () => {
        setStyleDisplayToElement('initial', LetIsVisitButton);
        addClassToElement('scrollingUp', LetIsVisitButton)   ;
    })
}

const router                       = async ()                    => {
    const match = routes.find(route => checkPathMatch(route.path));

    const view  = new match.view();

    document.querySelector("#home").innerHTML = await view.getHtml();

    if(match.path === "/") {
        setupWelcomePageAnimations();
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