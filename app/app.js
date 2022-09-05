import * as MODEL from "./model.js";

function initListeners() {
    // MODEL.getName("Todd");
    // MODEL.getAllNames();

// listener
    $("#gw").click((e) => {
        const location = $("#gwInput").val();

        if(location != "") {
            getWeather(location);
        } else {
            alert("You need to write location first!");
        }
        getWeather(location);
    });
}

function getWeather(location) {
    console.log("weather here " + location);
    // fetch('https://www.weatherapi.com/api-explorer.aspx#current')
    // .then(res => res.json())
    // .then(data => {
    //     weather_result.innerHTML = <p>data.location, data.current</p>
    // });

    MODEL.getCurrentWeather(location);
    $("#gwInput").val("");
}

$(document).ready(function () {
  initListeners();
});
