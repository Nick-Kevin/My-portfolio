import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<section id="secondPage" class="accueil screen scrollbar">
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
		            <!-- the burger menu -->
		            <div class="content nk-right">
		                <img class="pointer" src="static/assets/SVG Images/burger-menu-right-svgrepo-com.svg" alt="menu">
		            </div>
		            <!-- Turn on/off button -->
		            <div class="other-width nk-right tooltip">
		                <img id="soundOffInHome" class="other-width pointer" src="static/assets/SVG Images//sound-off-svgrepo-com.svg" alt="sounf off.svg"/>
		                <audio src="static/assets/Music/piano-moment.mp3"></audio>
		                <img id="soundOnInHome" class="other-width pointer" src="static/assets/SVG Images/sound-on-svgrepo-com.svg" alt="sound on.svg"/>
		                <p class="tooltiptext">Click to turn <span></span> the music</p>
		            </div>
		            <!-- links menu -->
		            <div class="absolute" style="right: calc(35px + 1.2vw)">
		                <div class="menu">
		                    <img class="absolute pointer playOpacity" style="animation-duration: 0.5s;" src="assets/SVG Images/close-svgrepo-com.svg"> <!-- close button -->
		                    <a class="widen-height flex-display align-items-center nk-text-color none-decoration" href="/" data-link>Home</a>
		                    <a class="widen-width flex-display align-items-center nk-text-color none-decoration" href="/work" data-link>Work</a>
		                    <a class="widen-height flex-display align-items-center nk-text-color none-decoration" href="/about" data-link>About</a>
		                    <a
		                        class     = "
		                            widen-width
		                            flex-display
		                            align-items-center
		                            nk-text-color
		                            none-decoration
		                            contact-link
		                        "
		                        href      = "/contact"
		                        data-link
		                    >
		                        Contact
		                    </a>
		                </div>
		            </div>
		            <!----------------------------------------------------------------------------------->
		        </div>
		        <div class="main-content block-container flex-display align-items-center">
		            <div class="first-content flex-display align-items-center">
		                <h1 class="nk-text-color nk-text-thin other-margin-bottom">Hello!
		                    <span><img class="image-size" src="assets/SVG Images/waving-hand-svgrepo-com.svg"></span> 
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
		                    <img src="assets/Images/Kevin.jpg" alt="kevin.jpg">
		                </div>
		            </div>
		        </div>
		        <div class="link other-margin-top flex-display">
		            <p class="nk-text-color nk-text-style flex-display align-items-center">
		                <img class="image-size pointer" src="assets/SVG Images/link-chain-svgrepo-com.svg" alt="link.svg">
		                <span class="pointer">my works</span>
		            </p>
		            <p class="nk-text-color nk-text-style flex-display align-items-center">
		                <img class="image-size pointer" src="assets/SVG Images/link-chain-svgrepo-com.svg" alt="link.svg">
		                <span class="pointer">about</span>
		            </p>
		        </div>
		        <div class="footer nk-text-light flex-display" style="height: 300px;">
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