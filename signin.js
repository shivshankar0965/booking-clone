let loginData=JSON.parse( localStorage.getItem("loginData"))||{}
let error=""

function loginFunc(){
   
let {myemail}=loginData
let email=document.getElementById("email").value
if(email==myemail&&email){
    error.innerText=""
    window.location.href="./signInpass.html"
    
}else if(email.includes("@")&&email.includes(".com")){
    error.innerText=""
    loginData.myemail=email
    localStorage.setItem("loginData",JSON.stringify(loginData))
    window.location.href="./signuppass.html"
    
    
}else{
    error= document.getElementById("error")
   error.innerText="Please check if the email address you've entered is correct."
   error.style.color="rgb(216,64,64)"
}
}


let error1=""
let error2=""

function createFunc(){
   let pass1=document.getElementById("password").value
   let pass2=document.getElementById("confirm").value

   if(pass1==pass2&&pass1.length>9&&pass1 !== pass1.toLowerCase()){
    loginData.password=pass1
    error1.innerText=""
    error2.innerText=""
    localStorage.setItem("loginData",JSON.stringify(loginData))
        window.location.href="./nav&footer.html"
   }else{
   error1=document.getElementById("error1")
   error2=document.getElementById("error2")
   let a
  if(pass1!==pass2){
    a=true
    error2.innerText="The passwords you entered did not match, please try again"
}
if(pass1.length<=9){
    if(!a){
        error2.innerText=""
    }
    error1.innerText="Your password must be at least 10 characters"
}else if(pass1 == pass1.toLowerCase()){
    if(!a){
        error2.innerText=""
    }
    error1.innerText="Your password must include at least one uppercase letter"

}
   }
    
}


let {myemail}=loginData
document.getElementById("emailspace").innerText=myemail


let checkLogin=()=>{
let {password}=JSON.parse( localStorage.getItem("loginData"))||{}
let mypass=document.getElementById("password").value

if(mypass!=password){
  let error4=document.getElementById("error4")
  error4.innerText="The email and password combination you entered doesn't match"
  error4.style.color="rgb(216,64,64)"
}else{
    error4.innerText=""
    window.location.href="./nav&footer.html"
}
    
}