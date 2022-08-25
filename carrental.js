/*-------swiper setting-------*/

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*------faq questins tab--------------*/
let questionDiv = document.querySelectorAll(".question_div");
let i;
let len = questionDiv.length;

for (i = 0; i < len; i++) {
  questionDiv[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
let questionItem = document.querySelectorAll(".question_item");
questionItem[questionItem.length - 1].style.borderBottom = "none";

// fetching the data from api

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f5ff8f3b73msh66d41967f11035cp14257djsn62fcad3d29ae",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

fetch(
  "https://booking-com.p.rapidapi.com/v1/car-rental/locations?name=london&locale=en-gb",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
