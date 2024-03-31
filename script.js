const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-blue-clouds-paper-cut-image_2241670.jpg";
            break;
        case 'Clear':
            weather_img.src = "https://png.pngtree.com/png-clipart/20190902/original/pngtree-lovely-yellow-sun-material-png-image_4388910.jpg";
            break;
        case 'Rain':
            weather_img.src = "https://img.pikbest.com/png-images/blue-cute-rain-cloud_5882536.png!sw800";
            break;
        case 'Mist':
            weather_img.src = "https://toppng.com/uploads/preview/weather-wind-weather-11563626000msoeemoh0b.png";
            break;
        case 'Snow':
            weather_img.src = "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-lovely-snowy-weather-image_2238592.jpg";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});