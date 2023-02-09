export default class WeatherService {
  static getWEather(city) {
    return fetch()
      .then(function(response){
        if(!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      })
  }
}