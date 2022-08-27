let covidPreventionBtn = document.querySelector(".covid_prevention");
covidPreventionBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  let panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});

/*--------number of seats and passangers numbers*/

let oneTothree = [
  {
    type: "Standard",
    model: "Skoda Octavia or similar",
    passangers: 3,
    bags: 2,
  },
  {
    type: "Executive",
    model: "Mercedes-Benz E-Class or similar",
    passangers: 3,
    bags: 2,
  },
];
let fourTofive = [
  {
    type: "People carrier",
    model: "Peugeot 5008 or similar",
    passangers: 5,
    bags: 5,
  },
  {
    type: "Executive people carrier",
    model: "Mercedes-Benz V-Class or similar",
    passangers: 6,
    bags: 6,
  },
  {
    type: "Large people carrier",
    model: "Ford Tourneo or similar",
    passangers: 7,
    bags: 7,
  },
];
let tabs_result_container = document.querySelector(".tabs_result_container");
let appendDetails = (data) => {
  if (data.length > 3) {
    tabs_result_container.style.gridTemplateColumns = `repeat(3, 1fr)`;
  } else {
    tabs_result_container.style.gridTemplateColumns = `repeat(${data.length}, 1fr)`;
  }

  data.forEach((el) => {
    let tabItems = document.createElement("div");
    tabItems.setAttribute("class", "tab_divs");
    tabItems.innerHTML = `
    
            <div class="tab_divs_heading">
            <h4>${el.type}</h4>
            <p>${el.model}</p>
          </div>
          <div class="tab_divs_contents">
            <p><i class="ri-user-fill"></i> ${el.passangers} passangers</p>
            <p><i class="ri-briefcase-4-fill"></i> ${el.bags} standard bags</p>
            <p>
              <i class="ri-checkbox-circle-line"></i> Meet & Greet included
            </p>
            <p><i class="ri-check-fill"></i> Free cancellation</p>
          </div>
          <button class="passangers_btns">Search</button>
    
    `;
    tabs_result_container.append(tabItems);
  });
};

let oneTOtowBtn = document.getElementById("1_3_passangers");
oneTOtowBtn.addEventListener("click", function () {
  tabs_result_container.innerHTML = null;
  this.classList.add("active2");
  document.getElementById("4_7_passangers").classList.remove("active2");
  document.getElementById("all_passangers").classList.remove("active2");
  appendDetails(oneTothree);
});
window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("1_3_passangers").classList.add("active2");
  appendDetails(oneTothree);
});

document
  .getElementById("4_7_passangers")
  .addEventListener("click", function () {
    tabs_result_container.innerHTML = null;
    this.classList.add("active2");
    document.getElementById("1_3_passangers").classList.remove("active2");
    document.getElementById("all_passangers").classList.remove("active2");
    appendDetails(fourTofive);
  });
document
  .getElementById("all_passangers")
  .addEventListener("click", function () {
    this.classList.add("active2");
    document.getElementById("4_7_passangers").classList.remove("active2");
    document.getElementById("1_3_passangers").classList.remove("active2");
    tabs_result_container.innerHTML = null;
    appendDetails([...oneTothree, ...fourTofive]);
  });

/*-------------faq part ------------*/
let questionDiv = document.querySelectorAll(".question_div");
let i;
let len = questionDiv.length;

for (i = 0; i < len; i++) {
  questionDiv[i].addEventListener("click", function () {
    this.classList.toggle("active3");
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
