// get Element from HTML File
// #Harsh
let t = "a";
const weatherInfo = document.getElementById('temperature-main');
let temp_feel = document.querySelector("#temperature")
let datee = document.querySelector("#date")
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#wind-speed");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let visibility = document.querySelector("#visibility");
let day0 = document.querySelector("#day0");
let day1 = document.querySelector("#day1");
let day2 = document.querySelector("#day2");
let day3 = document.querySelector("#day3");
let day4 = document.querySelector("#day4");
let day5 = document.querySelector("#day5");
let apiInfo = document.querySelector("#aqi-info");
let airPressure = document.querySelector("#air-pressure");
let population = document.querySelector("#population");
let sbtn = document.querySelector("button");
let sbar = document.querySelector("input");
let placeName = document.querySelector("#place_name");
let img = document.querySelector("#img");
let condition = document.querySelector("#weather-condition");
let pm = document.querySelector("#pm");
let so = document.querySelector("#so");
let no = document.querySelector("#no");
let o3 = document.querySelector("#o3"); 
let daydate3 = document.querySelector("#daydate3");
let daydate4 = document.querySelector("#daydate4");
let daydate5 = document.querySelector("#daydate5");
let shift1 = document.querySelector("#shift1");
let shift2 = document.querySelector("#shift2");
let shift3 = document.querySelector("#shift3");
let shift4 = document.querySelector("#shift4");
let tTemp1 = document.querySelector("#tTemp1");
let tTemp2 = document.querySelector("#tTemp2");
let tTemp3 = document.querySelector("#tTemp3");
let tTemp4 = document.querySelector("#tTemp4");
let dayicon1 = document.querySelector("#dayicon1");
let dayicon2 = document.querySelector("#dayicon2");
let dayicon3 = document.querySelector("#dayicon3");
let dayicon4 = document.querySelector("#dayicon4");
let dayicon5 = document.querySelector("#dayicon5"); 
let icon1 = document.querySelector("#icon1");              
let icon2 = document.querySelector("#icon2");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let body =document.querySelector("body");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const a = new Date();
let month = months[a.getMonth()];
const d = new Date();
let day = days[d.getDay()];
let date = new Date().getDate();
datee.innerHTML = `${ day} ${ date} ${ month}`;
// API key
const key = "96c01dbd7a9ca735381ec9a4b26c0d52";
// API URL
//API for weather forecasting live
const ApiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
//API for AQI forecasting live
const AqiApiLink = "http://api.openweathermap.org/data/2.5/air_pollution/forecast?";
//API for weather forecasting Future
const updateApi = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

