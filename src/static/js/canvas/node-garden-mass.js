import { portraitMode } from '../index.js';
import { Ball } from './balls.js';

/*export default function nodeGardenMass() {
	var nodeGardenMassCanvas = document.getElementById('node-garden-mass');

            nodeGardenMassCanvas.width = window.innerWidth;
            nodeGardenMassCanvas.height = window.innerHeight;            

            var context = nodeGardenMassCanvas.getContext('2d'),
                particles = [],
                numParticles = portraitMode.matches ? 35 : 50,
                minDist = 100,
                springAmount = 0.0001;
           
            var width = nodeGardenMassCanvas.width;
            var height = nodeGardenMassCanvas.height;
           
            for(var i=0; i<numParticles; i++){
                var color = Math.random()*(0xffffff);
                var size = portraitMode.matches ? Math.random()*5 + 2 : Math.random()*5 + 5;
                var ball = new Ball(size, color);
               
                    ball.x = Math.random()*width;
                    ball.y = Math.random()*height;
                    ball.vx = Math.random()*2 - 1;
                    ball.vy = Math.random()*2 - 1;
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

                if (ballA.x > nodeGardenMassCanvas.width) {
                    ballA.x = 0;
                } else if (ballA.x < 0) {
                    ballA.x = nodeGardenMassCanvas.width;
                }

                if (ballA.y > nodeGardenMassCanvas.height) {
                    ballA.y = 0;
                } else if (ballA.y < 0) {
                    ballA.y = nodeGardenMassCanvas.height;
                }
               
                for(var ballB, j=i+1; j<numParticles; j++){
                    ballB = particles[j];
                    gravaite(ballA, ballB);
                }
            }
           
            function draw(ball){
                ball.draw(context);
            }
           
            (function drawFrmae(){
                window.requestAnimationFrame(drawFrmae, nodeGardenMassCanvas);
                context.clearRect(0, 0, width, height);
               
                particles.forEach(move);
                particles.forEach(draw);
            }());
}*/

export default class nodeGardenMass {
	/*message = "hi! I'm training to tunr it to poo";

	showMessage() {
		alert(this.message);
	}*/

	nodeGardenMassCanvas = document.getElementById('node-garden-mass');

	context = this.nodeGardenMassCanvas.getContext('2d');
	particles = [];
    numParticles = portraitMode.matches ? 35 : 50;
    minDist = 100;
    springAmount = 0.0001;

    width = this.nodeGardenMassCanvas.width;
    height = this.nodeGardenMassCanvas.height;

	constructor() {
		this.nodeGardenMassCanvas.width = window.innerWidth;
    	this.nodeGardenMassCanvas.height = window.innerHeight;

            for(var i=0; i<this.numParticles; i++){
                var color = Math.random()*(0xffffff);
                var size = portraitMode.matches ? Math.random()*5 + 2 : Math.random()*5 + 5;
                var ball = new Ball(size, color);
               
                    ball.x = Math.random()*this.width;
                    ball.y = Math.random()*this.height;
                    ball.vx = Math.random()*2 - 1;
                    ball.vy = Math.random()*2 - 1;
                    ball.mass = size;
               
                this.particles.push(this.ball);
            }
	}

    showMessage() {
    	console.log(this.width);
    }
}