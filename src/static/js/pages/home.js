import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<section id="secondPage" class="accueil">
			    <div id="menu">
			        <ul>
			          <li><a href="/home" class="nk-stheme-color" data-link>Home</a></li>
			          <li><a href="/work" class="c-white" data-link>Work</a></li>
			          <li><a href="/about" class="c-white" data-link>About</a></li>
			          <li><a href="/contact" class="c-white" data-link>Contact</a></li>
			        </ul>
			    </div>

		        <div>
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
			        <div class="main-content block-container gird-display col-div-2 justify-content-center">
			            <div class="first-content flex-display align-items-center">
			                <p class="nk-text-color ml-8">
			                	Hello, I'm Nick Kevin RAZAFINIRINA, and I'm a dedicated front-end developer and occasionaly UI/UX designer. My journey in the world of web development has been driven by a burning passion for creating exceptional user interfaces and ensuring a seamless user experience.
			                </p>			              
			            </div>
			            <div class="flex-display justify-content-end">
			            	<div id="front-end-ui-ux-design" class="mr-8 nk-text-style other-size flex-display justify-content-center">
			                	<p class="other-margin-bottom">Frontend Developer</p>
			                    <p>& UI/UX designer</p>
			            	</div>
			            </div>
			        </div>
			        <div class="link other-margin-top flex-display my-8">
			            <p class="nk-text-color nk-text-style flex-display align-items-center">
			                <img class="image-size pointer" src="static/assets/SVG Images/link-chain-svgrepo-com.svg" alt="link.svg">
			                <span class="pointer">my works</span>
			            </p>
			            <div>			                    
		                    <div id="my-photo" class="flex-display">
		                    	<img src="static/assets/Images/Kevin.jpg" alt="kevin.jpg">
		                    </div>
		                </div>
			            <p class="nk-text-color nk-text-style flex-display align-items-center">
			                <img class="image-size pointer" src="static/assets/SVG Images/link-chain-svgrepo-com.svg" alt="link.svg">
			                <span class="pointer">about</span>
			            </p>
			        </div>			     
			        <div class="footer grid-container" style="height: 350px;">			        			
						<div class="flex-display flex-column px-2">
							<p class="mb-2 c-white">My github contribution graph</p>
							<img
								id = "my-github-activity mt-1"
								class = "w-100"
								style = "border-radius: 8px"
								src = "https://github-readme-activity-graph.vercel.app/graph?username=Nick-Kevin&theme=github-compact&line=FFFFFF&point=faff06&area=true&area_color=FFFFFF&bg_color=010101&color=FFFFFF&title_color=FFFFFF"
								alt = "My github activity graph"
							>
						</div>
						<div>
	        				<p class="c-white mb-2">Contact me</p>
				            <div class="card">
							    <a class="socialContainer containerOne" href="#">
							    	<svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
							    </a>
							      
							    <a class="socialContainer containerTwo" href="#">
							        <svg width="24" height="24" viewBox="0 0 320 512" class="socialSvg facebookSvg">
							  			<path d="M266.2 288H210v136h-75V288H94.8V217.6h40.2v-53.6c0-37.6 18.5-74.2 74.1-74.2 21 0 43.5 1.5 49.2 2.2v61.6h-33.7c-26.5 0-31.4 12.6-31.4 31.1v41.2h64.8L266.2 288z"/>
									</svg>
							    </a>
							        
							    <a class="socialContainer containerThree" href="#">
							        <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
							    </a>
							      
							    <a class="socialContainer containerFour" href="#">
							        <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
							    </a>
							</div>
	        			</div>
	        			<div>
							<p class="mb-2 c-white">My github streak stats</p>
							<img
								id = "my-github-streak-stats mt-1"
								class = "w-100"
								src = "https://streak-stats.demolab.com/?user=Nick-Kevin&theme=highcontrast&ring=faff06"
								alt = "My github streak stats"
							>
						</div>		        
			    </div>
		    </section>
		`;
	}
} 