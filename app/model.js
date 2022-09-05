var key = "ec8bea1a8e6c4121b2a202237222908";
var baseURL = "http://api.weatherapi.com/v1/";

function getCurrentDate() {
  //   console.log(utility(name));
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullDate = `${year}-${month}-${day}`;

  console.log(fullDate);
  return fullDate;
}

function getCurrentWeather(location) {
  const currentDate = getCurrentDate();


  // this is for retrieving an api
  $.get(
    `${baseURL}current.json?key=${key}&q=${location}&dt=${getCurrentDate}`,
    (data) => {
      console.log(data);
      console.log(data.location);
    //   console.log(data.astronomy.astro.sunrise);
    //   data.something in there    data.location.name
    }
  ).fail(function (e) {
    alert("Sorry, not available at the moment.");
  });
}

export { getCurrentWeather };
