
function handleSubmit(ev) {
    ev.preventDefault();
    const formObj = {}
    console.log(ev)

    for (let i of ev.target) {
        console.dir(i)
        console.log(i.name, i.value)
        
        if (i.name !== 'submit') formObj[i.name] = i.value;
    }

    console.log(formObj)


}