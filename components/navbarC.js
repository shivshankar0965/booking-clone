function navfunc(){
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
 <a href="" id="tab1" class="active btn"><i class="ri-hotel-bed-line"></i>Stays</a>
 <a href="" id="tab2"  class="btn"><i class="ri-flight-takeoff-line"></i>Flights</a>
 <a href="" id="tab3"  class="btn"><i class="ri-global-line" ></i>Flight + Hotel</a>
 <a href="" id="tab4"  class="btn"><i class="ri-car-line"></i>Car rentals</a>
 <a href="" id="tab5"  class="btn"><i class="ri-baidu-line"></i>Attractions</a>
 <a href="" id="tab6"  class="btn"><i class="ri-taxi-line"></i>Airport taxis</a>
    </div>
</div>`
}

let flag=JSON.parse(localStorage.getItem("flag"))||false
console.log(flag)
function dp(){ 
    if(flag==false){
        return `<div id="dp">
        <a class="bcWhite"  href="signIn.html">Register</a>
        <a class="bcWhite"  href="signIn.html">Sign in</a>
        </div>`
    }else{
        return`<div id="dp">
<img style="width:30px ;border:2px solid rgb(254,187,2)" src="https://cf.bstatic.com/static/img/identity/profile/b47cd0e05ec8b7831167f4f7593ead56402a6bb4.svg" alt="" />
        <div>
        <p style="line-height:0px"><b>Your account</b></p>
        <p  style="line-height:5px;text-align:center;color:rgb(254,187,2);cursor: pointer;" id="signout">Sign out</p>
        </div>
     
        </div>`
    }
}

export default navfunc

{/* <div id="dp">
<a class="bcWhite"  href="signIn.html">Register</a>
<a class="bcWhite"  href="signIn.html">Sign in</a>
</div> */}