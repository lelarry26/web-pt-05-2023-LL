// In addition to for loops, we can also use while loops to 
// iterate through arrays

let animals = ["dog", 'cats', 'pig'];
for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Using a while loop to accomplish the same iteration
let j = 0;
while(j < animals.length) {
    console.log(animals[j]);
    j++;
}

weeklySchedule = [
    {day: "Sunday", task: "Run a 5k"},
    {day: "Monday", task: "Read a chapter of Atomic Habits"},
    {day: "Tuesday", task: "Meal prep dinner"},
    {day: "Wednesday", task: "Meditate for 20 mins"}
]


// Adding a new field to each object within the array
let k = 0;
while(k < weeklySchedule.length) {
    // The Math.round() function will round the number  up or down depending on the tenth and hundredths place
    // Math.random generates a random number between 0 - 1
    weeklySchedule[k].push_ups_completed = doPushups();
    k++;
}

console.log(weeklySchedule);



function doPushups() {
    let pushUps = Math.round(Math.random() * 100);
    return pushUps;
}


