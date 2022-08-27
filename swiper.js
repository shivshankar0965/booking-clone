// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f695ab56aamshea1dd0a7393d38fp19368bjsn3c4751a7f211",
//     "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://booking-com.p.rapidapi.com/v1/hotels/nearby-cities?latitude=65.9667&longitude=-18.5333&locale=en-gb",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
/*----------------------------------swiper 1---------------*/
let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 20,
  //   pagination: {
  //     el: ".swiper-pagination1",
  //     type: "fraction",
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  debugger: true,
});
let property_type = [
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    title: "Hotels",
    desc: "892,783 hotels",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    title: "Apartments",
    desc: "926,012 apartments",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    title: "Resorts",
    desc: "18,252 resorts",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    title: "Villas",
    desc: "482,715 villas",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
    title: "Cabins",
    desc: "37,072 cabins",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
    title: "Cottages",
    desc: "158,612 cottages",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
    title: "Glamping",
    desc: "14,004 glamping sites",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
    title: "Serviced apartments",
    desc: "35,899 serviced apartments",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
    title: "Holiday homes",
    desc: "482,715 holiday homes",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=",
    title: "Guest houses",
    desc: "109,506 guest houses",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=",
    title: "Hostels",
    desc: "17,015 hostels",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o=",
    title: "Motels",
    desc: "13,658 motels",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o=",
    title: "B&Bs",
    desc: "208,171 B&Bs",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450279.jpeg?k=cb9ab85ffe439f3030e00281f2d52583a398bf076e54f00f746e1d1baf62bf6e&o=",
    title: "Ryokans",
    desc: "2,078 ryokans",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450064.jpeg?k=4d4ea22dc4828fd55a3889e90531c9841ddb2d9abf460c420cdd24f2a9b658d2&o=",
    title: "Riads",
    desc: "1,228 riads",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450068.jpeg?k=41cc7c5449011323aaaaed4e845cb16200b5d540c77a50c1bea90399a1e92d70&o=",
    title: "Holiday parks",
    desc: "5,955 holiday parks",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o=",
    title: "Homestays",
    desc: "145,878 homestays",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450283.jpeg?k=44ef0e355cff36883935e4c99b5c01b035eabebad278d22363210b2fe40b2791&o=",
    title: "Campsites",
    desc: "10,232 campsites",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450103.jpeg?k=a1fa72362160b1df6e288050afa7ce1aade80871acd368ddd4a4ebf6ad87764e&o=",
    title: "Country houses",
    desc: "12,688 country houses",
  },
  {
    image:
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450080.jpeg?k=15d9709efa513f2b23b5fa8d5234d87bdee2bf97b3e7552244592da11413db9a&o=",
    title: "Farm stays",
    desc: "11,526 farm stays",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450095.jpeg?k=cd5e46e632dab722d22217813485efde31fbe82f5f26a624166edccdbe8187bc&o=",
    title: "Boats",
    desc: "1,667 boats",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&o=",
    title: "Luxury tents",
    desc: "4,445 luxury tents",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450075.jpeg?k=d23cf8443780ac09f46f59e40393d75dbe64b06029b4959c60b81b7fdefc9be0&o=",
    title: "Self catering accommodation",
    desc: "838,285 self catering properties",
  },
  {
    image:
      "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57175023.jpeg?k=dc0319d4d64ded9ee4b0ddb162a2e80db7899300b7bf21b34506888895d74c79&o=",
    title: "Tiny houses",
    desc: "610 tiny houses",
  },
];
function appendSwipper2(data2) {
  data2.forEach((elem) => {
    let swiper_slider1 = document.createElement("div");
    swiper_slider1.setAttribute("class", "swiper-slide explore_slide_2");
    swiper_slider1.innerHTML = `
			  <div>
			  <img
			  src="${elem.image}"
			  alt=""
			  />
			  <h3>${elem.title}</h3>
			  <p>${elem.desc}</p>
		  </div>
  
	  `;
    document
      .querySelector(".mySwiper2 > .swiper-wrapper")
      .append(swiper_slider1);
  });
}

let swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 6,
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

let explore_india = [
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",
    title: "Goa",
    desc: "5,246 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
    title: "Mumbai",
    desc: "1,652 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    title: "New Delhi",
    desc: "2,914 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=",
    title: "Lonavala",
    desc: "751 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
    title: "Bangalore",
    desc: "2,040 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
    title: "Jaipur",
    desc: "1,562 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/684769.webp?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
    title: "Pondicherry",
    desc: "693 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
    title: "Udaipur",
    desc: "816 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=",
    title: "North Goa",
    desc: "3,905 properties",
  },
  {
    image:
      "https://t-cf.bstatic.com/xdata/images/city/square250/684653.webp?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=",
    title: "Hyderabad",
    desc: "797 properties",
  },
];

function appendSwipper1(data1) {
  data1.forEach((el) => {
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
      .querySelector(".mySwiper1 > .swiper-wrapper")
      .append(swiper_slider);
  });
}
/*-------------------swiper 3 from filght page-----------------*/

window.addEventListener("DOMContentLoaded", (event) => {
  appendSwipper2(property_type);
  appendSwipper1(explore_india);
});
