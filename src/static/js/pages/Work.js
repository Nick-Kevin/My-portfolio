import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<main id="my-work">
				<section class="flex-display align-items-center p-relative">
					<div id="header" class="p-absolute">
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
					<h1>Front end and web development &#8595;</h1>
				</section>

				<section>
					here are my accomplishment
				</section>

				<section class="flex-display align-items-center">
					<h1>UI/UX design &#8595;</h1>
				</section>

				<section>
					here are my accomplishment
				</section>
			</main>
		`;
	}
} 