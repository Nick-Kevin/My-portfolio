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
		        <div class="ml-8 mr-8 col-gap-8 justify-items-center">
		        	<p>
		        		I am a dedicated computer science student currently pursuing my
		        		Master's degree at the Institut Supérieur Polytechnique de Madagascar (ISPM).
		        		My academic journey has fueled my passion for front-end development and UI/UX design,
		        		although I thrive in the dynamic realm of web development,
		        		boasting proficiency in both front-end and back-end technologies.
		        		Having completed a comprehensive internship that involved dual roles as a front-end and back-end developer,
		        		I have actively contributed to various web development projects throughout my academic tenure. 
		        		My overarching goal is to ascend to the ranks of top-tier front-end developers, leveraging modern and popular technologies to create high-quality products.
		        		Beyond the world of coding,
		        		I find solace in listening to pop music and indulging in series whenever I'm away from my computer.
		            </p>
		            <div class="bg-white mt-8 br-2 flex-display justify-content-center">
		            	<img id="second-logo" src="static/assets/Images/second-logo.gif" alt="My second logo">
		            </div>
		        </div>
	            <h1 class="ml-8 mt-8 mb-8">My skills</h1>
	            <div class="skills-container">
	            	<div id="front-end" class="ml-8 mr-8 mb-8 px-3 py-3 br-2">
	            		<h4 class="nk-stheme-color">Frontend</h4>
	            		<div class="skills-box flex-display justify-content-around mt-3">
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img class="bg-white br-1" src="static/assets/Images/Front end/html5.png" alt="HTML logo">
	            				<h6 class="mt-2">HTML</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Front end/css.png" alt="CSS logo">
	            				<h6 class="mt-2">CSS</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Front end/javascript.png" alt="JavaScript logo">
	            				<h6 class="mt-2">JavaScript</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Front end/bootstrap.svg" alt="Bootstrap logo">
	            				<h6 class="mt-2">Bootstrap</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Front end/react.png" alt="React logo">
	            				<h6 class="mt-2">React</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Front end/mui.png" alt="MUI logo">
	            				<h6 class="mt-2">Material UI</h6>
	            			</div>
	            		</div>
	            	</div>
	            	<div id="back-end" class="ml-8 mr-8 mb-8 px-3 py-3 br-2">
	            		<h4 class="nk-stheme-color">Backend</h4>
	            		<div class="skills-box flex-display justify-content-around mt-3">
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Back end/node.png" alt="HTML logo">
	            				<h6 class="mt-2">Node.js</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Back end/express.png" alt="CSS logo">
	            				<h6 class="mt-2">Express</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Back end/php.png" alt="JavaScript logo">
	            				<h6 class="mt-2">PHP</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Back end/laravel.png" alt="Bootstrap logo">
	            				<h6 class="mt-2">Laravel</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/Back end/codeigniter.png" alt="React logo">
	            				<h6 class="mt-2">Codeigniter</h6>
	            			</div>
	            		</div>
	            	</div>
	            	<div id="sgbd" class="ml-8 mr-8 mb-8 px-3 py-3 br-2">
	            		<h4 class="nk-stheme-color">DataBase</h4>
	            		<div class="skills-box flex-display justify-content-around mt-3">
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/SGBD/mysql.png" alt="HTML logo">
	            				<h6 class="mt-2">MySQL</h6>
	            			</div>
	            			<div class="skill flex-display flex-column align-items-center">
	            				<img src="static/assets/Images/SGBD/postgresql.png" alt="CSS logo">
	            				<h6 class="mt-2">PostgreSQL</h6>
	            			</div>
	            		</div>
	            	</div>
	            </div>            
	        </div>

		`;
	}
} 