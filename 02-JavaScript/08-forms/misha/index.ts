

function handleSubmit(ev) {

    ev.preventDea();
    const formObj = {};
    debugger;
    for (let field of ev.target) {

        console.log(field.name, field.value)
        if (field.name !== 'submit') formObj[field.name] = field.value;

    }

    console.log(formObj);

}