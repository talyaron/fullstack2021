

const mather= {
    firstname: 'chani',
    last: 'cohen',
    adult: true,
    age: 32,

}


const father= {
    firstname: 'chaim',
    last: 'cohen',
    adult: true,
    age: 34,

}

const childa= {
    firstname: 'menachem',
    last: 'cohen',
    adult: false,
    age: 6,
}

const childb= {
    firstname: 'hodaya',
    last: 'cohen',
    adult: false,
    age: 5,

}

const childc= {
    firstname: 'meir',
    last: 'cohen',
    adult: false,
    age: 2,

}

const childd= {
    firstname: 'sarahila',
    last: 'cohen',
    adult: false,
    age: 3 + "  month",
}



function tellAboutThefamily(family) {
   { if (family.adult)
        console.log(`${family.firstname} ${family.last} ${family.age} is years old he is adult`)
    else
            console.log (`${family.firstname} ${family.last} ${family.age} years old is child`)                
        
}
};

tellAboutThefamily(mather);
const freinds= ['sara' , 'miri', 'ruty']
console.log ('the freinds of chani: '+freinds)
tellAboutThefamily(father);
const freindsc= ['noam', 'moshe', 'yoni']
console.log ('the freinds of chaim: '+freindsc)
tellAboutThefamily(childa);
const freindsn= ['shmuel' , 'yosi', 'israel']
console.log ('the freinds of menachem: '+freindsn)
tellAboutThefamily(childb);
const freindsh= ['sara' , 'riki', 'ruti']
console.log ('the freinds of hodaya: '+freindsh)
tellAboutThefamily(childc);
const freindsm= ['chaim' , 'yosi', 'david']
console.log ('the freinds of meir: '+freindsm)
tellAboutThefamily(childd);
const freindss= ['efrat' , 'chaya', 'chani']
console.log ('the freinds of sara: '+freindss)

const fam= [mather, father, childa, childb, childc, childd]
for (let y in fam ){
console.log (fam[y++])
}
const fre= [freinds,freindsc, freindsn,freindsh, freindsm, freindss]
const first=[mather.firstname,father.firstname,childa.firstname,childb.firstname,childc.firstname,childd.firstname]
const all=first.concat(fre);

for (let x in all){
 if (x<6)
      console.log ('the freind of '+first[x]+ ' is: ' +fre[x])
      
    }
