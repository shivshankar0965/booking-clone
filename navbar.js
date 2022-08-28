import navfunc from "./components/navbarC.js"
document.getElementById("top").innerHTML=navfunc()

let btn=document.getElementById("tabs")
let btns=document.getElementsByClassName("btn")

document.getElementById("signout").addEventListener("click",signoutFunc)

// for(let i=0;i<btns.length;i++){
//    btns[i].addEventListener("click",function(){
//       let current=document.getElementsByClassName("active")
//       for(let j=0;j<btns.length;j++){
//          btns[j].classList.remove("active")
//       }
//       btns[i].classList.add("active")
//    })
// }



// let links=document.querySelectorAll("#tabs a").
// forEach(link=>{
// if(link.href.includes(`${activePage}`)){
// link.classList.add("active")
// }
// })


function signoutFunc(){
   localStorage.setItem("flag",false)
   location. reload() 
}