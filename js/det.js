
var coin = sessionStorage.getItem("cointype");
coin = coin.replace(/ /g, "");
if(logstatus!="0"){
    var convert = logstatus;
}else{
var convert = "INR";
}
if (sessionStorage.getItem("currType")) {
    convert = sessionStorage.getItem("currType");
}
table_bool = true;
var one_d_vol = [];
var seven_d_vol = [];
var thirty_d_vol = [];
var yr_vol = [];
var ytd_vol = [];
var mainData = [];
var currencydata = [];
var bool = false;
var boolcurrency = false;
var current_price;
var labels = [];
var onehrarray = [];
var onedarray = [];
var sevendarray = [];
var thirtydarray = [];
var oneyrarray = [];
var threeyrarray = [];
const logo = document.getElementById("logo");//done
const currency = document.getElementById("coin_price");
const name = document.getElementById("coin_name");//done
const token = document.getElementById("token");//done
const volume = document.getElementById("vol");//done
const volume1d = document.getElementById("vol1d");//done
const volume7d = document.getElementById("vol7d");//done
const volume30d = document.getElementById("vol30d");//done
const volume365d = document.getElementById("vol365d");//done
const market_cap = document.getElementById("market_cap");//done
var high24 = document.getElementById("high24");//done
var low24 = document.getElementById("low24");//done
// var highperc = document.getElementById("highperc");//done
const rank = document.getElementById("rank");//done
const circulating = document.getElementById("circulating");//done
const maxsup = document.getElementById("maxsup");//done
let currencywrapper = document.querySelector(".userinput");
let currencyinputBox = currencywrapper.querySelector("input");
let currencysuggBox = currencywrapper.querySelector(".rcm");
let wrapper = document.querySelector(".textinput");
let inputBox = wrapper.querySelector("input");
let suggBox = wrapper.querySelector(".recom");
for (x in allcurr) {
    currencydata.push(allcurr[x]["currency code"] + ":" + allcurr[x]["currency name"]);
}
currencyinputBox.onkeyup = (e) => {
    let userData = e.target.value;
            userData = userData.toLocaleLowerCase();
            let anArray = [];
            if (userData) {
                anArray = currencydata.filter((data) => {
                    let temprary = data.toLocaleLowerCase();
                    temprary = temprary.includes(userData);
                    return temprary;
                });
        anArray = anArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        currencywrapper.classList.add("active");
        showcurrSugg(anArray);
        let allList = currencysuggBox.querySelectorAll("li");
        for (var i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "currencyeffect(this)");
        }
    }
    else {
        currencywrapper.classList.remove("active");
    }
}

///////////////////////////////////////////////////coin and currency declare////////////////////////////////////////////////////////
drop_urlist = "https://api.nomics.com/v1/currencies/ticker?key=62da6f10116c0b7113ded736960e81697da09e14&convert=" + convert + "&per-page=100&page=1";
live_urlist = "https://api.nomics.com/v1/currencies/ticker?key=62da6f10116c0b7113ded736960e81697da09e14&ids=" + coin + "&interval=1h,1d,7d,30d,365d,ytd&convert=" + convert + "&per-page=100&page=1";
graph1hr_urlist = "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=" + coin + "&market=" + convert + "&interval=1min&outputsize=full&apikey=DYI3039NIRJHFS71";
graph1d_urlist = "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=" + coin + "&market=" + convert + "&interval=5min&outputsize=full&apikey=DYI3039NIRJHFS71";
graph7d_urlist = "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=" + coin + "&market=" + convert + "&interval=15min&outputsize=full&apikey=DYI3039NIRJHFS71";
graph1m_urlist = "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=" + coin + "&market=" + convert + "&interval=60min&outputsize=full&apikey=DYI3039NIRJHFS71";
graph1yr_urlist = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=" + coin + "&market=" + convert + "&apikey=DYI3039NIRJHFS71";
fetch(drop_urlist)
    .then(response => response.json())
    .then(data => {
        for (let x in data) {
            mainData.push(data[x].name + ":" + data[x].id);
        }
        inputBox.onkeyup = (e) => {
            let userData = e.target.value;
            userData = userData.toLocaleLowerCase();
            let anArray = [];
            if (userData) {
                anArray = mainData.filter((data) => {
                    let temprary = data.toLocaleLowerCase();
                    temprary = temprary.includes(userData);
                    return temprary;
                });
                anArray = anArray.map((data) => {
                    return data = '<li>' + data + '</li>';
                });
                wrapper.classList.add("active");
                showcoinSugg(anArray);
                let allList = suggBox.querySelectorAll("li");
                for (var i = 0; i < allList.length; i++) {
                    allList[i].setAttribute("onclick", "effectcoin(this)");
                }
            }
            else {
                wrapper.classList.remove("active");
            }
        }
        function showcoinSugg(list) {
            let listData;
            if (!list.length) {
                listData = '<li>Cryptocurrency not found</li>';
                bool = false;

            }
            else {
                listData = list.join('');
                bool = true;
            }
            suggBox.innerHTML = listData;
        }
    })
