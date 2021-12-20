//1
let KfirObject={
    id:1,
    name:'Kfir',
    hobby:'football'
}

let YaelObject={
    id:2,
    name:'Yael',
    hobby:'reality shows'
}

let MayaObject={
    id:3,
    name:'Maya',
    hobby:'painting'
}

let NoamObject={
    id:4,
    name:'Noam',
    hobby:'sony-playstation'
}

let ShiraObject={
    id:5,
    name:'Shira',
    hobby:'singing'
}

//--------------------------------------------------------------------------------------------------------
//2
let family = [];
family.push(KfirObject,YaelObject,MayaObject,NoamObject,ShiraObject);
//--------------------------------------------------------------------------------------------------------
//3
for (let index = 0; index < family.length; index++) {
    console.log(`${family[index].name}`);
}
//--------------------------------------------------------------------------------------------------------
//4
// Array to be inserted
KfirObject.friends=['Shmulik','Yuval','Elad'];
YaelObject.friends=['Lina', 'Yael', 'Roni'];
MayaObject.friends=['Mika', 'Roni', 'Noa'];
NoamObject.friends=['Liam','Ofri','Amitay'];
ShiraObject.friends=['Noam','Ariel','Alma'];
//--------------------------------------------------------------------------------------------------------
//5
for (i = 0; i < family.length; i++) {
    console.log(`${family[i].name}'s friends are: ${family[i].friends}`);
}
//--------------------------------------------------------------------------------------------------------
//6
let memberObject={
    id:undefined,
    name:undefined,
    hobby:undefined,
    friends:undefined
}
const newFamily=[];
function addFamilyMember(id,name,hobby,arrayFriends) {
     let newFamilyMember=Object.create(memberObject);
     newFamilyMember.id=id;
     newFamilyMember.name=name;
     newFamilyMember.hobby=hobby;
     newFamilyMember.friends=arrayFriends;
     

     newFamily.push(newFamilyMember);

     for (i = 0; i < newFamily.length; i++) {
        console.log(`${newFamily[i].name}`);
    }
     
    for(i = 0; i < newFamily.length; i++){
        console.log(`${newFamily[i].name}'s friends are: ${newFamily[i].friends}`);
    }
     return newFamilyMember;
    }

//addFamilyMember(3,'Noam','sonyplastation',['Liam','Amitay','Ofri']);
 