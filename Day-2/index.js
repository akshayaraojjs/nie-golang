var fullName = "Akshay Rao";
var initial = 'J'
var age = 23;
var isTrainer = true;
var college;
var tech = null;

console.log(fullName);
console.log(initial);
console.log(age);
console.log(isTrainer);
console.log(college);
console.log(tech);

console.log("My name is " + fullName + " " 
    + initial + ". I'm, " + age + " years old.");

// Single Line comment only shown for developers
/*This is a
Multi-Line
comment*/

//Operators
//Arithmetic Operators: +, - , *, /, %, **
var num1 = 10, num2 = 15;
console.log("Addition: ");
console.log(num1 + num2);
console.log("Subtraction: ");
console.log(num1 - num2);
console.log("Multiplication: ");
console.log(num1 * num2);
console.log("Division for Quotient: ");
console.log(num2 / num1);
console.log("Division for Remainder: ");
console.log(num2 % num1);
console.log("Exponent: ");
console.log(num1 ** 3);

// Relational Operators
console.log("Greater than: ");
console.log(num1 > num2);
console.log("Lesser than: ");
console.log(num1 < num2);
console.log("Greater than or Equal to: ");
console.log(num1 >= num2);
console.log("Lesser than or Equal to: ");
console.log(num1 <= num2);
console.log("Equal to: ");
console.log(num1 == num2);
console.log("Not Equal to: ");
console.log(num1 != num2);
console.log("\n");
var num3 = "10"
console.log("Equal to: ");
console.log(num1 == num3);
console.log("Strictly Equal to: ");
console.log(num1 === num3);

//Logical Operators: &&, ||, !
var Age = 23;
var canDrive = true;
console.log("Outcome for AND:");
console.log(Age > 18 && canDrive == false);
console.log("Outcome for OR:");
console.log(Age > 18 || canDrive == false);
console.log("Outcome for NOT:");
console.log(!canDrive);


//Assignment Operators: =, +=, -=, *=, /=, %=
console.log("Assignment: ");
console.log(num1 = 20);
console.log("Addition and Assignment: ");
console.log(num1 += 10); //num1 = num1 + 10
console.log("Subtraction and Assignment: ");
console.log(num1 -= 10); //num1 = num1 - 10
console.log("Multiplication and Assignment: ");
console.log(num1 *= 10); //num1 = num1 * 10
console.log("Division for Quotient and Assignment: ");
console.log(num1 /= 10); //num1 = num1 / 10
console.log("Division for Remainder and Assignment: ");
console.log(num1 %= 10); //num1 = num1 % 10

//Conditional Statements
// if, if-else, Nested if
var votingAge = 18;
if(votingAge < 18){
    console.log("The person can Vote");
} else{
    console.log("The person can't Vote");
}

var personAge = 18;
var isIndian = true;
if(personAge >= 18 && isIndian == true){  //Age - T, I - T
    console.log("He/She can vote");
} else if(personAge < 16){    //Age - F
    console.log("He/She can't vote");
} else{                       //Both - F
    console.log("He/She is not Indian");
}

var month = 2;
switch(month){
    case '1': 
            console.log("January");
            break;
    case '2': 
            console.log("February");
            break;
    default:
            console.log("Not a Valid month");
            break;
}