const apiKey = "c8b5bf5e872bded465baf0441653a54f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherContainer = document.querySelector(".weather");
const errorMessage = document.querySelector(".error");
const card = document.querySelector(".card"); // Select the card

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    const weatherCondition = data.weather[0].main.toLowerCase();
    const weatherImages = {
      clouds: "img/cloud.gif",
      clear: "img/sun.webp",
      drizzle: "img/drizzle.png",
      mist: "img/mist.gif",
      rain: "img/rain.gif",
      snow: "img/snow.gif",
    };

    weatherIcon.src = weatherImages[weatherCondition] || "img/defa.png";

    // Show weather and hide error message
    weatherContainer.style.display = "block";
    weatherContainer.style.opacity = 1; // Fade-in effect
    errorMessage.style.display = "none";
    errorMessage.style.opacity = 0;

    // Expand the card with smooth transition
    card.style.height = "auto"; // Card expands to fit the content
  } catch (error) {
    // Show error message and hide weather container
    weatherContainer.style.display = "none";
    weatherContainer.style.opacity = 0;
    errorMessage.style.display = "block";
    errorMessage.style.opacity = 1; // Fade-in effect

    // Keep the card height small if there's an error
    card.style.height = "100px";
  }
}

searchBtn.addEventListener("click", () => {
  if (searchBox.value.trim() !== "") checkWeather(searchBox.value);
});
