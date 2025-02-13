// var, let & const
var age = 18; //Global Scope - Not Recommended
console.log(age);
var age = 20;
console.log(age);
// Block Scope
let Age;  //Declaration
console.log(Age);
Age = 18; //Initialization
console.log(Age);
Age = 25;
console.log(Age);
// let variables can be declared once and assign value multiple times
const personAge = 18; //Declared & Initialized
console.log(personAge);
// personAge = 23;
// const variables can be declared & initialized only once, we can't assign again 

//Object
let car = {
    brand: "Tata",
    model: "Punch",
    manufacturedAt: "India",
    manufacturedOn: 2024,
    amount: 500000
};
console.log(car);
carBrand = car.brand;
console.log(carBrand);
carModel = car.model;
console.log(carModel);

//Array
let even = [2, 4, 6, 8, 10];
console.log(even);
console.log(even[2]); //Accessing the value with array index

//Array methods: push, pop
even.push(12); //Adding the data
console.log(even);
even.pop(); //Removing the data
console.log(even);

//functions in JS are also called as Methods
function sum(a,b){
    return a+b;
}

console.log("The sum of the values are:")
console.log(sum(20,30));
console.log(sum(60,80));
console.log(sum(100,200));

const add = (a,b) => a + b;

// const add =  
    //     (a,b) => 
    //     a + b;

console.log("The sum of the values using Fat Arrow function (=>):");
console.log(add(15,25));
console.log(add(96,126));
console.log(add(159,195));

const cube = (a) => a*a*a;

console.log(cube(3));
console.log(cube(8));
console.log(cube(20));

const greet = (personName) => ("Hello!, " + personName);

console.log(greet("Akshay"));
console.log(greet("Ajay"));

//Map method
const numbers = [1,2,3,4,5,6,7];
const squared = numbers.map(num => num * num);
console.log("Square of given numbers are: " + squared);

//Filter Method
const Numbers = [3, 6, 9, 12, 15, 18, 21];
const multiplesOf2 = Numbers.filter(num => num % 2 == 0);
console.log("Mutiples of 2 are: " + multiplesOf2);

//Reduce Method
const someNumbers = [1, 3, 4, 7, 9, 13, 15];
const sumOfNumbers = someNumbers.reduce((temp, present) => temp + present, 0);
console.log("Sum of given numbers are: " + sumOfNumbers);

                    // Tracing:
                    // 1) (1 + 0, 0) => 1
                    // 2) (1 + 3, 3) => 1 + 3 = 4
                    // 3) (4 + 4, 4) => 4 + 4 = 8
                    // 4) (8 + 7, 7) => 8 + 7 = 15
                    // 5) (15 + 9, 9) => 15 + 9 = 24
                    // 6) (24 + 13, 13) => 24 + 13 = 37
                    // 6) (37 + 15, 15) => 37 + 15 = 52