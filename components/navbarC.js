function navfunc() {
  return `<div id="navbar">
    <div>
     <h1>Booking.com</h1>
        <div>
            <h3>INR</h3>
<img src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png" alt="">
<i id="help" class="ri-question-line"></i>
<a  href="https://join.booking.com/?lang=en-gb&utm_source=topbar&utm_medium=frontend&amp;label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AoiwkpgGwAIB0gIkNzA2YmQ5MmItOWEzYi00ZGE5LWE3MmQtNGMxZmVlYjBmZTY02AIE4AIB&amp;aid=304142">List your property</a>
${dp()}
</div>
    </div>
    <div id=""tabs>
 <a href="../index.html" id="tab1" onclick="tab1func()"><i class="ri-hotel-bed-line"></i>Stays</a>
 <a href="../flight.html" id="tab2" onclick="tab2func()"><i class="ri-flight-takeoff-line"></i>Flights</a>
 <a href="#" id="tab3" onclick="tab3func()"><i class="ri-global-line" ></i>Flight + Hotel</a>
 <a href="../carrental.html" id="tab4" onclick="tab4func()"><i class="ri-car-line"></i>Car rentals</a>
 <a href="../attraction.html" id="tab5" onclick="tab5func()"><i class="ri-baidu-line"></i>Attractions</a>
 <a href="../airporttaxis.html" id="tab6" onclick="tab6func()"><i class="ri-taxi-line"></i>Airport taxis</a>
    </div>
</div>`;
}

let flag = JSON.parse(localStorage.getItem("flag")) || false;
console.log(flag);
function dp() {
  if (flag == false) {
    return `<div id="dp">
        <a class="bcWhite"  href="signIn.html">Register</a>
        <a class="bcWhite"  href="signIn.html">Sign in</a>
        </div>`;
  } else {
    return `<div id="dp">
<img style="width:30px ;border:2px solid rgb(254,187,2)" src="https://cf.bstatic.com/static/img/identity/profile/b47cd0e05ec8b7831167f4f7593ead56402a6bb4.svg" alt="" />
        <div style="line-height:15px;">
        <p><b>Your account</b></p>
        <p style="text-align:center;color:rgb(254,187,2);cursor: pointer;" id="sign_out">Sign out</p>
        </div>
     
        </div>`;
  }
}

export default navfunc;
