import view from '../../view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Sunday school");
	}

	async getHtml() {
		return `
			<main id="my-work">								
				<h1>Sunday school</h1>
			</main>
		`;
	}
}
