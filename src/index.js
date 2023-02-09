import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GifApiCall from './services/giphy.js';
import WeatherService from './services/weather-service.js';

// Business Logic

async function getGif(fish) {
  const response = await GifApiCall.getGif(fish);
  console.log(response)
  if (response.data) {
    printElements(response, fish);
  } else {
    printError(response, fish);
  }
}

// UI Logic

function printElements(fish) {
  const img = document.createElement('img');
  img.setAttribute('src', fish.data[0].images.original.url)
  document.querySelector('#where-the-api-info-goes').append(img);
}

function printError(error, fish) {
  console.log("h im in printErrori");
  console.error("printError(Err)");
  document.querySelector('#where-the-api-info-goes').innerText = `There was an error getting ${fish}: ${error}`;
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