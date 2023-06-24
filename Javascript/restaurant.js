// You are in charge of your own restaurant. Crafting a menu is essential for the success of the restaurant. You are to create a simulator that gives the
// 1). Create a menu that has 4 dishes. Each dish must have a name, price, reviews (scale 1-5) randomly generated.
// 2). Your menu should be stored in a single array for easy access
// 3). Simulator should randomize what dish is eaten by a customer as well as the review that is left. Simulate the first 100 customers and return the overall average of the 4 dishes


class Dish {
    constructor(name, price, reviews) {
        this.name = name;
        this.price = price;
        this.reviews = reviews;
    }

    knock_socks_off() {
        console.log("I am totally amazed by this food. 5 stars.")
    } 
}

let nyStrip = new Dish("The Hudson", 52, 0);
let londonBroil = new Dish("Top of the Morning", 44, 0);
let clamChowder = new Dish("Freedom Rings", 24, 0);
let californiaRoll = new Dish("Roll of Angels", 26, 0);


let menu = [nyStrip, londonBroil, clamChowder, californiaRoll];


function startRestaurant() {
    let average = 0;
    for(let i = 0; i < 100; i++) {
        let pickDish = menu[Math.round(Math.random() * 3)];
        pickDish.reviews = Math.round(Math.random() * 5);
        if(pickDish.reviews == 0) {
            pickDish.reviews += 1;
        } else if(pickDish.reviews == 5) {
            pickDish.knock_socks_off()
        }
        console.log(pickDish.reviews);
        average += pickDish.reviews;
    }
    
    return average/100
}
console.log("Opening Weeking Restaurant Review: " + startRestaurant())
