// V1.0.0
setInterval(() => {
if(document.getElementById("logoutButton")){
document.getElementById("logoutButton").click();
} }, 1000);

setInterval(() => {
if(document.getElementById("loginButton")){
document.getElementById("registerButton").click();
} }, 3000);

setInterval(function() { 
var Username= document.getElementById("username");
var l = 8, s = ""; for(i = l; i --> 0;) { t = Math.floor(Math.random() * 62);
s += String.fromCharCode(t < 10 ? 48 + t : t < 36 ? 55 + t : 61 + t); } 
Username.value = s; 
var email= document.getElementById("registerEmail");
var l = 8, s = ""; for(i = l; i --> 0;) { t = Math.floor(Math.random() * 62);
s += String.fromCharCode(t < 10 ? 48 + t : t < 36 ? 55 + t : 61 + t); } 
email.value = s + '@gmail.com'; 
document.getElementById("registerConfirmPassword").value = "HelloWorld";
document.getElementById("registerPassword").value = "HelloWorld";
document.getElementById("formRegisterButton").click();
}, 1000);

