
let html = document.createElement("div");
document.body.appendChild(html);
// let myInput = document.querySelector("#my-input");
// let outPut = myInput.value;
// console.log(myInput)

let api = "https://api.covid19api.com/summary ";

fetch(api)
.then(response => {
    let data = response.json();
return data ;
})
.then(data => {
    
    // console.log(data.Countries)
    // console.log(data.Countries[186])

    html.innerHTML = `<div class="app" >

    <h1 class="main-text" >Thông tin Covid-19 </h1>

<h1 class="country-name" > Quốc gia :${data.Countries[186].Country}(${data.Countries[186].CountryCode}) </h1>
<p> Ngày  : ${data.Date}</p>
<p> Tổng số người mắc : ${data.Countries[186].TotalConfirmed} Người</p>

<p> Số người chết : ${data.Countries[186].TotalDeaths}  Người.</p>
<p> Ca mắc mới  : ${data.Countries[186].NewConfirmed} Ca . </p>
<p> Số người chết mới : ${data.Countries[186].NewDeaths} Người . </p>
<p> Số ca chữa khỏi : ${data.Countries[186].TotalRecovered} Ca .</p>
</div>`

})
.then(function(){
    getData();
})
function getData(){
  
}
