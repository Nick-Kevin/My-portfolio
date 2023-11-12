import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<section id="contact" class="accueil">
				<div id="menu">
			        <ul>
			          <li><a href="/home" class="c-white" data-link>Home</a></li>
			          <li><a href="/work" class="c-white" data-link>Work</a></li>
			          <li><a href="/about" class="c-white" data-link>About</a></li>
			          <li><a href="/contact" class="nk-stheme-color" data-link>Contact</a></li>
			        </ul>
			    </div>
		        <div class="bg-black c-white py-8 p-relative">
		        	<!-- Turn on/off button -->
		            <div id="sound-icon" class="tooltip nk-right" style="margin-right: 139px">
		                <img id="soundOffInHome" class="other-width pointer" src="static/assets/SVG Images//sound-off-svgrepo-com.svg" alt="sounf off.svg"/>		                
		                <img id="soundOnInHome" class="other-width pointer" src="static/assets/SVG Images/sound-on-svgrepo-com.svg" alt="sound on.svg"/>
		                <p class="tooltiptext">
		                	Click to turn <span id="audio-tooltip"></span> the music
		                </p>
		            </div>
		            <div	
		            	class = "flex-display justify-content-end align-items-center mt-8 mr-8 p-absolute"
		            	style = "top: 0; right: 0"
		            >
		            	<div id="burger-menu">
					      <span></span>
					    </div>
		            </div>
		            <h1 class="flex-display justify-content-center mb-2 w-100">Contact Nick Kevin</h1>
		            <!--p class="flex-display justify-content-center">Get in touch with me to get the ball rolling</p-->
		        </div>
		        <footer class="mt-5 flex-display justify-content-center mb-4 pb-2" style="bottom: calc(3.25vh + 25px);">
		            <h2 class="nk-text-color white-bt-1 pt-3 pl-4 pr-4">FIND ME</h2>
		        </footer>
		    </section>
		`;
	}
} 