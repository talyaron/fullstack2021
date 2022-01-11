function handleSubmit(ev){
    ev.preventDefault();
    const formObj ={}
    console.log(ev)
    for(let filed of ev.target){
        console.dir(filed)
        console.log(filed.name, filed.value)
        if(filed.name!== 'submit') formObj[filed.name]= filed.value;
    }
    console.log(formObj)
}