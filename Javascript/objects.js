// Objects are just a metadata that defines something

let student1 = {
    name: "Dre Taylor",
    id: 8579043,
    class: "Senior",
    isHonors: true,
    gpa: "3.7"
}


let student2 = {
    name: "Mohamed Abdou",
    id: 789549,
    class: "Junior",
    gpa: "3.47"
}

let student3 = {
    name: "David Wolfe",
    id: 789534,
    class: "Sophmore",
    gpa: "3.3"
}

let student4 = {
    name: "Karen Rey",
    id: 789450,
    class: "Sophmore",
    gpa: 3.8
}

//console.log(student);

// If we want to access one field within an object, we can do so using the dot operator
//console.log(student.id);

student1.id = "4df9239d"; 

// We can now see the updated value where we changed the id of the student
//console.log(student.id);

// What if we have multiples objects? How do we manage them? 


// Add all of our students the classroom


let classroom = [];
// To add a value to an array, use the push method
classroom.push(student1);
classroom.push(student2);
classroom.push(student3);
classroom.push(student4);


classroom[1].class = "Senior";
//console.log(classroom);

// Get all of the students elibigle to graduate
let grad_list = []
for(let index = 0; index < classroom.length; index++) {
    if(classroom[index].class === "Senior") {
        grad_list.push(classroom[index]);
    }
}

//console.log(grad_list);

//-------------------------------------------------------------------------------


let pikachu = {
    hp: 40,
    type: "Lightning",
    attack: 25
}

let charmander = {
    hp: 50,
    type: "Fire",
    attack: 20
}

let squirtle = {
    hp: 60,
    type: "Water",
    attack: 15
}

function battle(pokemon1, pokemon2) {

    // Checking if two variables are equal to each other
    // Whenever we use 2 equal signs to compare values
    if(false) {
        //console.log("Correct hp for Charmander")
    }

    // let remaining_health = "60" + 40;
    // console.log(remaining_health);


    //Checking to see if the second pokemon will survive the first attack
    if(pokemon1.attack < pokemon2.hp) {
        pokemon2.hp = pokemon2.attack - pokemon1.attack;
        //console.log("It's Pokemon 2's turn");
    } else {
        //console("Pokemon 1 wins");
    }
}

battle(charmander, squirtle);

// ---------------------------------------------------------------

// Comparisons in Detail

// Strict comparison takes into account both the data type and the value of the 
// values it is comparing
if(student1.id === "8579043") {
    student1.id + 1;
}

// Check for multiple conditions for a student using AND(&&)
// || represents an OR and tells the computer if either condition is true, run the following code
if(student1.class === "Senior" || student1.id > 0 || student1.id < 1000000) {
    //console.log("This student qualifies for graduation");
}

// The NOT operator can be used to check if a condition is false(use with care)
if(!student1.isHonors) {
    //console.log("Student is not on the honor roll");
}

//Whenever using multiple ANDs and ORs, you can control the flow by adding
// parenthesis around the conditions that you want to execute first
if(student1.class === "Freshman" && student1.isHonors || student1.gpa > 3.5) {
    //console.log("You're invited to the Freshman")
}



//----------------------------------------------------------------------------
// Go through the list of students who are enrolled in our class and print the name
// of each student who has a GPA > 3.4. This code is to be written within a 
// function and it should accepts an array of students

//The array of students is in a variable called classroom


// Part 2: Handle the case where the gpa provided may be a string value

function highGPA(classRoom) {
    for (i = 0; i < classRoom.length; i++){
        // Checks to see if the gpa is a string, if so convert it to a number
        if(typeof classroom[i].gpa === "string"){
            classroom[i].gpa = Number(classroom[i].gpa)
        }
            if (classRoom[i].gpa > 3.4){
                classRoom[i].gpa + .1;
                console.log(classRoom[i].name);
            }
    }
}

highGPA(classroom)


console.log(typeof String(student1.gpa));
console.log(typeof student4.gpa);