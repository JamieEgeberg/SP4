



var name = {
    firstName: "Kurt",
    lastName: "Wonnegut"
};

function nameFactory() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        phone: "98989898"
    };
}

var n = nameFactory();
//delete n.firstName;
//n.phone = "98989898";
for(var prop in n){
    console.log(prop);
}
console.log(n.firstName, n.lastName, n.phone);