var data =
{
    labels: [],
    datasets:
        [{
            yAxisID: 'yAxis',
            xAxisID: 'xAxis',
            label: "Month",
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgb(255, 0, 0)',
            data: [],
            tension: 0,
            fill: true,

        }]
};
var config =
{
    type: 'line',
    data: data,
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            axis: 'x'
        },
        legend: {
            labels: {
                fontColor: 'white',
                color: 'white'
            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            xAxis: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                    color: 'white'
                }

            },
            yAxis: {
                grid: {
                    color: 'white'
                },
                ticks: {
                    color: 'white'
                }

            }
        }
    }
};

var myChart1 = new Chart(document.getElementById('myChart1').getContext("2d"), config);
setTimeout(upd, 2000);

var datasecond =
{
    labels: [],
    datasets:
        [{
            yAxisID: 'yAxis',
            xAxisID: 'xAxis',
            label: "Month",
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgb(255, 0, 0)',
            data: [],
            tension: 0,
            fill: true,

        }]
};
var configsecond =
{
    type: 'line',
    data: datasecond,
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            axis: 'x'
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        elements: {
            point: {
                radius: 1
            }
        },
        scales: {
            xAxis: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                }

            },
            yAxis: {
                grid: {
                    color: 'white'
                },
                ticks: {
                    color: 'white'
                }

            }
        }
    }
};

var myChart2 = new Chart(document.getElementById('myChart2').getContext("2d"), configsecond);

/////////////////////////////////////////////////////first graph update and live data////////////////////////////////////////////
function upd() {
    let today = new Date();
    fetch(live_urlist)
        .then(response => response.json())
        .then(data => {

            currtime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let tempval = data[0].price;
            currency.innerHTML = parseFloat(tempval).toFixed(5)+" <small>"+convert+"</small>";
            current_price = 1 / tempval;
            logo.setAttribute("src", data[0].logo_url);
            name.innerHTML = data[0].name+" <small>"+data[0].id+"</small>";
            rank.innerHTML = "RANK: " + data[0].rank;
            volume.innerHTML = data[0]["1h"].price_change_pct+" %";
            one_d_vol = [];
            seven_d_vol = [];
            thirty_d_vol = [];
            yr_vol = [];
            ytd_vol = [];
            one_d_vol.push(data[0]["1d"]);
            seven_d_vol.push(data[0]["7d"]);
            thirty_d_vol.push(data[0]["30d"]);
            yr_vol.push(data[0]["365d"]);
            ytd_vol.push(data[0]["ytd"]);
            if(table_bool){
            document.getElementById("table_name").innerHTML = "1 Day Change :";
            document.getElementById("t_volume").innerHTML = one_d_vol[0].volume;
            document.getElementById("price_change").innerHTML = one_d_vol[0].price_change;
            document.getElementById("p_c_p").innerHTML = one_d_vol[0].price_change_pct+" %";
            document.getElementById("vol_change").innerHTML = one_d_vol[0].volume_change;
            document.getElementById("v_c_p").innerHTML = one_d_vol[0].volume_change_pct+" %";
            document.getElementById("m_c_c").innerHTML = one_d_vol[0].market_cap_change;
            document.getElementById("m_c_c_p").innerHTML = one_d_vol[0].market_cap_change_pct+" %";
            table_bool = false;
            }
            // highperc.innerHTML =data[0]["1h"].volume;
            market_cap.innerHTML = data[0].market_cap+" <small>"+convert+"</small>" ;
            circulating.innerHTML = data[0].circulating_supply;
            numexchanges.innerHTML = data[0].num_exchanges;
            maxsup.innerHTML = data[0].max_supply;
            if(today.getHours()>12){
                myChart1.data.labels.push(currtime + " PM");
            }else{
                myChart1.data.labels.push(currtime + "AM");
            } 
            myChart1.data.datasets.forEach((dataset) => {
                dataset.data.push(data[0].price);
                dataset.label = data[0].id;
            });
        })
        .catch(error => console.log(error))
    myChart1.update();
}

