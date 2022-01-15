


const dori = {
    name: 'Dori',
    lastname: 'Ziv',
    kinship: 'husbend',
    friends: [' Or', ' Dudu', ' Libat', ' Shai'],
}


const anna = {
    name: 'Anna',
    lastname: 'Kirzhner',
    kinship: 'mom',
    friends: [' Alex', ' Sarah', ' David']
}

const valentin = {
    name: 'Valentin',
    lastname: 'Kirzhner',
    kinship: 'dad',
    friends: ['Vic', ' Gera', ' Sava'],
}

 

const andrey = {
    name: 'Andrey',
    lastname: 'Katz',
    kinship: 'brother',
    friends: [' Liat', ' Gersh', ' Zoi'],
}


const family = ['Dori', 'Anna', 'Valentin', 'Andrey'];

for (let i in family){
    
    console.log(family [i]);
}

console.log(dori['name'] + ' has the folowing friends: ' + dori.friends);
console.log(anna.name +'`s friends are: ' +  anna.friends);
console.log(valentin.friends + ' are an old friends of ' + valentin ['name'])
console.log('I know well ' + andrey ['name']+'`s friends: ' + andrey.friends);

function tellAboutFamily (family){

    console.log(`${family ['name']} ${family ['lastname']} is my ${family ['kinship']}`)
}

tellAboutFamily(andrey);
tellAboutFamily(anna);


function aboutFamily (family){

    return (`${family ['name']} is my ${family.kinship}`);
}

console.log(aboutFamily(dori));
console.log(aboutFamily(valentin));