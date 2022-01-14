
function handleSubmit(ev){
    // ev.preventDefault();
    const formObj = {}
    console.log(ev)

    for (let field of ev.target) {
        console.dir(field)
        console.log(field.name, field.value)
        
        if (field.name !== 'submit') formObj[field.name] = field.value;
    }

    console.log(formObj)


}