////////////////////////////////////////////////////////////////////////////////////////////////////
function onehrinsert() {
    fetch(graph1hr_urlist)
        .then(response => response.json())
        .then(datap => {
            console.log(datap);
            let arrtmp = [];
            let arrtime = Object.keys(datap["Time Series Crypto (1min)"]);
            onehrarray.push(arrtime.reverse().slice(arrtime.length - 100, arrtime.length));
            for (var i = 0; i < arrtime.length; i++) {
                arrtmp.push(datap["Time Series Crypto (1min)"][arrtime[i]]["1. open"]);
            }
            onehrarray.push(arrtmp.slice(arrtmp.length - 100, arrtmp.length));//////////////////////////
            arrtmp = [];
            arrtime = [];
            arrtime = Object.keys(datap["Time Series Crypto (1min)"]);
            onedarray.push(arrtime.reverse());
            for (var i = 0; i < arrtime.length; i++) {
                arrtmp.push(datap["Time Series Crypto (1min)"][arrtime[i]]["1. open"]);
            }
            onedarray.push(arrtmp);

        })
        .catch(error => console.log(error));
}

///////////////////////////////////////////////////second graph update////////////////////////////////////////////////

// function onedinsert() {
//     fetch(graph1hr_urlist)
//         .then(response => response.json())
//         .then(datap => {
//             console.log(datap);
//             let arrtmp = [];
//             let arrtime = Object.keys(datap["Time Series Crypto (1min)"]);
//             onedarray.push(arrtime.reverse());
//             for (var i = 0; i < arrtime.length; i++) {
//                 arrtmp.push(datap["Time Series Crypto (1min)"][arrtime[i]]["1. open"]);
//             }
//             onedarray.push(arrtmp);
//         })
//         .catch(error => console.log(error));
// }

// /////////////////////////////////////////////////third graph updaqte//////////////////////////////////////////////
function sevendinsert() {
    fetch(graph7d_urlist)
        .then(response => response.json())
        .then(datap => {
            console.log(datap);
            let arrtmp = [];
            let arrtime = Object.keys(datap["Time Series Crypto (15min)"]);
            sevendarray.push(arrtime.reverse());
            for (var i = 0; i < arrtime.length; i++) {
                arrtmp.push(datap["Time Series Crypto (15min)"][arrtime[i]]["1. open"]);
            }
            sevendarray.push(arrtmp);
        })
        .catch(error => console.log(error));
}

// ////////////////////////////////////////////////fourth graph update////////////////////////////////////////////
function thirtydinsert() {
    fetch(graph1m_urlist)
        .then(response => response.json())
        .then(datap => {
            console.log(datap);
            let arrtmp = [];
            let arrtime = Object.keys(datap["Time Series Crypto (60min)"]);
            thirtydarray.push(arrtime.reverse());
            for (var i = 0; i < arrtime.length; i++) {
                arrtmp.push(datap["Time Series Crypto (60min)"][arrtime[i]]["1. open"]);
            }
            thirtydarray.push(arrtmp);
        })
        .catch(error => console.log(error));
}

