//Fetch your API! IF YOU WANT TO MAKE MULTIPLE REQUEST IN A SERIES
///////////////////////////////////////////////////////////////////////
/* fetch('https://api.weatherapi.com/v1/current.json?key=232e1c153fcd479ab0e155036220802&q=miami&aqi=yes')
  .then(res => { //CHAIN ON YOUR .THEN
    console.log("RESPONSE", res)
    return res.json() // PARSE DATA, THAT I CAN READ IT
  })
  .then (data => {
    console.log('DATA PARSED...', data)
    console.log(data.current.temp_f)
  })
  .catch(e => { //CHAIN YOUR .CATCH
    console.log("OH NO ERROR!", e)
  }) */


//EVENT LISTENERS
//////////////////////////////////////////////////////////////////////
const userButton = document.querySelector('.button');
const userInput = document.querySelector('.input');
const place = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humid = document.querySelector('.humidity');
const cond = document.querySelector('.condition');
const speed = document.querySelector('.mph');
const icon = document.querySelector('.weather')

userButton.addEventListener('click', displayWeather);

// ALOT CLEANER
//////////////////////////////////////////////////////////////////////
const getWeather = async (city) => {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=232e1c153fcd479ab0e155036220802&q=${city}&aqi=yes`);
    const data = await res.json();
    let area = data.location.name;
    let condition = data.current.condition;
    let heat = data.current.temp_f;
    let humidity = data.current.humidity;
    let windSpeed = data.current.wind_mph;

    place.innerText = `Weather in ${area}`;
    temp.innerText = `${heat}°F`;
    humid.innerText = `Humidity: ${humidity}%`;
    cond.innerText = `Condition: ${data.current.condition.text}`;
    speed.innerText = `Wind Speed: ${windSpeed} mp/h`;
    icon.innerText = `${data.current.condition.icon}`;

  } catch (e) {
    console.log('SOMETHING WENT WRONG', e);
  }
}


function displayWeather(event) {
  event.preventDefault();

  let city = userInput.value;
  let pull = getWeather(city);
  document.querySelector('FORM').reset();

  return pull

}