async function Weather(city){
//API work
//API for weather forecasting Future
    const responseUpdate = await fetch(updateApi+city+ `&appid=${key}`);

    let updateData = await responseUpdate.json();
    if(responseUpdate.status == 404 ){
        document.querySelector("#err").style.display = "block";
    }else{
        document.querySelector("#err").style.display = "none";
        const responseUpdate = await fetch(updateApi+city+ `&appid=${key}`);
        let updateData = await responseUpdate.json();
        allWork(updateData);
    }
async function allWork(){
//API for weather forecasting live
    const response = await fetch(ApiLink +`lat=${updateData.city.coord.lat}&lon=${updateData.city.coord.lon}`+ `&appid=${key}`);
    let data = await response.json();

//API for AQI forecasting live
    const responseAqi = await fetch(AqiApiLink +`lat=${updateData.city.coord.lat}&lon=${updateData.city.coord.lon}`+ `&appid=${key}`);
    let AqiData = await responseAqi.json();


    if(data.weather[0].icon == "01d"){
        body.style.backgroundImage = `url("https://i.pinimg.com/736x/32/68/06/326806ede5879176aa3a3df9641afeaa.jpg")`
    }
    else if(data.weather[0].icon == "01n"){
        body.style.backgroundImage = `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKe-98mSYmfFTf7cI8IM6mD4HKqK_Z9W7Hd2hvM70iSw&s")`
    }
    else if(data.weather[0].icon == "03d" || "03n"){
        body.style.backgroundImage = `url("background/03d.gif")`
    }
    else if(data.weather[0].icon == "04d" ||"04n"){
        body.style.backgroundImage = `url("background/04.gif")`
    }
    else if(data.weather[0].icon == "09d"||"09n"){
        body.style.backgroundImage = `url("background/09d.gif")`
    }
    else if(data.weather[0].icon == "11d" || "11n"){
        body.style.backgroundImage = `url("background/11d.gif")`
    }
    else if(data.weather[0].icon == "13d"||"13n"){
        body.style.backgroundImage = `url("https://media1.tenor.com/m/MOWbXMVXaP0AAAAC/street-lights-snowy-night.gif")`
    }
    else if(data.weather[0].icon == "50d"||"50n"){
        body.style.backgroundImage = `url("https://i.pinimg.com/originals/35/0a/04/350a047a482937d44230f92d927d01fe.gif")`
    }
    else if(data.weather[0].icon == "02d"){
        body.style.backgroundImage = `url("background/02d.gif")`
    }
    else if(data.weather[0].icon == "02n"){
        body.style.backgroundImage = `url("background/02n.gif")`
    }
    else if(data.weather[0].icon == "10d" || "10n"){
        body.style.backgroundImage = `url("https://64.media.tumblr.com/e577bc7a98e4936d686ad18b937e0033/tumblr_p6erbsA74V1qeyvpto1_500.gifv")`
    }else{
        body.style.backgroungColor=`#1a181898`;
    }

  // Unix timestamps provided by the API
  const sunriseTimestamp = data.sys.sunrise;
  const sunsetTimestamp = data.sys.sunset;

  // Convert Unix timestamps to milliseconds by multiplying them by 1000
  const sunriseMillis = sunriseTimestamp * 1000;
  const sunsetMillis = sunsetTimestamp * 1000;

  // Create Date objects using the milliseconds
  const sunriseDate = new Date(sunriseMillis);
  const sunsetDate = new Date(sunsetMillis);

  // Get the local time strings
  const sunriseLocalTime = sunriseDate.toLocaleTimeString();
  const sunsetLocalTime = sunsetDate.toLocaleTimeString();
  console.log(data, updateData, AqiData)

  weatherInfo.innerHTML = Math.round(data.main.temp)+"°C";
  img.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png')`;
  temp_feel.innerHTML = Math.round(data.main.feels_like)+"°C";
  condition.innerHTML = data.weather[0].main;
  humidity.innerHTML = data.main.humidity+"%";
  // windSpeed.innerHTML = data.wind.speed+" km/h";
  sunrise.innerHTML =  sunriseLocalTime;
  sunset.innerHTML = sunsetLocalTime;
  visibility.innerHTML = `${data.visibility/1000} km`;
  // day0.innerHTML = Math.round(updateData.list[1].main.temp)+"°C";
  day1.innerHTML = Math.round(updateData.list[8 ]. main.temp)+"°C";
  day2.innerHTML = Math.round(updateData.list[16].main.temp)+"°C";
  day3.innerHTML = Math.round(updateData.list[24].main.temp)+"°C";
  day4.innerHTML = Math.round(updateData.list[32].main.temp)+"°C";
  day5.innerHTML = Math.round(updateData.list[39].main.temp)+"°C";

  dayicon1.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[8 ].weather[0].icon}.png')`;
  dayicon2.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[16].weather[0].icon}.png')`;
  dayicon3.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[24].weather[0].icon}.png')`;
  dayicon4.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[32].weather[0].icon}.png')`;
  dayicon5.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[39].weather[0].icon}.png')`;


  daydate3.innerHTML = updateData.list[24].dt_txt;
  daydate4.innerHTML = updateData.list[32].dt_txt;
  daydate5.innerHTML = updateData.list[39].dt_txt;

  shift1.innerHTML = updateData.list[2].dt_txt;
  shift2.innerHTML = updateData.list[3].dt_txt;
  shift3.innerHTML = updateData.list[4].dt_txt;
  shift4.innerHTML = updateData.list[5].dt_txt;

  tTemp1.innerHTML = Math.round(updateData.list[2].main.temp)+ "°C";
  tTemp2.innerHTML = Math.round(updateData.list[3].main.temp)+ "°C";
  tTemp3.innerHTML = Math.round(updateData.list[4].main.temp)+ "°C";
  tTemp4.innerHTML = Math.round(updateData.list[5].main.temp)+ "°C";

  icon1.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[2].weather[0].icon}.png')`;
  icon2.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[3].weather[0].icon}.png')`;
  icon3.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[4].weather[0].icon}.png')`;
  icon4.style.backgroundImage = `url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${updateData.list[5].weather[0].icon}.png')`;                                



  // apiInfo.innerHTML = AqiData.list[0].main.aqi;
  pm.innerHTML=AqiData.list[0].components.pm2_5
  so.innerHTML=AqiData.list[0].components.no2
  no.innerHTML=AqiData.list[0].components.so2
  o3.innerHTML=AqiData.list[0].components.o3
  airPressure.innerHTML = Math.round(updateData.list[1].main.pressure) + "hPa";

    // population.innerHTML = updateData.city.population;
    placeName.innerHTML = data.name;
    let Fv=(data.main.temp* 9/5)+32;
    let Cv=(Fv-32)*5/9;
    weatherInfo.addEventListener("click",()=>{

        if (t === "a" ){
            t = "b";
            weatherInfo.innerHTML = `${Math.round(Fv)}°F `;
        }
        else{
            t = "a";
            weatherInfo.innerHTML = Math.round(Cv)+"°C ";
        }  
        })
}
}



sbar,sbtn.addEventListener("click",()=>{
    Weather(sbar.value);
});
  sbar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        Weather(sbar.value);
    }
  });
