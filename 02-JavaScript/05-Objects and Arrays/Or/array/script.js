// 01 object
const livnat = {
    name: 'Livnat',
    lastName: 'Avramashvili',
    age: 22,
    connection: 'wife',
    friends: ['Avigail', 'Reshit']
}
const dad = {
    name: 'Shmuel',
    lastName: 'Avramashvili',
    age: 55,
    connection: 'dad',
    friends: ['Poli', 'Doron']
}
const mom = {
    name: 'Mazi',
    lastName: 'Avramashvili',
    age: 50,
    connection: 'mom',
    friends: ['Ayelet', 'Shoshi']
}
const efi = {
    name: 'Efi',
    lastName: 'Avramashvili',
    age: 30,
    connection: 'big brother',
    friends: ['Doron', 'Dan']
}
const inon = {
    name: 'Inon',
    lastName: 'Avramashvili',
    age: 28,
    connection: 'second brother',
    friends: ['Gantz', 'Yaakobi']
}
const refael = {
    name: 'Refael',
    lastName: 'Avramashvili',
    age: 24,
    connection: 'third brother',
    friends: ['Malachi', 'Matan']
}
// second family
const nirit = {
    name: 'Nirit',
    lastName: 'Petel',
    age: 34,
    connection: 'sister in law',
    friends: ['Sarah', 'Eden']
}
const yosef = {
    name: 'Yosef',
    lastName: 'Petel',
    age: 24,
    connection: 'brother in law',
    friends: ['Elia', 'Matan']
}

// 02/03 array
let Orsfamily = [livnat, dad, mom, efi, inon, refael];
let livnatsFamily=[nirit,yosef]
function familyGroup(family) {
    for (let i in family) {
        console.log(family[i].name)
    }
    // 05
    for (let i in family) {
        console.log(`Those are ${family[i].name} ${family[i].lastName}'s friends: ${family[i].friends}`)
    }
}
familyGroup(Orsfamily);
familyGroup(livnatsFamily);