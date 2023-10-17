const API_KEY = "b476218e49ef0d0755a713e9ba77f79a";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

// Declaration variables
const searchInput = document.createElement("input");
searchInput.id = "input";
const searchBtn = document.createElement("button")
searchBtn.id = "search";

const img = document.createElement('img');

async function checkWeather(city){
    const response = await fetch(API_URL + city +`&appid=${API_KEY}&lang=fr`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + " °C"
    document.querySelector(".wind").innerHTML = Math.floor( data.wind.speed) + "Km/h"
    document.querySelector(".humidity").innerHTML = data.main.humidity

}
    searchBtn.addEventListener('click' , ()=>{
        checkWeather(searchBox.value)
    })
checkWeather()

