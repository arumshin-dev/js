const weather = document.querySelector("#weather p:first-child");
const temp = document.querySelector("#weather p:nth-child(2)");
const city = document.querySelector("#weather p:last-child");
const API_KEY = "0ea448976872c92efc348b7a334be436";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = `${data.main.temp}º`;
      city.innerText = data.name;
      let currIcon = new Image();
      currIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      currIcon.alt='날씨아이콘';
      document.querySelector("#weather").appendChild(currIcon);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);