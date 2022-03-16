const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data) )
}
const displayCountries=countries=>{
    //console.log(countries)
const CountriesHTML=countries.map(country=>getCountryHTML(country))
//console.log(CountriesHTML[0]);
const container=document.getElementById('countries');
container.innerHTML=CountriesHTML.join('')
}


//option 2
const getCountryHTML=({name,flags,area})=>{
    return `
    <div class="country">
     <h2>${name.common}</h2>
     <p>Area:${area}</p>
     <img src="${flags.png}">
    </div>
    `
}



  // disstructuring option 1
//const getCountryHTML=country=>{
  
//     const {name,flags}=country;
//     return `
//     <div class="country">
//      <h2>${name.common}</h2>
//      <img src="${flags.png}">
//     </div>
//     `
// }



//original
// const getCountryHTML=country=>{
//     return `
//     <div class="country">
//      <h2>${country.name.common}</h2>
//      <img src="${country.flags.png}">
//     </div>
//     `
// }
loadCountries();