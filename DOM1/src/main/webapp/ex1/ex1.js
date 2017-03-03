var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
}
var btn = document.getElementById("btn");
function clickHandler(evt) {
    divs = document.getElementsByTagName("div");
    divs[0].style.backgroundColor = "blue";
    divs[1].style.backgroundColor = "yellow";
    divs[2].style.backgroundColor = "green";
}
btn.addEventListener("click", clickHandler);