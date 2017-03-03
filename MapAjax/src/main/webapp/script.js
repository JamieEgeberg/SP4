var info = document.getElementById("info");
info.innerHTML = "Data about country";
var country;
var svg = document.getElementById("svg2");
function clickHandler(evt) {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + evt.target.id;
    var conf = {method: 'get'};
    var promise = fetch(url, conf);
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        country = JSON.parse(text)[0];
        console.log(country);
        evt.target.style.fill = "ff0000"; //setting chosen country color to red. resetting color not implemented
        info.innerHTML = "<br>Country: " + country.name + "<br>Population: " + country.population
                + "<br>Area:" + country.area + "<br>Borders: " + country.borders;
    });

}
svg.addEventListener("click", clickHandler);



