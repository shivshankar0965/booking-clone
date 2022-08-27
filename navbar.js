import navfunc from "./components/navbarC.js"
document.getElementById("top").innerHTML=navfunc()


let tab3=document.getElementById("tab3").addEventListener("click",tab2func)

function tab2func(){
   tab3.style.backgroundColor="red"

}


