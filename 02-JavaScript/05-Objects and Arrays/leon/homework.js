const leon ={
    name:"leon",
    lastName:"malul",
    age:28,
    city:"ashdod"
}
const dad ={
    name:"yehiel",
    lastName:"malul",
    age:58,
    city:"ashdod"
}
const mom ={
    name:"alis",
    lastName:"malul",
    age:54,
    city:"ashdod"
}
const brother ={
    name:"shlomi",
    lastName:"malul",
    age:25,
    city:"ashdod"
}

let myfamily = [leon,dad,mom,brother];{
    for (let i=0;i<myfamily.length;i++)
    console.log(myfamily[i].name);
}

leon.friends=['moshiko','avi','shahar'];
dad.friends=['joe','dan','avi'];
mom.friends=['lin','jin','dalia'];
brother.friends=['joe','moshe','din'];


let member= 0; 
    for(let i=0; i<myfamily.length; i++){
        console.log(myfamily[i].name +' friends are ' + myfamily[i].friends);
        
    }

    function myFamily(myFamilyMember){
    
    myFamilyMember={
            name:'$[]',
            lastName:'$[]',
            age:'$[]',
            city:'$[]'
        }
        return console.log(myFamilyMember);
    }
        
