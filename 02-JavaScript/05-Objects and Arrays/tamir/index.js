let shoval = {
    name: 'shoval',
    lastName: 'dadon',
    age: 30,
    friends:['mai','rot'],
}
let aviel = {
    name: "aviel",
    lastName: 'dadon',
    age: 25,
    friends:['avner','nisim'],
}
let tamir = {
    name: "tamir",
    lastName: 'dadon',
    age: 24,
    friends:['avi','nir'],
}
let tair = {
    name: "tair",
    lastName: 'dadon',
    age: 26,
    friends:['yael','carlos'],
    
}
let family = [shoval, aviel, tamir, tair]
for (let info in family) {
    console.log(family[info]);
}


function tallmeabouthim(family) {
    if (family){
        console.log(`${family.name} ${family.lastName} ${family.age} and my friends are ${family.friends}`)
    }
};
tallmeabouthim(aviel)



