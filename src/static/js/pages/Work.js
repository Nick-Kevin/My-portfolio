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
				<section class="flex-display flex-column align-items-center justify-content-center p-relative">
					<div id="header" class="p-absolute" style="top: 0">
			            <div>
			                <h1 class="nk-text-color">My work</h1>
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
					<h1>Web development</h1>
					<h1 class="nk-stheme-color mb-8 p-absolute" style="bottom: 0; font-size: 4rem">&#8595;</h1>
				</section>

				<section>
					<div class="grid-display justify-items-center ml-8 mr-8 my-mt-8 mb-8">
						<div class="work-card br-2">
							<img src="static/assets/Work images/Ecole du dimanche/Page d'accueil.png" alt="beach hotel welcome page">
							<div class="grid-display justify-content-center align-items-center px-4 py-4">
								<h1 class="center-text mb-4">Sunday school</h1>
								<div class="flex-display justify-content-center w-100">
									<a href="/sunday-school" class="bg-theme br-1 nk-text-color view-more" data-link>View more</a>
								</div>
							</div>
						</div>

						<div class="work-card br-2">
							<img src="static/assets/Work images/Beach hotel/bh_1.png" alt="beach hotel welcome page">
							<div class="grid-display justify-content-center align-items-center px-4 py-4">
								<h1 class="center-text mb-4">Beach hotel</h1>
								<div class="flex-display justify-content-center w-100">
									<a href="#" class="bg-second-theme nk-black-color br-1 github" data-link>Github</a>
									<a href="#" class="bg-theme br-1 nk-text-color view-more" data-link>View more</a>
								</div>
							</div>
						</div>

						<div class="work-card br-2 grid-display">
							<img src="static/assets/Work images/2048/2048.png" alt="beach hotel welcome page">
							<div class="grid-display justify-content-center align-items-center px-4 py-4">
								<h1 class="center-text mb-3">2048 game</h1>
								<div class="flex-display justify-content-center w-100">
									<a href="#" class="bg-second-theme nk-black-color br-1 github" data-link>Github</a>
									<a href="#"" class="bg-theme br-1 nk-text-color view-more" data-link>View more</a href="#">
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="flex-display flex-column align-items-center justify-content-center p-relative">
					<h1>UI/UX design</h1>
					<h1 class="nk-stheme-color mb-8 p-absolute" style="bottom: 0; font-size: 4rem">&#8595;</h1>
				</section>

				<section class="flex-display align-content-center">
					<div class="grid-display justify-items-center align-items-center ml-8 mr-8 my-mt-8 mb-8">
						<div class="work-card br-2 grid-display">
							<img src="static/assets/Work images/Ecole du dimanche/Page d'accueil.png" alt="beach hotel welcome page">
							<div class="grid-display justify-content-center align-items-center px-3 py-3">
								<h1 class="center-text">Sunday school</h1>
								<div class="flex-display justify-content-center w-100">
									<a href="#" class="bg-theme br-1 nk-text-color br-1 my-mt-3 view-more" data-link>View more</a>
								</div>
							</div>
						</div>

						<div class="work-card br-2 grid-display">
							<img src="static/assets/Work images/Porte parole/accueil.png" alt="beach hotel welcome page">
							<div class="grid-display justify-content-center align-items-center px-3 py-3">
								<h1 class="center-text">Porte parole (ODD)</h1>
								<div class="flex-display justify-content-center w-100">
									<a href="#" class="bg-theme br-1 nk-text-color br-1 my-mt-3 view-more" data-link>View more</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div id="menu">
			        <ul>
			          <li><a href="/home" class="c-white" data-link>Home</a></li>
			          <li><a href="/work" class="nk-stheme-color" data-link>Work</a></li>
			          <li><a href="/about" class="c-white" data-link>About</a></li>
			          <li><a href="/contact" class="c-white" data-link>Contact</a></li>
			        </ul>
			    </div>
			</main>
		`;
	}
} 