// //////////////////////////////////////////////fifth graph update//////////////////////////////////////////////
function oneyrinsert() {
    fetch(graph1yr_urlist)
        .then(response => response.json())
        .then(datap => {
            console.log(datap);
            let arrtmp = [];
            let arrtime = Object.keys(datap["Time Series (Digital Currency Daily)"]);
            let highval = datap["Time Series (Digital Currency Daily)"][arrtime[0]]["2a. high (" + convert + ")"];
             high24.innerHTML = parseFloat(highval).toFixed(4)+" <small>"+convert+"</small>";
            let lowval = datap["Time Series (Digital Currency Daily)"][arrtime[0]]["3a. low (" + convert + ")"];
            low24.innerHTML = parseFloat(lowval).toFixed(4)+" <small>"+convert+"</small>";
            const half = Math.ceil(arrtime.length / 2);
            oneyrarray.push(arrtime.reverse().slice(-half));
            for (var i = 0; i < arrtime.length; i++) {
                arrtmp.push(datap["Time Series (Digital Currency Daily)"][arrtime[i]]["1a. open (" + convert + ")"]);
            }
            oneyrarray.push(arrtmp.slice(-half));
        })
        .catch(error => console.log(error));
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showcurrSugg(list) {
    let listData;
    if (!list.length) {
        listData = '<li>Currency type not found</li>';
        boolcurrency = false;

    }
    else {
        listData = list.join('');
        boolcurrency = true;
    }
    currencysuggBox.innerHTML = listData;
}

function currencyeffect(element) {
    currencyinputBox.value = element.textContent;
    currencywrapper.classList.remove("active");
}

///////////////////////////////////////////DOM/////////////////////////////////////////
function changeGraph(value) {
    let liveChart1 = document.getElementById("myChart1");
    let staticChart2 = document.getElementById("myChart2");
    switch (value) {
        case "live":
            liveChart1.style.visibility = "visible";
            staticChart2.style.visibility = "hidden";
            break;
        case "1hr":
            liveChart1.style.visibility = "hidden";
            staticChart2.style.visibility = "visible";
            myChart2.data.datasets[0].data = [];
            myChart2.data.labels = [];
            myChart2.data.datasets[0].data = onehrarray[1];
            myChart2.data.labels = onehrarray[0];
            myChart2.update();
            break;
        case "1d":
            liveChart1.style.visibility = "hidden";
            staticChart2.style.visibility = "visible";
            myChart2.data.datasets[0].data = [];
            myChart2.data.labels = [];
            myChart2.data.datasets[0].data = onedarray[1];
            myChart2.data.labels = onedarray[0];
            myChart2.update();
            break;
        case "7d":
            liveChart1.style.visibility = "hidden";
            staticChart2.style.visibility = "visible";
            myChart2.data.datasets[0].data = [];
            myChart2.data.labels = [];
            myChart2.data.datasets[0].data = sevendarray[1];
            myChart2.data.labels = sevendarray[0];
            myChart2.update();

            break;
        case "30d":
            liveChart1.style.visibility = "hidden";
            staticChart2.style.visibility = "visible";
            myChart2.data.datasets[0].data = [];
            myChart2.data.labels = [];
            myChart2.data.datasets[0].data = thirtydarray[1];
            myChart2.data.labels = thirtydarray[0];
            myChart2.update();
            break;
        case "1yr":
            liveChart1.style.visibility = "hidden";
            staticChart2.style.visibility = "visible";
            myChart2.data.datasets[0].data = [];
            myChart2.data.labels = [];
            myChart2.data.datasets[0].data = oneyrarray[1];
            myChart2.data.labels = oneyrarray[0];
            myChart2.update();
            break;
    }

}
function go(){
    if(boolcurrency)
    {
        let inputData = document.getElementById("coin_n").value.toLocaleLowerCase();
        for (let x = 0;x< currencydata.length;x++){
            let temp = currencydata[x].toLocaleLowerCase();
            if(temp.includes(inputData)){
            sessionStorage.setItem("currType",currencydata[x].split(":")[0]);
            window.location.href = "detail.php";
            break;      
            }else{
                console.log("currency not found");
            }
        }
        
    }   
}
function cnvcurrency() {
    var temp = document.getElementById('cnvinput').value;
    document.getElementById('cnvans').innerHTML = temp * current_price + "&nbsp;&nbsp;" + coin;
}



function addwatchlist() {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "../php/setwatchlist.php?get_coin=" + coin + "&get_name=" + mailname, true);
    xhttp.send();
}

function remove(value) {
    document.getElementById("formdata").value = value;
    document.getElementById("removedat").submit();

}
function search_dropdown() {
    console.log(search_bar.style.visibility);
    if (search_bar.style.visibility == "visible") {
        search_bar.style.visibility = "hidden";
    } else {
        search_bar.style.visibility = "visible";
    }
}
function effectcoin(element) {
    document.querySelector("input").value = element.textContent;
    document.querySelector(".textinput").classList.remove("active");

}
function redirect() {
   if(bool)
    {
        let inputData = document.getElementById("coininput").value.toLocaleLowerCase();
        for (let x = 0;x< mainData.length;x++){
            let temp = mainData[x].toLocaleLowerCase();
            if(temp.includes(inputData)){
            sessionStorage.setItem("cointype",mainData[x].split(":")[1]);
            window.location.href = "detail.php";
            break;      
            }else{
                console.log("crypto not found");
            }
        }
        
    }   
}

