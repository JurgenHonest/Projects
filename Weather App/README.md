# Weather App 🌤️

A responsive weather app that allows users to search for the current weather of any city, providing real-time data including temperature, humidity, and wind speed, along with a dynamic weather icon that changes based on the conditions.

## Features

- **Search Functionality**: Search for the weather by entering a city name.
- **Real-time Weather Data**: Displays current temperature, humidity, and wind speed.
- **Dynamic Weather Icons**: Weather icon changes based on the current weather condition (clear, clouds, rain, snow, etc.).
- **Responsive Design**: The app is fully responsive, adjusting its layout to fit various screen sizes.
- **Smooth Transitions**: Weather card and icons have smooth transitions for height, opacity, and hover effects.
  
## Screenshots
![Weather App Screenshot](https://via.placeholder.com/800x400.png?text=Weather+App+Screenshot)

## Demo
You can check out the live demo [here](#).

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **OpenWeatherMap API** (for weather data)
- **Responsive Design** with Flexbox

## Setup

To get this project up and running locally on your machine, follow these steps:

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.)
- Internet connection (for API calls)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. **Navigate to the project folder**:

    ```bash
    cd weather-app
    ```

3. **Open the `index.html` file in your browser**:

    Simply double-click the `index.html` file to open it in your default web browser.

    Alternatively, you can serve the app using a local server:

    ```bash
    # If you have Python installed
    python -m http.server
    ```

    Now, open your browser and go to `http://localhost:8000`.

### API Key Setup

1. Visit [OpenWeatherMap](https://openweathermap.org/api) to get your **API Key**.
2. Replace the `apiKey` variable in the `script.js` file with your own key.

   ```javascript
   const apiKey = "your_api_key_here";
