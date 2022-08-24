const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f695ab56aamshea1dd0a7393d38fp19368bjsn3c4751a7f211',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

fetch('https://booking-com.p.rapidapi.com/v1/hotels/nearby-cities?latitude=65.9667&longitude=-18.5333&locale=en-gb', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	  
	  let swiper = new Swiper('.mySwiper', {
		slidesPerView: 6,
		centeredSlides: false,
		spaceBetween: 0,
		pagination: {
		  el: '.swiper-pagination',
		  type: 'fraction',
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });