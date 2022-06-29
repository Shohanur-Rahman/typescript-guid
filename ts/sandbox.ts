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

let greet = () => {
    console.log("Hello World!");
}

let add = (a: number, b: number, c: number|string = 10) => {
    return a+b;
}
let printSum = (a: number, b: number, c: number|string = 10):void => {
    console.log(a+b);
}

let calc: (a:number, b:number, c: string) => number;

calc= (numOne: number,numTwo:number, action: string) => {
    if(action == "add"){
        return numOne+numTwo;
    }else if(action == "sub"){
        return numOne-numTwo;
    }else if(action == "mul"){
        return numOne*numTwo;
    }else if(action == "div"){
        return numOne/numTwo;
    }

    return numOne+numTwo;
}

console.log(calc(5,8,"mul"));