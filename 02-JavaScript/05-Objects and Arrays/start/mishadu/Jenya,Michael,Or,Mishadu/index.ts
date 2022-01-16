/// ------- 1 ------- ///

// interface Object{
//     a?:number;
//     b?:number;
//     c?:number;
// }

const obj:Object = {};

// obj.a = 7;
// obj["b"] = 19;

// let c = 'yes';

// obj[c] = 2000;


// console.log(obj);


/// ------- 2 ------ ///

interface books{

    Author: string;
    Pyear: number;
    Pages: number;

}


const keys = ['Author', 'PYear', 'Pages'];

const values = ['J K Rowlings' , 2001, 430];

const formObj = {};

for ( let i = 0 ; i < keys.length ; i++) {

    formObj[keys[i]] = values[i];

}

console.log(formObj);