function select_table(value){
    if(value==1){
        document.getElementById("table_name").innerHTML = "1 Day Change :";
        document.getElementById("t_volume").innerHTML = one_d_vol[0].volume;
        document.getElementById("price_change").innerHTML = one_d_vol[0].price_change;
        document.getElementById("p_c_p").innerHTML = one_d_vol[0].price_change_pct+" %";
        document.getElementById("vol_change").innerHTML = one_d_vol[0].volume_change;
        document.getElementById("v_c_p").innerHTML = one_d_vol[0].volume_change_pct+" %";
        document.getElementById("m_c_c").innerHTML = one_d_vol[0].market_cap_change;
        document.getElementById("m_c_c_p").innerHTML = one_d_vol[0].market_cap_change_pct+" %";
    }
    if(value==7){
        document.getElementById("table_name").innerHTML = "7 Day Change :";
        document.getElementById("t_volume").innerHTML = seven_d_vol[0].volume;
        document.getElementById("price_change").innerHTML = seven_d_vol[0].price_change;
        document.getElementById("p_c_p").innerHTML = seven_d_vol[0].price_change_pct+" %";
        document.getElementById("vol_change").innerHTML = seven_d_vol[0].volume_change;
        document.getElementById("v_c_p").innerHTML = seven_d_vol[0].volume_change_pct+" %";
        document.getElementById("m_c_c").innerHTML = seven_d_vol[0].market_cap_change;
        document.getElementById("m_c_c_p").innerHTML = seven_d_vol[0].market_cap_change_pct+" %";
    }
    if(value==30){
        document.getElementById("table_name").innerHTML = "30 Day Change :";
        document.getElementById("t_volume").innerHTML = thirty_d_vol[0].volume;
        document.getElementById("price_change").innerHTML = thirty_d_vol[0].price_change;
        document.getElementById("p_c_p").innerHTML = thirty_d_vol[0].price_change_pct+" %";
        document.getElementById("vol_change").innerHTML = thirty_d_vol[0].volume_change;
        document.getElementById("v_c_p").innerHTML = thirty_d_vol[0].volume_change_pct+" %";
        document.getElementById("m_c_c").innerHTML = thirty_d_vol[0].market_cap_change;
        document.getElementById("m_c_c_p").innerHTML = thirty_d_vol[0].market_cap_change_pct+" %";
    }
    if(value==365){
        document.getElementById("table_name").innerHTML = "1 Year Change :";
        document.getElementById("t_volume").innerHTML = yr_vol[0].volume;
        document.getElementById("price_change").innerHTML = yr_vol[0].price_change;
        document.getElementById("p_c_p").innerHTML = yr_vol[0].price_change_pct+" %";
        document.getElementById("vol_change").innerHTML = yr_vol[0].volume_change;
        document.getElementById("v_c_p").innerHTML = yr_vol[0].volume_change_pct+" %";
        document.getElementById("m_c_c").innerHTML = yr_vol[0].market_cap_change;
        document.getElementById("m_c_c_p").innerHTML = yr_vol[0].market_cap_change_pct+" %";
    }
    if(value==999){
        document.getElementById("table_name").innerHTML = "YTD Change :";
        document.getElementById("t_volume").innerHTML = ytd_vol[0].volume;
        document.getElementById("price_change").innerHTML = ytd_vol[0].price_change;
        document.getElementById("p_c_p").innerHTML = ytd_vol[0].price_change_pct+" %";
        document.getElementById("vol_change").innerHTML = ytd_vol[0].volume_change;
        document.getElementById("v_c_p").innerHTML = ytd_vol[0].volume_change_pct+" %";
        document.getElementById("m_c_c").innerHTML = ytd_vol[0].market_cap_change;
        document.getElementById("m_c_c_p").innerHTML = ytd_vol[0].market_cap_change_pct+" %";
    }
   
}
setTimeout(oneyrinsert, 2000);
setTimeout(onehrinsert, 2000);
setTimeout(sevendinsert, 2000);
setTimeout(thirtydinsert, 2000);
setInterval(upd, 10000);