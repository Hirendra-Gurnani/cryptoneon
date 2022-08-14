let mainData = [];
var bool = false;
var stringdata= "";
var randomdata = "";
if(logstatus!="0"){
	var currency = logstatus;
}else{
var currency = "INR";
}
rand = Math.floor(Math.random() * 60) + 20;
const randomlist="https://api.nomics.com/v1/currencies/ticker?key=62da6f10116c0b7113ded736960e81697da09e14&convert="+currency+"&per-page=100&page="+rand;
const api_urlist = "https://api.nomics.com/v1/currencies/ticker?key=62da6f10116c0b7113ded736960e81697da09e14&convert="+currency+"&per-page=100&page=1"
randomdat();
setTimeout(fetchapi,2000);
setInterval(randomdat,7000);
function randomdat(){
	fetch(randomlist)
	.then(response => response.json())
	.then(data => {
		for (var i = 0; i < 30; i++) {
	    stringdata = stringdata+"<strong>"+data[i].name+"("+data[i].id+") "+"</strong>"+data[i].price+" <small>"+currency+"</small><strong>&emsp; |&emsp; </strong>";
		}
		document.getElementById("scrollingdata").innerHTML = stringdata;
		
	});
}

function fetchapi(){
fetch(api_urlist)
.then(response => response.json())
.then(data => 
	{	
		randomdata = "<tr><th colspan='2'>Top 10 Crytpos List </th></tr>";
	for (var i = 0; i < 10; i++) {
		    randomdata = randomdata+"<tr><td><strong>"+data[i].name+" ("+data[i].id+")"+"</strong></td><td>"+data[i].price+" <small>"+currency+"</small></td></tr>"
			}
			document.getElementById("randomiser").innerHTML = randomdata;
		for (let x in data)
		{
			mainData.push(data[x].name+":"+data[x].id);
		}
		let wrapper = document.querySelector(".textinput");
		let inputBox = wrapper.querySelector("input");
		let suggBox = wrapper.querySelector(".recom");
		inputBox.onkeyup = (e)=>
		{
			let userData = e.target.value;
			userData = userData.toLocaleLowerCase();
			let anArray = [];
			let count = 0;
			if (userData)
			{
				anArray = mainData.filter((data)=>
				{
					// let temprary = data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
					let temprary = data.toLocaleLowerCase();
					temprary = temprary.includes(userData);
					return temprary;
				});
				anArray = anArray.map((data)=>
				{
					return data = '<li>' + data + '</li>';
				});
				wrapper.classList.add("active");
				showSugg(anArray);
				let allList = suggBox.querySelectorAll("li");
				for (var i = 0; i < allList.length; i++)
				{
						allList[i].setAttribute("onclick","effect(this)");
				}
			}
			else
			{
				wrapper.classList.remove("active");
			}
		}
		function showSugg(list)
		{
			let listData;
			if (!list.length)
			{
				listData = '<li> Cryptocurrency not found <br> Recheck Cryptoname </li>';
				bool = false;

			}
			else
			{
				listData = list.join('');
				bool = true;
			}
			suggBox.innerHTML = listData;
		}
	});
}
function effect(element){
	document.querySelector("input").value = element.textContent;
	document.querySelector(".textinput").classList.remove("active");

}

function go(){
	if(bool)
	{
		let inputData = document.querySelector("input").value.toLocaleLowerCase();
		for (let x = 0;x< mainData.length;x++){
			let temp = mainData[x].toLocaleLowerCase();
			if(temp.includes(inputData)){
			sessionStorage.setItem("cointype",mainData[x].split(":")[1]);
			window.location.href = "detail.php";
			break;		
			}else{
				console.log("coin not found");
			}
		}
		
	}	
}

function logout(value){
	if(value == "lgt"){
		sessionStorage.loggedemail = "";
		sessionStorage.loggedname = "";
		window.location.href = "../html/homepage.html";

	}
	if(value == "lgin"){
		window.location.href = "../html/loginpage.html";
	}
	if(value == "dash"){
		window.location.href = "../html/dashboard.html";
	}
}

function ape() {
	var x = document.getElementsByClassName("fab");
	if ((  x[0].style.visibility 
		&& x[1].style.visibility 
		&& x[2].style.visibility 
		&& x[3].style.visibility
		&& x[4].style.visibility
		&& x[5].style.visibility
		&& x[6].style.visibility
		&& x[7].style.visibility) === "visible") {
	  for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "visible";
	  }
	} else {
	for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "visible";
	  }
	}
  }