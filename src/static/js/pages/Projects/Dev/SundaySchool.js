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
			</main>
		`;
	}
}
