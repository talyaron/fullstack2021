console.log('hi')

function handleSubmit(ev) {
    ev.preventDefault();
    const formObj = {}
    console.log(ev)

    for (let field of ev.target) {
        console.dir(field)
        console.log(field.type, field.name, field.value)

        if (field.name !== 'submit') {
            if(field.type === 'number'){
                formObj[field.name] = field.valueAsNumber;
            } else{
                formObj[field.name] = field.value;
            }
            
        }
    }

    console.log(formObj)


}