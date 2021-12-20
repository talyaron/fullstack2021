const David = {
    name: 'David',
    status: 'dad',
    age: 47,
    married: true,

    friends: ['Avraham', 'Moshe', 'Gavriel'],
}
const Maya = {
    name: 'Maya',
    status: 'mom',
    age: 47,
    married: true,

    friends: ['Sara', 'Chana', 'Rachel'],
}
const Avigail = {
    name: 'Avigail',
    status: 'sister',
    age: 22,
    married: true,

    friends: ['Tamar', 'Liz'],
}
const Noa = {
    name: 'Noa',
    status: 'sister',
    age: 21,
    married: false,

    friends: ['Zofia', 'Michal', 'Sigal'],
}
const Rachel = {
    name: 'Rachel',
    status: 'sister',
    age: 19,
    married: false,

    friends: ['Hodaya', 'Esti'],
}
const Michael = {
    name: 'Michael',
    status: 'brother',
    age: 13,
    married: false,

    friends: ['Shlomo', 'Israel'],
}
const Yair = {
    name: 'Yair',
    status: 'brother',
    age: 6,
    married: false,

    friends: ['Yosef', 'Shimon', 'Dvir'],
}

const family = [David.name, Maya.name, Avigail.name, Noa.name, Rachel.name, Michael.name, Yair.name]

const friend = [David.friends, Maya.friends, Avigail.friends, Noa.friends, Rachel.friends, Michael.friends, Yair.friends]

for (let i in family) {
    console.log(family[i]);

}
for (let f in friend) {

    console.log(`${family[i]}'s friends are: ${friend[f]}`)
}

