import "./styles.css";

//#region functions
function startPage() {
  celsiusLink.classList.add("bold");
  currentDayLb.innerHTML = `${dayOfWeek[day - 1]}`;
  if (minuts < 10) {
    currentTimeLb.innerHTML = `${hours}:0${minuts}`;
  } else {
    currentTimeLb.innerHTML = `${hours}:${minuts}`;
  }
  kyivClick();
}
function fromCelsiusToFahrenheit(temp) {
  return Math.round(temp * 1.8 + 32);
}
function fromFahrenheitToCelsius(temp) {
  return Math.round((temp - 32) / 1.8);
}
function celsiusLinkActive() {
  if (!celsiusIsCurrent) {
    celsiusLink.classList.add("bold");
    fahrenheitLink.classList.remove("bold");
    currentTemp.innerHTML =
      "" + fromFahrenheitToCelsius(currentTemp.textContent);
    celsiusIsCurrent = true;
  }
}
function fahrenheitLinkActive() {
  if (celsiusIsCurrent) {
    fahrenheitLink.classList.add("bold");
    celsiusLink.classList.remove("bold");
    currentTemp.innerHTML =
      "" + fromCelsiusToFahrenheit(currentTemp.textContent);
    celsiusIsCurrent = false;
  }
}
function suarchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text");
  city.value = city.value.trim();
  if (city.value !== "") {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }
}
function londonClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${londonLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function kyivClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${kyivLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function lisbonClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${lisbonLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function dubaiClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${dubaiLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function parisClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${parisLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function currentClick() {
  navigator.geolocation.getCurrentPosition(showPositionWeather);
}
function showPositionWeather(position) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function showTemp(request) {
  currentCity.innerHTML = request.data.name;
  currentTemp.innerHTML = Math.round(request.data.main.temp);
}
//#endregion
//#region lets
let apiKey = "3604a3b2990de7c5ad72879ebff3eb17";
let celsiusIsCurrent = true;
let celsiusLink = document.querySelector("#celsius-link");
let fahrenheitLink = document.querySelector("#fahrenheit-link");
let currentDayLb = document.querySelector("#current-day");
let currentTimeLb = document.querySelector("#current-time");
let now = new Date();
let day = now.getDay();
let hours = now.getHours();
let minuts = now.getMinutes();
let dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let searchForm = document.querySelector("#search-city-form");
let currentCity = document.querySelector("#current-city-name");
let londonLink = document.querySelector("#london");
let kyivLink = document.querySelector("#kyiv");
let lisbonLink = document.querySelector("#lisbon");
let dubaiLink = document.querySelector("#dubai");
let parisLink = document.querySelector("#paris");
let currentForm = document.querySelector("#search-current");
let currentTemp = document.querySelector("#current-temperature");
//#endregion
startPage();
searchForm.addEventListener("submit", suarchCity);
celsiusLink.addEventListener("click", celsiusLinkActive);
fahrenheitLink.addEventListener("click", fahrenheitLinkActive);
londonLink.addEventListener("click", londonClick);
kyivLink.addEventListener("click", kyivClick);
lisbonLink.addEventListener("click", lisbonClick);
dubaiLink.addEventListener("click", dubaiClick);
parisLink.addEventListener("click", parisClick);
currentForm.addEventListener("click", currentClick);
