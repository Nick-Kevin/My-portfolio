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
				<a href="/work" class="none-decoration nk-text-color py-3 px-4 bg-black p-fixed" data-link>Retour</a>					
				<h1 class="center-text">Sunday school</h1>
			</main>
		`;
	}
}
