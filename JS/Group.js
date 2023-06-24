function Grouper(name) {
    const firstLetter = name.charAt(0).toUpperCase();

    if (firstLetter  < "H") {
        console.log(name + "Belongs to Group 1.");
    } else if (firstLetter >= "H" && firstLetter <= "P") {
        console.log(firstName + "Belongs to Group 2.");
    } else {
        console.log (Name + "Belongs to Group 3.")
    }
}

const input = prompt("What is your name?");

Grouper(input)