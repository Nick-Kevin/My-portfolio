import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Welcome");
	}

	async getHtml() {
		return `
			<section id="firstPage" class="first-animation">
		        <div class="text">
		            <h1 class="white-milk nk-text-style">
		                <span class="n1">N</span>
		                <span class="i1">i</span>
		                <span class="c">c</span>
		                <span class="k1">k</span>
		                <span class="k2">K</span>
		                <span class="e">e</span>
		                <span class="v">v</span>
		                <span class="i2">i</span>
		                <span class="n2">n</span>
		            </h1>
		            <p class="nk-text-color nk-text-thin">©Copyright 2023</p>
		            <div class="slideUp">
		                <a
		                    id        = "letsVisit"
		                    href      = "/home"
		                    class     = "boutton pointer"
		                    style     = "vertical-align:middle"
		                    data-link
		                >
		                    <span class="pointer nk-black-color">Let's visit</span>
		                </a>
		            </div>
		        </div>
		        <div class="images">
		            <img src="assets/SVG Images/boy-with-glasses-svgrepo-com.svg" alt="boy with glasses.svg" class="boy-glasses">
		            <img src="assets/SVG Images/parameter-svgrepo-com.svg" alt="parameter.svg" class="parameter">
		        </div>   
		    </section>
		`;
	}
} 