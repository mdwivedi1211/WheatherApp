function getWeather() {
  const name = "Weatherofbhopal";
  const city = document.getElementById("city").value;
  const apiKey = "your_api_key"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].main;
      const temp = Math.round(data.main.temp - 273.15);
      const result = document.getElementById("result");
      result.innerHTML = `Weather: ${weather}<br>Temperature: ${temp}°C`;
    })
    .catch((error) => {
      console.error(error);
      const result = document.getElementById("result");
      result.innerHTML = `Error: ${error.message}`;
    });
}
