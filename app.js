let btn_search = document.getElementById("search");
let city_name = document.getElementById("city_name");
let humidity = document.getElementById("humidity");
let temperature = document.getElementById("tempe");
let maxtemp = document.getElementById("maxTemp");
let mintemperature = document.getElementById("mintemp");
let wind = document.getElementById("wind");
console.log(city_name);
btn_search.addEventListener("click" , async function(e) {
   let city = city_name.value;
   let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`
  );
  let weather = await data.json();
  console.log(weather);
  temperature.textContent = weather.main.temp + ".celsius";
  wind.textContent = weather.wind.speed + "m/s";
  humidity.textContent = weather.main.humidity + "%";
  mintemperature.textContent = weather.main.temp_min + ".celsius";
  maxtemp.textContent = weather.main.temp_max + ".celsius";
});
