# Weather App 🌤️
A simple, colorful, and responsive weather application that allows users to check the current weather conditions by entering the name of a city or location. The app fetches real-time weather data using the OpenWeatherMap API.

## Features

- 🌡️ **Displays Current Weather**: Get the current temperature (in Celsius), weather description (e.g., "Sunny," "Cloudy"), and an icon representing the weather.
- 🔍 **User Input**: Enter a city name to retrieve weather data for that location.
- 💬 **Error Handling**: Provides user-friendly error messages if the city is not found or if there's an issue with the API request.
- 🎨 **Colorful UI**: The app has a vibrant, colorful, and modern design with smooth transitions and effects.
- 📱 **Responsive Design**: The app is designed to look great on any screen size.

## Technologies Used

- **HTML**: Structuring the app.
- **CSS**: Styling the app with a colorful, responsive design.
- **JavaScript**: Fetching real-time weather data and adding interactivity.
- **OpenWeatherMap API**: Used to retrieve the current weather data.

## How to Run the Project Locally

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Get the API Key**:
   - Sign up for a free API key from [OpenWeatherMap](https://openweathermap.org/).
   - Replace the `YOUR_API_KEY` in the `script.js` file with your actual API key:
     
     ```javascript
     const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
     ```

3. **Run the app**:
   - Open the `index.html` file in your web browser.

4. **Using the App**:
   - Enter any city in the input field and press the "Get Weather" button to retrieve weather data for that location.

## API Information
This project uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch the current weather data. Ensure you comply with their terms of use if you plan to deploy this app publicly.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.



