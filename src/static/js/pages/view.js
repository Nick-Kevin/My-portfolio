export default class {
	constructor() {

	}

	// update the page title of the view as we navigate between views
	setTitle(title) {
		document.title = title;
	}

	// method is where we are going to put in the HTML content for a particular view
	async getHtml() {
		return '';
	}
}