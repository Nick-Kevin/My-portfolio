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
		        <div class="bg-black c-white py-6 p-relative">
		        	<!-- Turn on/off button -->
		            <div id="sound-icon" class="tooltip nk-right mt-2" style="margin-right: 139px">
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
		            <h1 class="flex-display justify-content-center mb-2">Contact Nick Kevin</h1>
		            <p class="flex-display justify-content-center">Get in touch with me to get the ball rolling</p>
		        </div>
		        <div class="flex-display justify-content-center flex-wrap mt-4">
		            <div class="ml-4 mr-4 mb-4 flex-display flex-column align-items-center">
		                <div class="contact-image bg-black br-50 flex-display justify-content-center">
		                    <img src="./assets/SVG Images/contact/email-1572-svgrepo-com (1).svg" alt="email" />
		                </div>
		                <h3 class="flex-display justify-content-center nk-stheme-color mt-3 mb-3">EMAIL</h3>
		                <a href="#" class="flex-display justify-content-center nk-text-color">nicblou23@gmail.com</a>
		            </div>
		            <div class="ml-4 mr-4 mb-4 flex-display flex-column align-items-center">
		                <div class="contact-image bg-black br-50 flex-display justify-content-center">
		                    <img src="./assets/SVG Images/contact/smartphone-svgrepo-com (1).svg" alt="smartphone" />
		                </div>
		                <h3 class="flex-display justify-content-center nk-stheme-color mt-3 mb-3">PHONE</h3>
		                <p class="flex-display justify-content-center nk-text-color">+261 32 89 236 11</p>
		            </div>
		            <div class="ml-4 mr-4 mb-4 flex-display flex-column align-items-center">
		                <div class="contact-image bg-black br-50 flex-display justify-content-center">
		                    <img src="./assets/SVG Images/contact/facebook-svgrepo-com.svg" alt="facebook" />
		                </div>
		                <h3 class="flex-display justify-content-center nk-stheme-color mt-3 mb-3">FACEBOOK</h3>
		                <a href="https://www.facebook.com/profile.php?id=100010962524435" class="flex-display justify-content-center nk-text-color">Nick Kevin</a>
		            </div>
		            <div class="ml-4 mr-4 mb-4 flex-display flex-column align-items-center">
		                <div class="contact-image bg-black br-50 flex-display justify-content-center">
		                    <img src="./assets/SVG Images/contact/instagram-svgrepo-com.svg" alt="instagram" />
		                </div>
		                <h3 class="flex-display justify-content-center nk-stheme-color mt-3 mb-3">INSTAGRAM</h3>
		                <a href="https://instagram.com/nick_kevin_rzf?igshid=ZGUzMzM3NWJiOQ==" class="flex-display justify-content-center nk-text-color">nick_kevin_rzf</a>
		            </div>
		            <div class="ml-4 mr-4 flex-display flex-column align-items-center">
		                <div class="contact-image bg-black br-50 flex-display justify-content-center">
		                    <img src="./assets/SVG Images/contact/linkedin-161-svgrepo-com.svg" alt="linkedin" />
		                </div>
		                <h3 class="flex-display justify-content-center nk-stheme-color mt-3 mb-3">LINKEDIN</h3>
		                <a href="https://www.linkedin.com/in/nick-kevin-razafinirina-988b34248" class="flex-display justify-content-center nk-text-color">Nick Kevin Razafinrina</a>
		            </div>
		        </div>µ
		        <footer class="mt-5 flex-display justify-content-center mb-4 pb-2" style="bottom: calc(3.25vh + 25px);">
		            <h2 class="nk-text-color white-bt-1 pt-3 pl-4 pr-4">FIND ME</h2>
		        </footer>
		    </section>
		`;
	}
} 