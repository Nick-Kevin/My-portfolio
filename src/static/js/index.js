import Welcome from './pages/Welcome.js';
import Home from './pages/Home.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { Ball } from './balls.js'
import { notRequestAnimationFrame, notCancelAnimationFrame} from './utils.js'

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

        case "/about":
            notRequestAnimationFrame()
            notCancelAnimationFrame()
//mx = mouse.x | my = mouse.y | ox = object.x | oy = object.y
function RotationToMouse(mx,my,ox,oy){
    var dx = mx - ox;
    var dy = my - oy;
    var angle = Math.atan2(dy,dx);
    return angle;
}


window.utils = {};
//捕获坐标
window.utils.captureMouse = function(element){
        var mouse = {x:0,y:0};
        
        element.addEventListener('mousemove',function(event){
            var x,y;
            if(event.pageX||event.pageY){
                x = event.pageX;
                y = event.pageY;
            }else{
                x = event.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
                y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop;
            }
            
            x -= element.offsetLeft;
            y -= element.offsetTop;
            
            mouse.x = x;
            mouse.y = y;          
        },false);
        
         return mouse;  
    }
    
    //获取触摸事件坐标
window.utils.captureTouch = function (element) {
  var touch = {x: null, y: null, isPressed: false, event: null},
      body_scrollLeft = document.body.scrollLeft,
      element_scrollLeft = document.documentElement.scrollLeft,
      body_scrollTop = document.body.scrollTop,
      element_scrollTop = document.documentElement.scrollTop,
      offsetLeft = element.offsetLeft,
      offsetTop = element.offsetTop;

  element.addEventListener('touchstart', function (event) {
    touch.isPressed = true;
    touch.event = event;
  }, false);

  element.addEventListener('touchend', function (event) {
    touch.isPressed = false;
    touch.x = null;
    touch.y = null;
    touch.event = event;
  }, false);
  
  element.addEventListener('touchmove', function (event) {
    var x, y,
        touch_event = event.touches[0]; //first touch
    
    if (touch_event.pageX || touch_event.pageY) {
      x = touch_event.pageX;
      y = touch_event.pageY;
    } else {
      x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
      y = touch_event.clientY + body_scrollTop + element_scrollTop;
    }
    x -= offsetLeft;
    y -= offsetTop;
    
    touch.x = x;
    touch.y = y;
    touch.event = event;
  }, false);
  
  return touch;
};
    

window.utils.parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0); //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
    }
    return color;
  }
};

//颜色解析函数
/*window.utils.parseColor = function(color,toNumber){
    if(toNumber === true){
        if(typeof color === 'number'){
            return (color | 0); // num | 0 -> num
        }
        if(typeof color === 'string' && color[0] === '#'){
            color = color.slice(1); //如果传入的是#fff000,那么得到的是fff000，将#剪切掉
        }
        return window.parseInt(color,16); //如果color='fff000',得到 16773120
    }else{
        if(typeof color === 'number'){
            //比如：color = 100; 
            //(color | 0).toString(16) -> 64
            //'00000' + (color | 0).toString(16) ->'0000064';
            //'#'+('00000' + (color | 0).toString(16)).substr(-6); ->'#000064';
            
            color = '#' +('00000' + (color | 0).toString(16)).substr(-6);
        }
        return color;
    }
};*/

//将16进制颜色转换成rgb
window.utils.colorToRGB = function(color,alpha){
    //如果是字符串格式，转换为数字
    if(typeof color === "string" && color[0] === "#"){
        
        //parseInt(('#ffffff').slice(1),16) 为 16777215
        color = window.parseInt(color.slice(1), 16);

    }
    alpha = (alpha === undefined)? 1 : alpha;
    
    //将color转换成r,g,b值，>>右移  <<左移
    var r = color >> 16 & 0xff; //例如：16777215 >> 16 变成 255， 255 & 0xff为255
    var g = color >>8 & 0xff;
    var b = color & 0xff;
    a = (alpha<0)? 0 : ((alpha>1)? 1 : alpha);
    
    if(a===1){
        return "rgb("+r+","+g+","+b+")";
    }else{
        return "rgb("+r+","+g+","+b+","+a+")";
    }
};

window.utils.containsPoint = function(rect, x, y){
    return !(x<rect.x || x>rect.x + rect.width ||
             y<rect.y || y>rect.y + rect.height);
}

window.utils.intersects = function(rectA, rectB){
    return !(rectA.x + rectA.width < rectB.x ||
             rectB.x + rectB.width < rectA.x ||
             rectA.y + rectA.height < rectB.y ||
             rectB.y + rectB.height < rectA.y);
}
            var canva = document.getElementById('canvas');


        canva.width = window.innerWidth;
        canva.height = window.innerHeight;
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
           }());
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