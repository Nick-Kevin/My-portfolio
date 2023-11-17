import { portraitMode } from '../index.js';
import { Ball } from './balls.js';

export default class nodeGardenMass {
	nodeGardenMassCanvas = document.getElementById('node-garden-mass');

	context = this.nodeGardenMassCanvas.getContext('2d');
	particles = [];
    particlesLength = portraitMode.matches ? 35 : 50;
    minDist = 100;
    springAmount = 0.0001;

    width = this.nodeGardenMassCanvas.width;
    height = this.nodeGardenMassCanvas.height;

	constructor() {
		this.nodeGardenMassCanvas.width = window.innerWidth;
    	this.nodeGardenMassCanvas.height = window.innerHeight;

        for(var i=0; i<this.particlesLength; i++){
            var color = Math.random()*(0xffffff);
            var size = portraitMode.matches ? Math.random()*5 + 2 : Math.random()*5 + 5;
            var ball = new Ball(size, color);
           
                ball.x = Math.random()*this.width;
                ball.y = Math.random()*this.height;
                ball.vx = Math.random()*2 - 1;
                ball.vy = Math.random()*2 - 1;
                ball.mass = size;
           
            this.particles.push(ball);
        }
	}

	gravaite(ballA, ballB) {
        var dx = ballB.x - ballA.x;
        var dy = ballB.y - ballA.y;
        var dist = Math.sqrt(dx*dx + dy*dy);
       
        if (dist < this.minDist) {                   
            this.context.save();
            this.context.strokeStyle = "rgba(255,255,255,.3)";
            this.context.beginPath();
            this.context.moveTo(ballA.x, ballA.y);
            this.context.lineTo(ballB.x, ballB.y);
            this.context.closePath();
            this.context.stroke();
            this.context.restore();               
        
            var ax = dx * this.springAmount,
                ay = dy * this.springAmount;
            ballA.vx += ax / ballA.mass;
            ballA.vy += ay / ballA.mass;
            ballB.vx -= ax / ballB.mass;
            ballB.vy -= ay / ballB.mass;
        }
   	}

    move(ballA, i) {
        ballA.x += ballA.vx;
        ballA.y += ballA.vy;

        if (ballA.x > this.nodeGardenMassCanvas.width) {
            ballA.x = 0;
        } else if (ballA.x < 0) {
            ballA.x = this.nodeGardenMassCanvas.width;
        }

        if (ballA.y > this.nodeGardenMassCanvas.height) {
            ballA.y = 0;
        } else if (ballA.y < 0) {
            ballA.y = this.nodeGardenMassCanvas.height;
        }
       
        for(var ballB, j=i+1; j<this.particlesLength; j++){
            ballB = this.particles[j];
            this.gravaite(ballA, ballB);
        }
    }

    draw(ball) {
        ball.draw(this.context);
    }

    drawFrame() {
        window.requestAnimationFrame(this.drawFrame.bind(this), this.nodeGardenMassCanvas);
        this.context.clearRect(0, 0, this.width, this.height);
       
        this.particles.forEach(this.move.bind(this));
        this.particles.forEach(this.draw.bind(this));
    }
}