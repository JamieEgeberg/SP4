
var names = [
    "Lars",
    "Jan",
    "Peter",
    "Bo",
    "Frederik"
];

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

//for (var i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

names.forEach(function (name) {
    console.log(name);
});


var filtered = names.filter(function (name) {
    return name.length <= 3;
});
console.log(filtered);
names = names.map(function (name) {
    return "<li>" + name + "</li>";
});

var lis = "<ul>" + names.join("") + "</ul>";
console.log(names);
console.log(lis);

var newer1999 = cars.filter(function (car) {
    return car.year > 1999;
});
var volvos = cars.filter(function (car) {
    return car.make === 'Volvo';
});
var below5000 = cars.filter(function (car) {
    return car.price < 5000;
});
console.log("Cars newer than 1999: ");
console.log(newer1999);
console.log("Volvos: ");
console.log(volvos);
console.log("Cars below 5000: ");
console.log(below5000);