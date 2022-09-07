class Human {
    name;
    hairColor;

    constructor(name, hairColor) {
        this.name = name;
        this.hairColor = hairColor;
    }

    hobbies() {
        console.log('sleep')
    }
}

const shani = new Human("shani", "brown")
// console.log(shani.hobbies)
// console.log

// shani.hobbies()

const shay = new Human("Shay", "colorfuulllll")

console.log(shay)
shay.hobbies()

class Living extends Human {
    living;

    constructor(living, name, hairColor) {
        super(name, hairColor)
        this.living = living
    }
}

const will = new Living("Beer Sheva", "Will", "black")

console.log(will)
