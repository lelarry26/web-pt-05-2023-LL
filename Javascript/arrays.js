// Creating a basic array
let classroom = ["Karen", "Nicolas", "Derek", "Brett", "Larry"];
console.log(classroom);

// If we want to get one value from the array, then we use the index
let favoriteStudent = classroom[1];
console.log(favoriteStudent);

// We use loops to navigate through an array
// Step 1: Create a variable that holds the index of the current memory location
// Step 2: Create a boundary to prevent accessing memory locations that do not belong to the array
// Step 3: Increment value

// index++ is the same index = index + 1;

console.log("Number of students", classroom.length);
for(let index = 0; index < classroom.length; index++) {
    console.log(classroom[index]);
}


// Using the array above, print each student's name in the reverse order that it appears in the array
// You cannot use the array library to accomplish the task i.e. no calling the reverse function
for(let index = classroom.length - 1; index >= 0; index--) {
    console.log(classroom[index]);
}



// Create an array that holds the number 1-25. Print out all numbers that divisible by 3.

let numbers = [];

for(let i = 0; i < 25; i++){
    numbers.push(i + 1);
}


for(let j = numbers.length - 1; j >= 2; j--) {
    console.log(numbers[j]);
    if(numbers[j] % 3 === 0) {
        console.log(numbers[j]);
    }
 }

