var human = {
    name: "John",
    age: 25,
    eye: 2,
    firstName: "John",
    lastName: "Doe",
    parentsInfo: {
        fatersInfo: {
            fatersName: "Mark",
            phoneNumber: "015554",
            country: "United Kingdom"
        },
        mothersInfo: {
            fatersName: "Alisha",
            phoneNumber: "015554",
            country: "United Kingdom"
        }
    }
};
var mixed = [];
mixed.push("John Doe");
mixed.push(20);
mixed.push("USA");
mixed.push(true);
var greet = function () {
    console.log("Hello World!");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b;
};
var printSum = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action == "add") {
        return numOne + numTwo;
    }
    else if (action == "sub") {
        return numOne - numTwo;
    }
    else if (action == "mul") {
        return numOne * numTwo;
    }
    else if (action == "div") {
        return numOne / numTwo;
    }
    return numOne + numTwo;
};
console.log(calc(5, 8, "mul"));
