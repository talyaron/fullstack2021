// function handleSumbit(ev){
//     ev.preventDefault();
//     const result:any = document.querySelector('#result');
//     const formObj:BMI ={};
//     // console.log(ev);
//     for(let field of ev.target){
//         // console.dir(field)
//         // console.log(field.name ,field.value)
//         if (field.name !== 'submit') formObj[field.name] = field.value;
//     }
//     console.log(formObj);
//     result.innerHTML = `your BMI is :${formObj.mass/(formObj.height*formObj.height)}`
// }
