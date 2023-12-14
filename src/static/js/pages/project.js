export default class {
	constructor (
		title,
		imageOverviewSource,
		imageOverviewAlt,
        year,
        technologies,
        projectDescription,
		carouselNummber,
		carouselItemNumber,
		carouselItemImageSource,
		carouselIndicatorLabel,
	) {
		this.title = title;
		this.imageOverviewSource = imageOverviewSource;
		this.imageOverviewAlt = imageOverviewAlt;
        this.year = year;
        this.technologies = technologies;
        this.projectDescription = projectDescription;
		this.carouselNummber = carouselNummber;
		this.carouselItemNumber = carouselItemNumber;
		this.carouselItemImageSource = carouselItemImageSource;
		this.carouselIndicatorLabel = carouselIndicatorLabel;
	}

	carouselItem () {
		let item = '';
		for (let itemNumber = 0; itemNumber < this.carouselItemNumber; itemNumber++) {
			item += `
				<div class="hidden duration-700 ease-in-out" data-carousel-item>
					<img src="${ this.carouselItemImageSource[itemNumber] }" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
				</div>
			`;
		}
		return item;
	}

	carouselIndicator () {
		let indicatorArray = [];
		this.carouselItemNumber.map ((itemsNumber, index) => {
			let indicatorItems = '';
			for (let itemNumber = 0; itemNumber < itemsNumber; itemNumber++) {				
				indicatorItems += `
					<button type="button" class="text-xl rounded-full" aria-current=${ itemNumber === 0 ? "true" : "false" } aria-label="Slide ${itemNumber + 1}" data-carousel-slide-to="${ itemNumber }">
						${ this.carouselIndicatorLabel[index][itemNumber] }
					</button>
				`;
			}
			indicatorArray.push(indicatorItems);
		})
		
		return indicator;
	}

	carousel () {
		let carouselSection = '';
		for (let carouselIndex = 0; carouselIndex < this.carouselNummber; carouselIndex++) {
			carouselSection += `
				<div class="flex justify-center">
					<div class="default-carousel relative overflow-x-hidden overflow-y-clip my-mt-8" data-carousel="slide">
						<!-- Carousel wrapper -->
						<div class="relative overflow-hidden br-4">
							<!-- Items -->
							${ this.carouselItem() }
						</div>
						<!-- Slider indicators -->
						<div class="absolute ox-s scrollbar-perso w-full pb-4 z-30 flex -translate-x-1/2 top-91 left-1/2 space-x-3 rtl:space-x-reverse">
							<div class="carousel-indicator flex gap-x-10">
								${ this.carouselIndicator() }
							</div>
						</div>
						<!-- Slider controls -->
						<button type="button" class="absolute pt-56 top-0 start-0 z-30 flex justify-center h-full my-px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
							<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
								<svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
								</svg>
								<span class="sr-only">Previous</span>
							</span>
						</button>
						<button type="button" class="absolute top-0 end-0 z-30 flex pt-56 justify-center h-full my-px-4 cursor-pointer group focus:outline-none" data-carousel-next>
							<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
								<svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
								</svg>
								<span class="sr-only">Next</span>
							</span>
						</button>
					</div>
				</div>
			`;
		}		

		return carouselSection;
	}

	async getHtml() {
		return `
			<main id="project" class="my-pr-8 my-pl-8 my-py-8">
				<a href="/work" class="none-decoration p-fixed nk-text-color fa fa-arrow-left my-py-1 br-1 fs-2 my-px-4 bg-black" data-link></a>
				<h1 class="center-text text-5xl font-bold leading-7">${ this.title }</h1>
				<div class="my-mt-8 flex-display justify-content-center image-overview">
					<img id="overview" src=${ this.imageOverviewSource } alt=${ this.imageOverviewAlt } class="w-100 br-4">
				</div>
				<div class="my-mt-8 my-mx-9 grid-display description dashed-line-top dashed-line-bottom my-py-4">
					<div class="grid-display">
						<h3 class="nk-text-style nk-stheme-color">Year</h3>
						<p> ${ this.year} </p>
						<h3 class="nk-text-style nk-stheme-color">Technologies</h3>
						<ul>
							${ this.technologies }
						</ul>
					</div>
					<p class="w-100">
						${ this.projectDescription }
					</p>
				</div>
				${ this.carousel() }
			</main>
		`;
	}
}
