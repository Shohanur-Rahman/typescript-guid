let human = {
    name : "John",
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
}

let mixed: (string|number|boolean)[] = [];
mixed.push("John Doe");
mixed.push(20);
mixed.push("USA");
mixed.push(true);

console.log(mixed);