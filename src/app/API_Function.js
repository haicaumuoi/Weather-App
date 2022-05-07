function getLocation() {
  const location_search = document.getElementById('location-search');
  const location = location_search.value;
  return location;
}

async function getWeatherAPI() {
  const search = getLocation();
  const respone = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=61143bcabab93bed1de9b4d47e030e70`
    { mode: 'cors' }
  );
  const fetch_data = await respone.json();
  console.log(fetch_data);
}

export {
  getLocation,
  getWeatherAPI
}