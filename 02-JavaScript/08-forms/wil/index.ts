function handleSubmit(ev) {
    ev.preventDefault ();
    const formObj = {}

    for (let field of ev.target) {
        console.dir(field)
        console.log(field.type , field.name, field.value)

        if(field.name !=='submit') formObj[field.name]= field.value;
    }
    console.log(formObj)
}
