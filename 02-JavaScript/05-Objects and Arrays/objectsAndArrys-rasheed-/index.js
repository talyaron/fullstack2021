
const sister = {
    firstName: "Rasha",
    lastName: "Jaber",
    isMy: "is My Sister",
    age: "31",
    job: "BackEnd Delevoper",
    residence: "Tal-Aviv",
}
sister.Friends = ["misha", "louis", "mark", "steven"]


const mother = {
    firstName: "Mona",
    lastName: "Jaber",
    isMy: "is My Mother",
    age: "46",
    job: "HomeMaker",
    residence: "Jerusalem",
}
mother.Friends = ["sam", "sarah", "tami", "dwayne"]

const father = {
    firstName: "Jawad",
    lastName: "Jaber",
    isMy: "is My Father",
    age: "53",
    job: "BusinessMan",
    residence: "Jerusalem",
}
father.Friends = ["toni", "rami", "paul", "jhon"]

const partner = {
    firstName: "Marie",
    lastName: "Mishkuts",
    isMy: "is My Partner",
    age: "22",
    job: "Food & Beverage",
    residence: "Eilat",
}
partner.Friends = ["rotem", "Noam", "tesla", "c-note"]

const family = [sister, mother, father, partner]
for (let i = 0; i < family.length; i++) {
    console.log(family[i].firstName, family[i].lastName, family[i].isMy)
}


for (let i = 0; i < family.length; i++) {
    console.log(family[i].firstName, family[i].lastName + " has the following friends:- " + family[i].Friends)
}
