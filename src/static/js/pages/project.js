export default class {
	constructor (
		title,
		imageOverviewSource,
		imageOverviewAlt,
        year,
        technologies,
        projectDescription,
		carouselItemNumber,
		carouselItemImageSource,
		carouselIndicatorLabel,
		carouselTitle
	) {
		this.title = title;
		this.imageOverviewSource = imageOverviewSource;
		this.imageOverviewAlt = imageOverviewAlt;
        this.year = year;
        this.technologies = technologies;
        this.projectDescription = projectDescription;
		this.carouselItemNumber = carouselItemNumber;
		this.carouselItemImageSource = carouselItemImageSource;
		this.carouselIndicatorLabel = carouselIndicatorLabel;
		this.carouselTitle = carouselTitle;
	}

	downloadPDF () {
		let downloadSection = '';

		if (this.carouselItemNumber && this.carouselItemNumber[0] === 'ui-ux' && this.carouselItemNumber[1] !== 'unset') {
			downloadSection += `
			<div class="resume my-ml-8 my-mr-8 mt-10 flex-display align-items-center">
				<span class="my-mr-2">Sketch as PDF:</span>
				<a style="padding: 8px 32px" class="bg-black br-1 " href="${ this.carouselItemNumber[1] }" download>
					<p>Download</p>
				</a>
			</div>
			`;
		}

		return downloadSection;
	}

	carouselsItems () {		
		let itemArray = [];
		this.carouselItemNumber.map ((itemsNumber, index) => {
			let item;
			for (let itemNumber = 0; itemNumber < itemsNumber; itemNumber++) {
				item += `
					<div class="hidden duration-700 ease-in-out" data-carousel-item>
						<img src="${ this.carouselItemImageSource[index][itemNumber] }" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
					</div>
				`;
			}
			itemArray.push(item);
		})
		
		return itemArray;
	}

	carouselsIndicators () {
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
		
		return indicatorArray;
	}

	carousel () {		
		let carouselSection = '';
		
		if (this.carouselItemNumber && this.carouselItemNumber[0] !== 'ui-ux') {
			const carouselLength = this.carouselItemNumber.length;		
			const carouselItems = this.carouselsItems();
			this.carouselsItems();
			//console.log(carouselItems[0]);
			const carouselIndicators = this.carouselsIndicators();

			for (let carouselIndex = 0; carouselIndex < carouselLength; carouselIndex++) {
				carouselSection += `
					<h3 class="my-mx-9 my-mt-8 nk-text-style text-end text-3xl decor">
						${ this.carouselTitle ? this.carouselTitle[carouselIndex] : '' }
					</h3>
					<div class="flex justify-center ${ this.carouselTitle ? 'mt-6' : 'mt-16' }">
						<div class="default-carousel oy-h relative overflow-x-hidden overflow-y-clip" data-carousel="slide">
							<!-- Carousel wrapper -->
							<div class="relative overflow-hidden br-4">
								<!-- Items -->
								${ carouselItems[carouselIndex] }
							</div>
							<!-- Slider indicators -->
							<div class="absolute ox-s scrollbar-perso w-full pb-4 z-30 flex -translate-x-1/2 top-91 left-1/2 space-x-3 rtl:space-x-reverse">
								<div class="carousel-indicator flex gap-x-10">
									${ carouselIndicators[carouselIndex] }
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
		}

		return carouselSection;
	}

	async getHtml() {
		return `		
			<main id="project" class="my-pr-8 my-pl-8 my-py-8">
				<a href="/work" class="none-decoration p-fixed nk-text-color fa fa-arrow-left my-py-1 br-1 fs-2 my-px-4 bg-black" data-link></a>
				<h1 class="center-text text-5xl font-bold leading-7">${ this.title }</h1>
				<div class="my-mt-8 flex-display justify-content-center image-overview">
					<img id="overview" class="bs w-100 br-4" src=${ this.imageOverviewSource } alt=${ this.imageOverviewAlt }>
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
				<div class="swiper br-4">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="static/assets/Work-images/école-du-dimanche/authentication/Inscription.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="static/assets/Work-images/école-du-dimanche/front-office/search.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="static/assets/Work-images/école-du-dimanche/front-office/register.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="static/assets/Work-images/école-du-dimanche/front-office/historics.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="static/assets/Work-images/école-du-dimanche/back-office/dashboard-part1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="static/assets/Work-images/école-du-dimanche/back-office/monitors.png" alt="">
        </div>
      </div>

      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
				${ this.downloadPDF() }
				${ this.carousel() }
			</main>
		`;
	}
}
