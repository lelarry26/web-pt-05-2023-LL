function Grouper(Name) {
    const firstLetter = Name.charAt(0).toUpperCase();

    if (firstLetter < 'A') {
        console.log(Name + " belongs to Group 1.");
    } else if (firstLetter >= 'H' && firstLetter <= 'P') {
        console.log(Name + " belongs to Group 2.");
    } else {
        console.log(Name + " belongs to Group 3.");
    }
}

const input = prompt("What is your name?");

Grouper(input)