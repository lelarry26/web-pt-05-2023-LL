function javascriptDemo() {
    // The most basic of javascript types are strings, numbers, boolean

    // We use comments to helps humans understand what is written

    // We declare a string by using either the let or const keyword
    first_name = "Dre Taylor";

    // We use console.log to print to the vs code terminal 
    console.log(first_name); 

    // We can always change the value of a variable declared by let
    first_name = "Dre Taylor, Georgia Tech";
    console.log(first_name); 

    // We can always change the value of a variable declared by let
    first_name = "Derek";
    console.log(first_name);

    // Compilation vs Runtime Error
    // Compilation: Converting code(javascript) into machine language
    // Runtime Error: The computer can succesfully convert your code to machine language, BUT
    // you did something wrong(logic, or memory)

    // More String Examples
    let address = "123 4th Ave, New York, New York";
    let id = '987654321';

    // Number type is just that, numbers
    const pi = 3.14;
    let number_id = 987654321;

    // Boolean: True/False

    let hot = true;
    let isRaining = false;

    // We can perform basic arithmetic operations on variables that contain numbers
    let addition = 2 + 2;
    let subtraction = 5 - 2;
    let multiplication = 4 * 4;
    let division = 25 / 5;

    // We can also do more advanced operations
    // We often use the modulo operator (%) for logic operations
    // Modulo returns the remainder of two numbers being divided 

    console.log(11 % 3);
}

//javascriptDemo();

// Functions are used to execute a specific block of code
// Once the function receives that value, that value is a parameter of the function
function printYourCity(city) {
    console.log("You are from " + city);
}

// Call the function that we created
// When we pass values through the function call, the value is called an argument
//printYourCity("Austin, TX");


function calculateSquareFootage(width, length) {
    console.log(width * length);
}

//calculateSquareFootage(10, 5);


// Conditionals: If/Else Statements
function weatherReport(temp, precip, wind) {
    // If statement only executes a block of code, when the condition evaluates to true
    // When using multiple if statements, the computer will execute every
    // if statement that evaluates to true

    if(temp > 80) {
        console.log("The forecast for today is hot, you should wear light clothing");
    }
    if(precip > 50) {
        console.log("The forecast calls for rain, take an umbrella");
    }
    if(wind > 10) {
        console.log("It will be windy, wear a windbreaker");
    }

    // When using an else if statement, the chain of ifs will stop once the first 
    // true condition is found

    if(temp > 80) {
        console.log("The forecast for today is hot, you should wear light clothing");
    } else if(precip > 50) {
        console.log("The forecast calls for rain, take an umbrella");
    } else if(wind > 10) {
        console.log("It will be windy, wear a windbreaker");
    }

    console.log("That concludes your weather report");
}

weatherReport(90, 55, 20);

let first_name = "Dre";
if(first_name.charAt(0) < "H") {
    console.log(first_name + " is in group 1");
}