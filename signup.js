

function register() {
    e.preventDefault();
    let userData_arr = localStorage.getItem(JSON.parse(userData_arr)) || [] ;
    let userData = {
        firstName : document.getElementById("firstName").value,
        lastName : document.getElementById("lastName").value,
        mobile : document.getElementById("mobile").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    }
    userData.push(userData_arr);
    console.log(userData)
    localStorage.setItem(JSON.stringify(userData_arr));

}