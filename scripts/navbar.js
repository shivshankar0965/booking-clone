import navfunc from "../components/navbarC.js";
document.getElementById("top").innerHTML = navfunc();

document.getElementById("signout").addEventListener("click", signoutFunc);
function signoutFunc() {
  localStorage.setItem("flag", false);
  location.reload();
}
