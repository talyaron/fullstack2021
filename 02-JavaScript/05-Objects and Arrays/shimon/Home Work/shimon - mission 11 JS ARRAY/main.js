//question 1
const ShimonH ={
    name: "Shimon",
    family: "Hasidim",
    age: 33,
    position: "Father",
    friends:["Michael","Meair","Eliran"],
}

const SaritH ={
    name: "Sarit",
    family: "Hasidim",
    age: 32,
    position: "Mother",
    friends: ["Michal","Dorit","Hagit"],
}

const AyalaH ={
    name: "Ayala",
    family: "Hasidim",
    age: 12,
    position: "Daughter",
    friends: ["Yaeli","Efrat","Shira"],
}

const EfratH ={
    name: "Efrat",
    family: "Hasidim",
    age: 10,
    position: "Daughter",
    friends:["Michal","Dorit","Hagit"],
}

const AvigailH ={
    name: "Avigail",
    family: "Hasidim",
    age: 8,
    position: "Daughter",
    friends: ["Yaeli","Efrat","Shira"],
}

//question 2

let hasidim_array=[ShimonH, SaritH, AyalaH, EfratH, AvigailH]
console.log(hasidim_array);


//question 3

let hasidim_name=[ShimonH.name, SaritH.name, AyalaH.name, EfratH.name, AvigailH.name]
for (let i in hasidim_name){
    console.log(hasidim_name[i])
}

//question 4
//Done

//question 5
let hasidim_frinds=[ShimonH.friends, SaritH.friends, AyalaH.friends, EfratH.friends, AvigailH.friends]
for (let i in hasidim_frinds){
    console.log(hasidim_name[i]+", had the following friends: ",hasidim_frinds[i])
}



