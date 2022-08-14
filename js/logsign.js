
if(sessionStorage.getItem('emailexist')==1){
    document.getElementById("email_already_exist").innerHTML = "<label>*Email already exist</label>";
    document.getElementById("signup_email").style.border = "1px solid red";
    
    
}

if(sessionStorage.getItem('noemail')==1){
   document.getElementById("email_doesnot_exist").innerHTML = "<label>*Email does not exist</label>";
   document.getElementById("login_email").style.border = "1px solid red";
   
   
}

if(sessionStorage.getItem('wrongpass')==1){
     document.getElementById("password_notmatch").innerHTML = "<label>*Password does not match</label>";
     document.getElementById("login_password").style.border = "1px solid red";
     
     
}
sessionStorage.setItem('noemail','0');
sessionStorage.setItem('emailexist','0');
sessionStorage.setItem('wrongpass','0');
let currency_list = document.getElementById("currency");
for (x in allcurr) {
    currency_list.innerHTML = currency_list.innerHTML+"<option value='"+allcurr[x]["currency code"]+"'>"+allcurr[x]["currency code"] + " : " + allcurr[x]["currency name"]+"</option>";
}
   
    
 
    

function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(26, 168, 234), rgb(40, 78, 161));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";

};

function login()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(26, 217, 234), rgb(40, 78, 161));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";

}