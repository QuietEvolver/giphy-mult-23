import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GifApiCall from './services/giphy.js';
import WeatherService from './services/weatherReport.js';

// Business Logic

async function getAPIData(fish) {
  WeatherService.getWeather(fish)
    .then(function (weatherResponse){
    console.log(weatherResponse);
    if (weatherResponse instanceof Error) {
      const errorMessage = `OpenWeather API for ${city}: 
      ${weatherResponse.message}`;
      throw new Error(errorMessage);
    } displayGif(giphyResponse, fish);
  })
    .catch(function(error) {
      printError(error);
  });
}

// UI Logic

// the parameter has changed for this function, as 
// has the message it prints to the DOM
function printWeather(description, city) {
  document.querySelector('#weather-description').innerText = `The weather in ${city} is ${description}.`;
}

// function printElements(fish) {
//   const img = document.createElement('img');
//   img.setAttribute('src', fish.data[0].images.original.url)
//   document.querySelector('#where-the-api-info-goes').append(img);
// }

// we have a new function that displays the gif

// creating the error message in the getAPIData() function
function printError(error) {
  console.log("h im in printErrori");
  console.error("printError(Err) FXN");
  document.querySelector('#where-the-api-info-goes').innerText = error;
}



function userInputForm(event) {
  event.preventDefault();
  let fish = document.querySelector('#user-input').value;
  document.querySelector('#user-input').value = null;
  getGif(fish);
}

window.addEventListener("load", function() {
  document.querySelector("#user-input-form").addEventListener("submit", userInputForm);
});