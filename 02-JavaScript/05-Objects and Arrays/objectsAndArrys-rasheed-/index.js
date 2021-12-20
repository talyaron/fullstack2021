
const sister = {
    firstName: "Rasha",
    lastName: "Jaber",
    age: "31",
    job: "BackEnd Delevoper",
    residence: "Tal-Aviv",
}
const sisterFriends = ["misha", "louis", "mark", "steven"]


const mother = {
    firstName: "Mona",
    lastName: "Jaber",
    age: "46",
    job: "HomeMaker",
    residence: "Jerusalem",
}
const motherFriends = ["sam", "sarah", "tami", "dwayne"]

const father = {
    firstName: "Jawad",
    lastName: "Jaber",
    age: "53",
    job: "BusinessMan",
    residence: "Jerusalem",
}
const fatherFriends = ["toni", "rami", "paul", "jhon"]

const partner = {
    firstName: "Marie",
    lastName: "Mishkuts",
    age: "22",
    job: "Food & Beverage",
    residence: "Eilat",
}
const partnerFriends = ["rotem", "Noam", "tesla", "c-note"]

const family = [sister, mother, father, partner]
for (let i = 0; i < 1; i++) {
    if (sister) {
        console.log("My sister is " + sister.firstName, sister.lastName)
    }
    if ([mother]) {
        console.log("My mother is " + mother.firstName, mother.lastName)
    }
    if ([father]) {
        console.log("My father is " + father.firstName, father.lastName)
    }
    if ([partner]) {
        console.log("My partner is " + partner.firstName, partner.lastName)

    }
}

for (let f = 0; f < 1; f++) {
    if (sisterFriends) {
        console.log(sister.firstName, sister.lastName + " has the following friends:- " + sisterFriends)
    }
    if (motherFriends) {
        console.log(mother.firstName, mother.lastName + " has the following friends:- " + motherFriends)
    }
    if (fatherFriends) {
        console.log(father.firstName, father.lastName + " has the following friends:- " + fatherFriends)
    }
    if (partnerFriends) {
        console.log(partner.firstName, parent.lastName + "has the following friends:- " + partnerFriends)
    }

}
