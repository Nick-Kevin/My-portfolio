import Welcome from './pages/Welcome.js';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

var windowHeight = window.innerHeight;

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

    let portraitMode = window.matchMedia("(orientation: portrait)");

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

        case '/about':
            function Ball(radius,color){
    if(radius === undefined) {radius = 40;}
    if(color === undefined){color = '#00ff00';}
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius;
    this.rotation = 0;
    this.mass = 1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.name = "";
    this.color = utils.parseColor(color);
    this.lineWidth = 1;

}

Ball.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI*2,false);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}

//得到球体的左上角坐标
Ball.prototype.getBounds = function(){
    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius*2,
        height: this.radius*2
    };
}
            var canva = document.getElementById('canvas');


        canva.width = window.innerWidth;
        canva.height = window.innerHeight;
       window.onload = function(){
           var canvas = document.getElementById('canvas'),
               context = canvas.getContext('2d'),
               particles = [],
               numParticles = 50,
               minDist = 100,
               springAmount = 0.001;
           
           var width = canvas.width;
           var height = canvas.height;
           
           for(var i=0; i<numParticles; i++){
               var color = Math.random()*(0xffffff);
               var size = Math.random()*5 + 5;
               var ball = new Ball(size, color);
               
                   ball.x = Math.random()*width;
                   ball.y = Math.random()*height;
                   ball.vx = Math.random()*6 - 3;
                   ball.vy = Math.random()*6 - 3;
                   ball.mass = size;
               
               particles.push(ball);
           }
           
           function gravaite(ballA, ballB){
               var dx = ballB.x - ballA.x;
               var dy = ballB.y - ballA.y;
               var dist = Math.sqrt(dx*dx + dy*dy);
               
               if (dist < minDist) {                   
                context.save();
                context.strokeStyle = "rgba(255,255,255,.3)";
                context.beginPath();
                context.moveTo(ballA.x, ballA.y);
                context.lineTo(ballB.x, ballB.y);
                context.closePath();
                context.stroke();
                context.restore();               
                
                var ax = dx * springAmount,
                    ay = dy * springAmount;
                ballA.vx += ax / ballA.mass;
                ballA.vy += ay / ballA.mass;
                ballB.vx -= ax / ballB.mass;
                ballB.vy -= ay / ballB.mass;
               }
           }
           function move(ballA, i){
               ballA.x += ballA.vx;
               ballA.y += ballA.vy;
               if (ballA.x > canvas.width) {
                      ballA.x = 0;
                    } else if (ballA.x < 0) {
                      ballA.x = canvas.width;
                    }
                    if (ballA.y > canvas.height) {
                      ballA.y = 0;
                    } else if (ballA.y < 0) {
                      ballA.y = canvas.height;
                    }
               
               for(var ballB, j=i+1; j<numParticles; j++){
                   ballB = particles[j];
                   gravaite(ballA, ballB);
               }
               
           }
           
           //console.log(particles);
           
           function draw(ball){
               ball.draw(context);
           }
           
           (function drawFrmae(){
               window.requestAnimationFrame(drawFrmae, canvas);
               context.clearRect(0, 0, width, height);
               
               particles.forEach(move);
               particles.forEach(draw);
           }())
           
       }
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