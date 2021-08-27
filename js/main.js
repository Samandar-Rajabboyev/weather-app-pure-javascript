let weather = {
  'apiKey': '9e3064bf7abed2440ebbac240d9ba994',
  fetchWeather: function(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&units=metric&appid=' +
    this.apiKey
  ).then((response) => response.json()).then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    document.querySelector('.city').innerHTML = 'Weather in ' + name;
    document.querySelector('.description').innerHTML = description;
    document.querySelector('.humidity').innerHTML = 'humidity: ' + humidity + '%';
    document.querySelector('.wind').innerHTML = 'Wind speed: ' + speed + ' km/h';
    document.querySelector('.temp').innerHTML =  temp + '°C';
    document.querySelector('.icon').src =  'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.weather').classList.remove('loading');
    document.body.style.backgroundImage = 'url(\'https://source.unsplash.com/1600x900/?' + name + '\')';
    if (name == 'Navoiy') {
      document.body.style.backgroundImage = 'url(\'./images/navoiy.jpg\')';
    }else if (name == 'Fergana') {
      document.body.style.backgroundImage = 'url(\'./images/fergana.jpg\')';
    }
  },
  search: function() {
    this.fetchWeather(document.querySelector('.search-bar').value);
  }
};

document.querySelector('button').addEventListener('click', ()=> {
  weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', (event)=> {
  if (event.key == 'Enter') {
    weather.search();
  }

});

weather.fetchWeather('Navoiy');
