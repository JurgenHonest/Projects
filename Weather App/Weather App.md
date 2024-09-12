# Weather App
A Weather App allows users to search for the current weather conditions of any city using the OpenWeatherMap API. It provides real-time information such as temperature, humidity, wind speed, and displays weather icons based on conditions (e.g., cloudy, rainy, or clear). 

## This is a basic HTML structure for a weather application using the OpenWeatherMap API
1. HTML Structure:
The structure includes a search box where users can input a city name and get weather data.
It displays weather information such as the city name, temperature, humidity, and wind speed.
Error handling is done for invalid city names, where an error message is shown if the city isn't found.
2. Key Components:
  a. input: The text box where users can enter a city name.
  b. button: Triggers the weather data search.
  c. div class="error": Displays when the user inputs an invalid city name.
  d. div class="weather": Displays weather details such as temperature, city name, humidity, wind speed, and a weather icon based on conditions.
3. CSS Reference:
link rel="stylesheet" href="style.css": Links to an external CSS file for styling.
  
## JavaScript:
The script uses fetch to retrieve weather data from the OpenWeatherMap API using the city name.
It dynamically updates the webpage with the weather information based on the city searched.
Weather icons change based on weather conditions (cloudy, clear, rain, etc.).
1. Key Functions:
checkWeather(city): Fetches the weather data for the input city and updates the UI accordingly. If the city is invalid, it shows an error message.
The app handles five weather conditions: Clouds, Clear, Drizzle, Mist, and Rain.

## CSS:

1.Responsive Design:
The card element is constrained to 90% width and a maximum width of 470px, which should look good on most screens.
Flexbox is used effectively in .search, .details, and .col for aligning items, which should ensure a flexible layout.<br>
2. Gradients and Color Scheme:
The background and card gradients add a nice visual appeal.
The combination of dark blue to red for the body and the blue-green gradient for the card will give a modern and vibrant look.<br>
3. Typography:
Font sizes for temperature (h1) and city name (h2) are large, which makes them stand out.
The 27px font size for .humidity and .wind also seems appropriate for readability.<br>
4. Weather Icon Size:
The weather icon is given a width of 150px, which should look good in the overall layout.
<br>

