

function createCard(event) {

    // event.preventDefault();
    const formObj = {};
    for (let field of event.target) {

        // console.log(field.name, field.value)
        if (field.name !== 'Submit') formObj[field.name] = field.value;

    }

    console.log(formObj);
    // const fname = formObj.name;
    // console.log(fname);
    // console.log(formObj[1]);

}

console.log(formObj.name);




// fname.innerHTML = formObj[0];