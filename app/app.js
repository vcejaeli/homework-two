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
    MODEL.getCurrentWeather(location);
    $("#gwInput").val("");
}

$(document).ready(function () {
  initListeners();
});
