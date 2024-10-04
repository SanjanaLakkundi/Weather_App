document.getElementById('submit-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'c75642f7e45957c9d879f5669b2145a2';  // Replace with your OpenWeatherMap API Key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Make sure the 'main' object exists before accessing 'temp'
            if (data.main && data.main.temp) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
                document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                document.querySelector('.weather-info').style.display = 'block';
            } else {
                throw new Error('Weather data unavailable');
            }
        })
        .catch(error => {
            document.getElementById('error-message').innerText = error.message;
            document.querySelector('.weather-info').style.display = 'none';
        });
});
