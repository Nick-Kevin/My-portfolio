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
			          <li><a href="/home" class="nk-stheme-color" data-link>Home</a></li>
			          <li><a href="/work" class="c-white" data-link>Work</a></li>
			          <li><a href="/about" class="c-white" data-link>About</a></li>
			          <li><a href="/contact" class="c-white" data-link>Contact</a></li>
			        </ul>
			    </div>
		        <!-------------------------- Buttons on the top right side -------------------------->
		        <div id="header">
		            <div id="return-button" class="tooltip">
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
		        <!----------------------------------------------------------------------------------->
		        <!------------------------- Introduction Nick Kevin Contact ------------------------->
		        <div class="p-relative bg-white pt-4 pb-4 mt-5 fs-2">
		            <img class="p-absolute" style="width: calc(6.5vw + 20px); bottom: 10px; left: calc(2vw + 10px)" src="./assets/SVG Images/undraw_team_page_re_cffb.svg" alt="team" />
		            <img class="p-absolute" style="width: calc(4vw + 10px); left: 30%;" src="./assets/SVG Images/undraw_work_chat_re_qes4.svg" alt="chat" />
		            <img class="p-absolute" style="width: calc(4vw + 10px); left: 20%;" src="./assets/SVG Images/undraw_authentication_re_svpt.svg" alt="authentication" />
		            <img class="p-absolute" style="height: 100%; top: 0; left: 75%;" src="./assets/SVG Images/undraw_remote_meeting_re_abe7.svg" alt="meeting" />
		            <img class="p-absolute" style="width: calc(4vw + 10px); right: 10px;" src="./assets/SVG Images/undraw_sharing_knowledge_03vp(1).svg" alt="sharing" />
		            <h1 class="flex-display justify-content-center mb-2">Contact Nick Kevin</h1>
		            <p class="flex-display justify-content-center mt-2">Get in touch with me to get the ball rolling</p>
		        </div>
		        <!----------------------------------------------------------------------------------->
		        <!----------------------------------- Contact list ---------------------------------->
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
		        </div>
		        <!----------------------------------------------------------------------------------->
		        <!--------------------------------------- Footer ------------------------------------>
		        <footer class="mt-5 flex-display justify-content-center mb-4 pb-2" style="bottom: calc(3.25vh + 25px);">
		            <h2 class="nk-text-color white-bt-1 pt-3 pl-4 pr-4">FIND ME</h2>
		        </footer>
		        <!----------------------------------------------------------------------------------->
		    </section>
		`;
	}
} 