const fname = document.getElementById('fname')

function createCard(event) {
    // event.preventDefault();

    const formObj:any = {};
    for (let field of event.target) {

        if (field.name !== 'Submit') formObj[field.name] = field.value;

    }

    fname.innerHTML = `${formObj.name}`
}





// fname.innerHTML = formObj[0];