

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

function makeRow(car) {
    var res = "<tr>";
    for (var prop in car) {
        res = res + "<td>" + car[prop] + "</td>";
    }
    return res + "</tr>";
}

function makeTable(data) {
    var res = "<table class=\"table\"><tr>";
    for (var prop in data[0]) {
        res = res + "<th>" + prop + "</th>";
    }
    res = res + "</tr>";
    for (var i = 0; i < data.length; i++) {
        res = res + "<tr>";
        for (var prop in data[i]) {
            res = res + "<td>" + data[i][prop] + "</td>";
        }
        res = res + "</tr>";
    }
    return res + "</table>";

}

document.getElementById("x").innerHTML = makeTable(cars);

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var input = document.getElementById("input").value;

    cars = cars.filter(function (car) {
        return car.price<input;
    });

    document.getElementById("x").innerHTML = makeTable(cars);
    document.getElementById("input").value = "";

});