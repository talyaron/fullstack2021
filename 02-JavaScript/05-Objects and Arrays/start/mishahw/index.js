const tanya = {

    name: "tanya",
    lname: "balukh",
    age: 54,
    duty: "mom",
    friends : ["simcha", "anat", "aviva", "moses"]

}

const eva = {

    name: "eva",
    lname: "balukh",
    age: 16,
    duty: "sister",
    friends : ["dana", "dolev", "alex", "george"]

}

const pasha = {

    name: 'pasha',
    lname: 'dubovyk',
    age: 35,
    duty: "brother",
    friends : ["shlomi", "saly", "yan", "kosta"]

}

const anatoliy = {

    name: "anatoliy",
    lname: "dubovyk",
    age: 54,
    duty: "father",
    friends : ["nina", "david", "shlomi", "joseph"]

}

const nadya = {

    name: "nadya",
    lname: "titarenko",
    age: 78,
    duty: "grandmom",
    friends : ["andrey", "tima", "rinat", "nicole"]

}

const vasily = {

    name: "vasily",
    lname: "titarenko",
    age: 79,
    duty: "grandad",
    friends : ["andrey", "tima", "yossi", "kevin"]

}

const family = [tanya, eva, pasha, anatoliy, nadya, vasily];


function familyfriends(family){
for( let i in family ){


    console.log(`${family[i].name} has the following friends: ${family[i].friends}`);

}
}




