import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<section id="secondPage" class="accueil wave-background">
				<div id="burger-menu">
			      <span></span>
			    </div>

			    <div id="menu">
			        <ul>
			          <li><a href="/home" data-link>Home</a></li>
			          <li><a href="/work" data-link>Work</a></li>
			          <li><a href="/about" data-link>About</a></li>
			          <li><a href="/contact" data-link>Contact</a></li>
			        </ul>
			    </div>

		        <div>
		        <div>
		            <div class="tooltip">
		                <a
		                    name      = "second"
		                    href      = "/"
		                    class     = "return no-border pointer flex-display align-items-center"
		                    data-link
		                >
		                    <img src="static/assets/Images/MonLogo.gif" alt="Logo.gif">
		                </a>
		                <p class="tooltiptext">Return to the welcome page</p>
		            </div>
		            <!-------------------------- Buttons on the top right side -------------------------->
		            <!-- Turn on/off button -->
		            <div class="other-width nk-right tooltip">
		                <img id="soundOffInHome" class="other-width pointer" src="static/assets/SVG Images//sound-off-svgrepo-com.svg" alt="sounf off.svg"/>		                
		                <img id="soundOnInHome" class="other-width pointer" src="static/assets/SVG Images/sound-on-svgrepo-com.svg" alt="sound on.svg"/>
		                <p class="tooltiptext">
		                	Click to turn <span id="audio-tooltip"></span> the music
		                </p>
		            </div>
		            <!----------------------------------------------------------------------------------->
		        </div>
		        <div class="main-content block-container flex-display align-items-center">
		            <div class="first-content flex-display align-items-center">
		                <h1 class="nk-text-color nk-text-thin other-margin-bottom">Hello!
		                    <span><img class="image-size" src="static/assets/SVG Images/waving-hand-svgrepo-com.svg"></span> 
		                    <span>I am Nick Kevin</span></h1>
		                <h1 class="nk-text-color nk-text-thin my-margin">RAZAFINIRINA</h1>
		                <div class="nk-text-style other-size my-margin flex-display align-items-center">
		                    <p class="other-margin-bottom">Frontend Developer</p>
		                    <p>& UI/UX designer</p>
		                </div>
		                <p class="nk-text-color nk-text-thin other-margin-bottom">Creating interfaces and providing good</p>
		                <p class="nk-text-color nk-text-thin my-margin">user experience are my passion</p>
		            </div>
		            <div class="second-content other-margin-top">
		                <div class="flex-display">
		                    <img src="static/assets/Images/Kevin.jpg" alt="kevin.jpg">
		                </div>
		            </div>
		        </div>
		        <div class="link other-margin-top flex-display">
		            <p class="nk-text-color nk-text-style flex-display align-items-center">
		                <img class="image-size pointer" src="static/assets/SVG Images/link-chain-svgrepo-com.svg" alt="link.svg">
		                <span class="pointer">my works</span>
		            </p>
		            <p class="nk-text-color nk-text-style flex-display align-items-center">
		                <img class="image-size pointer" src="static/assets/SVG Images/link-chain-svgrepo-com.svg" alt="link.svg">
		                <span class="pointer">about</span>
		            </p>
		        </div>
		        <div class="footer nk-text-light flex-display" style="height: 350px;">
		            <div class="flex-display">
		                <a class="none-decoration" href="#">Facebook</a>
		                <a class="none-decoration" href="#">Instagram</a>
		                <a class="none-decoration" href="#">LinkdIn</a>
		            </div>
		            <p class="flex-display">© 2023 Nick Kevin</p>
		        </div>
		    </section>
		`;
	}
} 