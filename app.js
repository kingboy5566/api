// var card = document.querySelector('#card')
// var btn = document.querySelector('#btn')
// var searchinp = document.getElementById("search").value

//   fetch("https://restcountries.com/v3.1/all")
 
//  .then(function(data){
//     return data.json()
// })

// .then((data)=>{
//     console.log(data)  
// })
// .catch((data)=>{
//     console.log(data)
// });


// function search(e){

// fetch("https://restcountries.com/v3.1/all")
// console.log(data[0]);
// document.write(data[0]);
//     var searchinp = document.getElementById("search").value
//     if(fetchdata){
//  document.write(data[0]);
// console.log();
//     }
//     var card = document.querySelector('#card')
//     var li = document.createElement('li')
// fetch("https://restcountries.com/v3.1/all")
// .then((response)=>{
//     return response.json()
// })

// .then((data)=>{
//     card.innerText = data[0].capital
//     card.innerText = data[1].capital
//     card.appendChild(li)
    
// })


// .catch((data)=>{
//     alert("enter right contry")
    

// btn.addEventListener("click", search);

//'Chișinău'] Yaren



async function fetchData(){
    var input = document.getElementById("searchInput").value
    if (!input){
        alert("enter your country name.");
        return
    }
    try {
        var response = await fetch(`https://restcountries.com/v3.1/name/${input}`);
        var data = await response.json();
        if(data.status === 404){
            alert("contry name not found")
            return
        }
var country = data[0];
var datails =`<h2> ${country.name.common}</h2>

<P> Capital : ${country.capital}</p>
<P> Population : ${country.population}</p>
<P> area : ${country.area}</p>

<P> flage : <img src="${country.flags.png}" alt"${country.name.common} Flag" style ="max-width:200px";</p>
 
`

document.getElementById("country data").innerHTML = datails;

    } catch(error){
        alert("error fetching data. plase try agen");
    }
   
}
function opencountrypage(){
    var countryName = document.getElementById("searchInput").value
    if(!countryName){
        alert("plase enter your country name");
        return
    }
    window.open(`https://restcountries.com/v3.1/name/${countryName}`,"-blank")
}




