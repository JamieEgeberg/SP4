
var buttons = document.getElementById("buttons");
function clickHandler(evt) {
    if (evt.target.innerText !== "=") {
        var dis = document.getElementById("display").innerHTML + evt.target.innerText;
        document.getElementById("display").innerHTML = dis;
    }
}
buttons.addEventListener("click", clickHandler);

var calculate = document.getElementById("calculate");
function calcHandler(evt) {
    var res = eval(document.getElementById("display").innerHTML);
    document.getElementById("display").innerHTML = res;
}
calculate.addEventListener("click", calcHandler);

