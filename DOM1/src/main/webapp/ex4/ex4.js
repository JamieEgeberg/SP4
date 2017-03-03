

var names = [
    "Lars",
    "Jan",
    "Peter",
    "Bo",
    "Frederik"
];

function makeList(arr) {
    var lis = arr.map(function (name) {
        return "<li>" + name + "</li>";
    });
    return "<ul>" + lis.join("") + "</ul>";
}

document.getElementById("x").innerHTML = makeList(names);

var add = document.getElementById("add");

add.addEventListener("click", function () {
    var nn = document.getElementById("nn").value;
    names.push(nn);

    document.getElementById("x").innerHTML = makeList(names);
    document.getElementById("nn").value = "";

});

var rmvFirst = document.getElementById("rmvFirst");
rmvFirst.addEventListener("click", function () {
    names.splice(0, 1);

    document.getElementById("x").innerHTML = makeList(names);
});

var rmvLast = document.getElementById("rmvLast");
rmvLast.addEventListener("click", function () {
    names.splice(names.length-1, 1);

    document.getElementById("x").innerHTML = makeList(names);
});