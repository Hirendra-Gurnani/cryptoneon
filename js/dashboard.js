if(logstatus!="0"){
    var convert = logstatus;
}else{
var convert = "INR";
} 
let mainData = [];
var bool = false;
var search_bar = document.getElementById("search_bar");
const table = document.getElementById("table_block");
let wrapper = document.querySelector(".textinput");
let inputBox = wrapper.querySelector("input");
let suggBox = wrapper.querySelector(".recom");
const userapilist="https://api.nomics.com/v1/currencies/ticker?key=62da6f10116c0b7113ded736960e81697da09e14&convert="+convert+"&per-page=100&page=1";
fetch(userapilist)
.then(response => response.json())
.then(data => {
		for(var x=0;x<data.length;x++){
			for(var y=0;y<arr.length;y++){
				if(data[x].id==arr[y][0]){	
					table.innerHTML = table.innerHTML+"<tr><td><i title='Delete this record' class='far fa-trash-alt' onclick='remove(\""+data[x].id+"\")' ></i></td><td><img src='"+data[x].logo_url+"' height=50 width=50 onclick='redirect(\""+data[x].id+"\")'></img>&emsp;<strong onclick='redirect(\""+data[x].id+"\")'>"+ data[x].name+"<strong><small> ("+data[x].id+") </td> <td id='"+data[x].id+"'> "+ parseFloat(data[x].price).toFixed(3)+" <small>"+convert+"</small></td><td>"+arr[y][1]+"</td><td><form class='aler' method = 'POST' action = '../php/setalert.php'><input name='value' type='number' /><input type='hidden' name='coin' value='"+data[x].id+"'><button type='submit' name='submit'><i class='fas fa-chevron-circle-right'></i></button></form></td></tr>";
				}
			}
		}
		for (let x in data)
		{
			mainData.push(data[x].name+":"+data[x].id);
		}
		
		inputBox.onkeyup = (e)=>
		{
			let userData = e.target.value;
			userData = userData.toLocaleLowerCase();
			let anArray = [];
			if (userData)
			{
				anArray = mainData.filter((data)=>
				{
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
				listData = '<li>Cryptocurrency not found</li>';
				bool = false;

			}
			else
			{
				listData = list.join('');
				bool = true;
			}
			suggBox.innerHTML = listData;
		}
})
function search_dropdown(){
	console.log(search_bar.style.visibility);
	if(search_bar.style.visibility == "visible"){
		search_bar.style.visibility = "hidden";
	}else{
		search_bar.style.visibility = "visible";
	}
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


function fetchlist(){
	fetch(userapilist)
.then(response => response.json())
.then(data => {
	for(var x=0;x<data.length;x++){
			for(var y=0;y<arr.length;y++){
				if(data[x].id==arr[y][0]){
					document.getElementById(data[x].id).innerHTML = parseFloat(data[x].price).toFixed(3) + " <small>"+convert+"</small>";
				}
			}
		}
	})
}
setInterval(fetchlist,10000);
function remove(value){
	document.getElementById("formdata").value = value;
	document.getElementById("removedat").submit();	

}

function redirect(value){
	sessionStorage.setItem("cointype",value);
	window.location.href="../html/detail.php";
}