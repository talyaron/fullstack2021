


interface BMI{
    mass?:number;
    height?:number;
}


function handleSumbit(ev){
    ev.preventDefault();
    const result:any = document.querySelector('#result');
    
    const formObj:BMI ={};

    // console.log(ev);

    for(let field of ev.target){
        // console.dir(field)
        // console.log(field.name ,field.value)
        
        if (field.name !== 'submit') formObj[field.name] = field.value;
        
    }
    console.log(formObj);
    

    

    const mass = formObj.mass;
    let height = formObj.height;
    result.innerHTML = `your BMI is :${mass/(height*height)}`
    
}
