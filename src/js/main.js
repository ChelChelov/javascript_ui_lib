'use strict';

import './lib/lib';

$('#first').click(() => {
	$('.w-500px').eq(0).fadeToggle(900);
});

$('[data-count="second"]').click(() => {
	$('.w-500px').eq(1).fadeToggle(900);
});

$('button').eq(2).click(() => {
	$('.w-500px').fadeToggle(900);
});

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Modal title',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a temporibus perspiciatis quos vero, labore sed aspernatur aut est eaque blanditiis officia repudiandae culpa vel, nemo quis quisquam soluta nesciunt?'
	},
	btns: {
		count: 3,
		settings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Data has saved');	
				}
			],
			[
				'Like',
				['btn-primary', 'ml-10'],
				false,
				() => {
					alert('Liked');	
				}
			],
		]
	}
}));

// This call "$('.carousel')" works however '.carousel' isn't exist because prototype method is still available even if the NodeList is empty.
// $('.carousel').createCarousel({
//     images: [
//         'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0cc642a1-acb5-4608-9d4b-dbef43553606/original=true,quality=90/00085-2378084303.jpeg',
//         'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/400c2aa5-4647-4714-94d8-ffaa9c56acd7/original=true,quality=90/00068-689895813.jpeg',
//         'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/062ec1ad-3fab-48d5-9e02-cce8fc6a6ccd/original=true,quality=90/00092-2318760738.jpeg',
//     ],
//     autoplay: true,
//     duration: 3000,
// 	selector: '.container',
// 	sliderId: 'carousel'
// });

$('.carousel').createCarousel({
    images: [
        'https://as1.ftcdn.net/jpg/07/33/90/18/1000_F_733901878_mA9lvDJkhR2RA4Ex8Jlch4Nay1VgKMXc.jpg',
        'https://as1.ftcdn.net/jpg/04/02/64/08/1000_F_402640862_Mg9kbil2AP20CvQBWr9pX99e9xmfCHpP.jpg',
        'https://as1.ftcdn.net/jpg/05/35/43/12/1000_F_535431282_VhH2Uo9QfgdEvRQdxMbwgn70ZIWisCQh.jpg',
    ],
    autoplay: true,
    duration: 2000,
	selector: '.secondContainer',
	sliderId: 'secondCarousel',
	showDots: false,
    // showArrows: true,
});

// 1) add attribute "stop autoplay when images.length - 1 === index"

// 2) don't change classes: '.carousel-inner', '.carousel-item', '.carousel-slides', '.carousel-indicators' if I need to get smth unique, use data-atr id etc.

// 3) add attr showArrows: true/false

// 4) add attr to remove style (background-color: rgba(0,0,0, .2);) after hovering on zone with arrows 



// ! add showDots attr 

























// $.prototype.carousel = function({
	// 	autoplay = true, 
	// 	duration = 3000, 	
	// 	innerClass = '.carousel-inner', 
	// 	itemClass = '.carousel-item', 
	// 	slidesClass = '.carousel-slides', 
	// 	indicatorsId = '#carousel-indicators'
	// } = {}) {
	
	
	
	// $('.carousel').carousel({
	// 	autoplay: true,
	// 	duration: 3000
	// });
	
	
	// $.prototype.createCarousel = function({
	//     images = [],
	//     autoplay = false,
	//     duration = 3000,
	//     prevArrow = `
	//         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	//             <path d="M15 6l-6 6 6 6"></path>
	//         </svg>
	//     `,
	//     nextArrow = `
	//         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	//             <path d="M9 18l6-6-6-6"></path>
	//         </svg>
	//     `,
	//     selector = 'body',
	// 	sliderId = 'carousel',
	// 	innerClass = '.carousel-inner',
	//     itemClass = '.carousel-item',
	//     slidesClass = '.carousel-slides',
	//     indicatorsClass = '.carousel-indicators',
	// 	indicatorsId = 'carousel-indicators',
	// 	showDots = true,
	//     showArrows = true
	// } = {}) {