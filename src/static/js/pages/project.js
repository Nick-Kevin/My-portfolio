export default class {
	constructor (
		title,
		imageOverviewSource,
		imageOverviewAlt,
        year,
        technologies,
	) {
		this.title = title;
		this.imageOverviewSource = imageOverviewSource;
		this.imageOverviewAlt = imageOverviewAlt;
        this.year = year;
        this.technologies = technologies;
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
