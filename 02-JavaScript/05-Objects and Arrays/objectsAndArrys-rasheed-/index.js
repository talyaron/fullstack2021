
const sister = {
    firstName: "Rasha",
    lastName: "Jaber",
    isMy: "is My Sister",
    age: "she's 31",
    job: " as a BackEnd Delevoper",
    residence: "Tal-Aviv",
}
sister.Friends = ["misha", "louis", "mark", "steven"]


const mother = {
    firstName: "Mona",
    lastName: "Jaber",
    isMy: "is My Mother",
    age: "she's 46",
    job: " as a HomeMaker",
    residence: "Jerusalem",
}
mother.Friends = ["sam", "sarah", "tami", "dwayne"]

const father = {
    firstName: "Jawad",
    lastName: "Jaber",
    isMy: "is My Father",
    age: "he's 53",
    job: "as a BusinessMan",
    residence: "Jerusalem",
}
father.Friends = ["toni", "rami", "paul", "jhon"]

const partner = {
    firstName: "Marie",
    lastName: "Mishkuts",
    isMy: "is My Partner",
    age: "she's 22",
    job: " in Food & Beverage",
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

function morefamilies(family) {
    console.log(`${family.firstName} ${family.lastName} ${family.isMy} and ${family.age} years old and lives in ${family.residence} and works${family.job} `)
    

}

morefamilies(sister)
morefamilies(father)
morefamilies(mother)
morefamilies(partner)