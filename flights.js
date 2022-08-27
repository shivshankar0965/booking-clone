/*-----------------swipers js files-------------*/

let swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 20,
  //   pagination: {
  //     el: ".swiper-pagination2",
  //     type: "fraction",
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  debugger: true,
});
let international_popular_flights = [
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/664662.jpg?k=d233ff3beefccce61e2c23f1079e13cded4d74eb74ad01749b18a3e49f56e04a&o=",
    title: "New Delhi to Kathmandu",
    desc: "Aug 31 - Sept 7 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/674773.jpg?k=f65fb36a6b12a3f09a07232ef7946deb46871c0d5a308d3e16ff127d61233f41&o=",
    title: "New Delhi to Male City",
    desc: "Sept 1 - Sept 8 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=",
    title: "New Delhi to Bangkok",
    desc: "Aug 28 - Sept 4 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
    title: "New Delhi to Dubai",
    desc: "Sept 1 - Sept 8 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/654657.jpg?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o=",
    title: "New Delhi to Istanbul",
    desc: "Aug 29 - Sept 5 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/686019.jpg?k=6a598e32da7c3ad489629acee666681c9b8d9096951bcea1c2bc645e87ef260f&o=",
    title: "New Delhi to Zürich",
    desc: "Aug 31 - Sept 7 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
    title: "New Delhi to London",
    desc: "Aug 27 - Sept 3 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/856674.jpg?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=",
    title: "New Delhi to New York",
    desc: "Aug 28 - Sept 4 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/613087.jpg?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=",
    title: "New Delhi to Paris",
    desc: "Aug 29 - Sept 5 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/967877.jpg?k=18d14b862ca13e1e099d98c281202acdf8e80bacbf831bd66222ea03392d5d57&o=",
    title: "New Delhi to Melbourne",
    desc: "Aug 31 - Sept 7 · Round trip",
  },
];

function appendSwipper3(data3) {
  data3.forEach((el) => {
    let swiper_slider = document.createElement("div");
    swiper_slider.setAttribute("class", "swiper-slide explore_slide_1");
    swiper_slider.innerHTML = `
  
			  <div>
			  <img
			  src="${el.image}"
			  alt=""
			  />
			  <h3>${el.title}</h3>
			  <p>${el.desc}</p>
		  </div>
  
	  `;
    document
      .querySelector(".mySwiper3 > .swiper-wrapper")
      .append(swiper_slider);
  });
}
let swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 20,
  //   pagination: {
  //     el: ".swiper-pagination2",
  //     type: "fraction",
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  debugger: true,
});
let domestic_popular_flights = [
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684877.jpg?k=4695a1cdaa3a3a11381d172f284215174d6e057ed4722aaa902e859cd5c7dc4d&o=",
    title: "New Delhi to Srinagar",
    desc: "Aug 31 - Sept 7 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/652858.jpg?k=6dd48a72530871fd853668bb725953584d60a188c1884f5f3bc005573ce6f486&o=",
    title: "Aug 30 - Sept 6 · Round trip",
    desc: "Aug 30 - Sept 6 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=",
    title: "New Delhi to Mumbai",
    desc: "Aug 27 - Sept 3 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684568.jpg?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=",
    title: "New Delhi to Kolkata",
    desc: "Aug 28 - Sept 4 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
    title: "New Delhi to Panaji",
    desc: "Aug 31 - Sept 7 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684820.jpg?k=29ee5cee377c4e6cfba7a474d02914660d3311f0b75d1b9cf3bdefef0eabffdd&o=",
    title: "New Delhi to Pune",
    desc: "Aug 26 - Sept 2 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=",
    title: "New Delhi to Bangalore",
    desc: "Aug 27 - Sept 3 · Round trip",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684652.jpg?k=5055a718205497d78d7d80b05c6cfbd59b79af5998231e50c23832e103087691&o=",
    title: "New Delhi to Hyderabad",
    desc: "Aug 26 - Sept 2 · Round trip",
  },
];
function appendSwipper4(data) {
  data.forEach((el) => {
    let swiper_slider = document.createElement("div");
    swiper_slider.setAttribute("class", "swiper-slide explore_slide_1");
    swiper_slider.innerHTML = `
  
			  <div>
			  <img
			  src="${el.image}"
			  alt=""
			  />
			  <h3>${el.title}</h3>
			  <p>${el.desc}</p>
		  </div>
  
	  `;
    document
      .querySelector(".mySwiper4 > .swiper-wrapper")
      .append(swiper_slider);
  });
}

let swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 20,
  //   pagination: {
  //     el: ".swiper-pagination2",
  //     type: "fraction",
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  debugger: true,
});
let trending_cities = [
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
    title: "Dubai, United Arab Emirates",
    desc: "Sept 1 - Sept 8 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/613094.jpg?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
    title: "London, United Kingdom",
    desc: "Aug 27 - Sept 3 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/971989.jpg?k=1e02f419fe4a28344bb98db67c4153ba6c9fb5b4837e2e038612cff9ea419c65&o=",
    title: "Toronto, Canada",
    desc: "Aug 28 - Sept 4 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=",
    title: "Panaji, India",
    desc: "Aug 31 - Sept 7 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/620027.jpg?k=3e415bb694a1a0145529dad3242573d0d52364bc57bae824b5990bf9c2fabc04&o=",
    title: "Bangkok, Thailand",
    desc: "Aug 28 - Sept 4 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=",
    title: "Mumbai, India",
    desc: "Aug 27 - Sept 3 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=",
    title: "Bangalore, India",
    desc: "Aug 27 - Sept 3 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/688060.jpg?k=57065d3be37fb33083964a32334c077cf3cbc52eac00202e887d8c20636514e6&o=",
    title: "Kuta, Indonesia",
    desc: "Aug 27 - Sept 3 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/684877.jpg?k=4695a1cdaa3a3a11381d172f284215174d6e057ed4722aaa902e859cd5c7dc4d&o=",
    title: "Flights from Indira Gandhi",
    desc: "Aug 31 - Sept 7 · Round trip",
    location: "Flights from Indira Gandhi",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/city/square210/619666.jpg?k=504b97635641d489438feb63780d4ae80ce8a2fd08a1fcb6183485738a87e6ad&o=",
    title: "Singapore, Singapore",
    desc: "Aug 27 - Sept 3 · Round trip",
    location: "Flights from Indira Gandhi",
  },
];
function appendSwipper5(data) {
  data.forEach((el) => {
    let swiper_slider = document.createElement("div");
    swiper_slider.setAttribute("class", "swiper-slide explore_slide_1");
    swiper_slider.innerHTML = `
  
			  <div>
			  <img
			  src="${el.image}"
			  alt=""
			  />
			  <h3>${el.title}</h3>
			  <p>${el.desc}</p>
		  </div>
  
	  `;
    document
      .querySelector(".mySwiper5 > .swiper-wrapper")
      .append(swiper_slider);
  });
}
window.addEventListener("DOMContentLoaded", (event) => {
  appendSwipper3(international_popular_flights);
  appendSwipper4(domestic_popular_flights);
  appendSwipper5(trending_cities);
});
