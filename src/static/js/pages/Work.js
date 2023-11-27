import view from './view.js';

export default class extends view {
	constructor() {
		super();
		// set the title to Home to reflect the view
		this.setTitle("Home");
	}

	async getHtml() {
		return `
			<main id="my-work">
				<section class="flex-display align-items-center p-relative">
					<h1>Front end and web development &#8595;</h1>
				</section>

				<section>
					here are my accomplishment
				</section>

				<section class="flex-display align-items-center">
					<h1>UI/UX design &#8595;</h1>
				</section>

				<section>
					here are my accomplishment
				</section>
			</main>
		`;
	}
} 