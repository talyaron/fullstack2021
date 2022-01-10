console.log('hi')

function handleSubmit(ev) {
    ev.preventDefault(); //prevent refresh

    const formObj = {}
    console.log(ev)

    for (let field of ev.target) {
        console.dir(field)
        console.log(field.type, field.name, field.value)

        if (field.type !== 'submit') {
            if (field.type === 'number') {
                formObj[field.name] = field.valueAsNumber;
            } else if (field.type === 'radio') {
                if (field.checked) {
                    formObj[field.name] = field.value;
                }
            }

            else {
                formObj[field.name] = field.value;
            }


        }
    }

    console.log(formObj)


}