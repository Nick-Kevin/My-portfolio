export default class {
	constructor (
		title,
		imageOverviewSource,
		imageOverviewAlt,
        year,
        technologies,
        projectDescription,
	) {
		this.title = title;
		this.imageOverviewSource = imageOverviewSource;
		this.imageOverviewAlt = imageOverviewAlt;
        this.year = year;
        this.technologies = technologies;
        this.projectDescription = projectDescription;
	}

	async getHtml() {
		return `
			<main id="sunday-school" class="pr-8 pl-8 py-8">
				<a href="/work" class="none-decoration nk-text-color fa fa-arrow-left py-1 br-1 fs-2 px-4 bg-black p-fixed" data-link></a>
				<h1 class="center-text">${ this.title }</h1>
				<div class="mt-8 image-overview">
					<img src=${ this.imageOverviewSource } alt=${ this.imageOverviewAlt } class="w-100 br-4">
				</div>
				<div class="mt-8 grid-display description dashed-line-top dashed-line-bottom py-4">
					<div class="grid-display">
						<h3 class="nk-text-style">Year</h3>
						<p> ${ this.year} </p>
						<h3 class="nk-text-style">Technologies</h3>
						<ul>
							${ this.technologies }
						</ul>
					</div>
					<p class="w-100">
						${ this.projectDescription }
					</p>
				</div>
			</main>
		`;
	}
}
