import view from '../../view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Sunday school");
	}

	async getHtml() {
		return `
			<main id="sunday-school" class="pr-8 pl-8 py-8">
				<a href="/work" class="none-decoration nk-text-color fa fa-arrow-left py-1 br-1 fs-2 px-4 bg-black p-fixed" data-link></a>
				<h1 class="center-text">Sunday school</h1>
				<div class="mt-8 image-overview">
					<img src="static/assets/Work images/Ecole du dimanche/Page d'accueil.png" alt="Sunday school" class="w-100 br-4">
				</div>
				<div class="mt-8 grid-display description dashed-line-top dashed-line-bottom py-4">
					<div class="grid-display">
						<h3 class="nk-text-style">Year</h3>
						<p>2023</p>
						<h3 class="nk-text-style">Technologie</h3>
						<ul>
							<li>React</li>
							<li>Laravel</li>
							<li>MySQL</li>
						</ul>
					</div>
					<p>
						I am a dedicated computer science student currently pursuing my
						Master's degree at the <a id="ispm" href="#">Institut Supérieur Polytechnique de Madagascar (ISPM)</a>.
						My academic journey has fueled my passion for front-end development and UI/UX design,
						although I thrive in the dynamic realm of web development,
						boasting proficiency in both front-end and back-end technologies.
						Having completed a comprehensive internship that involved dual roles as a front-end and back-end developer,
						I have actively contributed to various web development projects throughout my academic tenure. 
						My overarching goal is
					</p>
				</div>
			</main>
		`;
	}
}
