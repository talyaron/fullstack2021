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

const family = [David, Maya, Avigail, Noa, Rachel, Michael, Yair]


for (let i in family) {

    console.log(family[i].name);

    console.log(`${family[i].name}'s friends are: ${family[i].friends}`)
}

