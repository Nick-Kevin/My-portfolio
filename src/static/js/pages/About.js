import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<canvas id="node-garden-mass"></canvas>
			<div id="about-content">
				<div id="menu">
			        <ul>
			          <li><a href="/home" class="c-white" data-link>Home</a></li>
			          <li><a href="/work" class="c-white" data-link>Work</a></li>
			          <li><a href="/about" class="nk-stheme-color" data-link>About</a></li>
			          <li><a href="/contact" class="c-white" data-link>Contact</a></li>
			        </ul>
			    </div>
				<div id="header">
		            <div>
		                <h1 class="nk-text-color">About me</h1>
		            </div>
		            <!-------------------------- Buttons on the top right side -------------------------->
		            <!-- Turn on/off button -->
		            <div id="sound-icon" class="tooltip">
		                <img id="soundOffInHome" class="other-width pointer" src="static/assets/SVG Images//sound-off-svgrepo-com.svg" alt="sounf off.svg"/>		                
		                <img id="soundOnInHome" class="other-width pointer" src="static/assets/SVG Images/sound-on-svgrepo-com.svg" alt="sound on.svg"/>
		                <p class="tooltiptext">
		                	Click to turn <span id="audio-tooltip"></span> the music
		                </p>
		            </div>
		            <!----------------------------------------------------------------------------------->
		            <div class="flex-display justify-content-end align-items-center">
		            	<div id="burger-menu">
					      <span></span>
					    </div>
		            </div>	
		        </div>
		        <p class="ml-8 mr-8">
	            	I am a dedicated computer science student currently pursuing my Master's degree
	            	at the Institut Supérieur Polytechnique de Madagascar (ISPM).
	            	My academic journey has fueled my passion for front-end development and
	            	UI/UX design, although I thrive in the dynamic realm of web development,
	            	boasting proficiency in both front-end and back-end technologies.
	            	Having completed a comprehensive internship that involved dual
	            	roles as a front-end and back-end developer,
	            	I have actively contributed to various web development projects throughout my
	            	academic tenure.My overarching goal is to ascend to the ranks of top-tier
	            	front-end developers, leveraging modern and popular technologies
	            	to create high-quality products. Beyond the world of coding,
	            	I find solace in listening to pop music and indulging in
	            	series whenever I'm away from my computer.
	            </p>	            
	        </div>

		`;
	}
} 