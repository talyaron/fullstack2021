const naama={
    name: 'naama',
    lastName: 'foyer',
    isMy: 'mom',
    age: 51,
    occuption: 'teacher',
    
    
}
const tzvika={
    name: 'tzvika',
    lastName: 'foyer',
    isMy: 'dad',
    age: 52,
    occuption: 'dba at intel',
    
    
}
const yedidia={
    name: 'yedidya',
    lastName: 'foyer',
    isMy: 'brother',
    age: 26,
    occuption: 'student and working at an organiztion',
    
    
}
const orelRoni={
    name: 'orel roni',
    lastName: 'foyer',
    isMy: 'sister in law',
    age: 23,
    occuption:'student',
    
    
}
const maayan={
    name: 'maayan',
    lastName: 'foyer',
    isMy: 'sister',
    occuption: 'student and interior design',
    
    
}
const shlomo={
    name: 'shlomo',
    lastName: 'foyer',
    isMy: 'brother',
    age: 19,
    occuption: 'student',
    
    
}
const yonatan={
    name: 'yonatan',
    lastName: 'foyer',
    isMy: 'brother',
    age: 16,
    occuption: 'student',

    
}
const roee={
    name: 'roee',
    lastName: 'foyer',
    isMy:'brother',
    age: 8, 
    occuption: 'student',
    
    
}
let family = [naama, tzvika, yedidia, orelRoni, maayan, shlomo, yonatan, roee];
  for(let i=0; i<family.length; i++){
        console.log(family[i].name);
    }

    naama.friends = ['sarah', ' sarah', ' sarah', ' or'];
    tzvika.friends = ['yossi', ' nadav', ' eli', ' shlomi'];
    yedidia.friends = ['maor', ' maor', ' ariel', ' avinoam'];
    orelRoni.friends = ['esthar', ' miriam', ' netta', ' hadassah'];
    maayan.friends = ['shirel', ' naama', ' tal', ' batzi'];
    shlomo.friends = ['ori', ' matan', ' yosef', ' yedidia'];
    yonatan.friends = ['ofek', ' misgav', ' danielle', ' yehuda'];
    roee.friends = ['itzhak', ' maoz', ' dvir', ' yehuda'];
 let member='$[]'; 
    for(let i=0; i<family.length; i++){
        console.log(family[i].name +' friends are ' + family[i].friends);
        
    }
  
function myFamily(myFamilyMember){
    
myFamilyMember={
    mame: '$[]',
    lastName:'$[]',
    isMy: '$[]',
    age: '$[]',
    occuption:'$[]',
    friends:'$[]'
}
  return(myFamilyMember);  

}