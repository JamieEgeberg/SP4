/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function add(n1, n2) {
    return n1 + n2;
}



var sub = function (n1, n2) {
    return n1 - n2;
};
var mul = function (n1, n2) {
    return n1 * n2;
};
var cb = function (n1, n2, callback) {
    if (typeof n1 === "number" & typeof n2 === "number" & typeof callback === "function") {
        return "Result from the two numbers:" + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        throw new Error('Wrong input!');
    }
};
console.log("3):");
console.log("1: " + add(1, 2));
console.log("2: " + add);
console.log("3: " + add(1, 2, 3));
console.log("4: " + add(1));
console.log("5: " + cb(3, 3, add));
console.log("6: " + cb(4, 3, sub));

try {
    console.log("7: " + cb(3, 3, add()));
} catch (e) {
    console.log(e.name + ': ' + e.message);
}
try {
    console.log("8: " + cb(3, "hh", add));
} catch (e) {
    console.log(e.name + ': ' + e.message);
}

console.log("4): " + cb(4, 3, mul));
console.log("5): " +cb(5,5,function(n1,n2){
    return n1/n2;
}));

