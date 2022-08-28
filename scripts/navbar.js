import navfunc from "../components/navbarC.js";
document.getElementById("top").innerHTML = navfunc();

document.getElementById("sign_out").addEventListener("click",signoutFunc)

function signoutFunc(){
    localStorage.setItem("flag",false)
    window.location.reload()
}