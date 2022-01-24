const yonatan = {
    name: 'yonatan',
    age: 25,
    married: false,
    friends: ['kuna ' , 'micl ' , 'sabres']
};

const yair = {
    name: 'yair',
    age: 23,
    married: true,
    friends: ['pq ' , 'shira ' , 'nose']
};

const daniel = {
    name: 'daniel',
    age: 21,
    married: false,
    friends: ['yosshi ' , 'yoel ' , 'daivd']
};

const family = ['yonatan','yair','daniel'];

// for(let i = 0 ; i < family.length ; i++){
//     console.log(family[i].name);
// }


for(let i = 0 ; i < family.length ; i++){
    for(let j = 0 ; j < family.friends.length ; j++){
    console.log(family[i].name + 'had the following friends:' + family.friends[j] );
    }
}