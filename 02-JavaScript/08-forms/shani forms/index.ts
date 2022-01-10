

function handleSubmit(ev) {
    ev.preventDefault();
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

interface BMI{
    mass?:number;
    height?:number;
}

function bmicalculate(ev) {
    ev.preventDefault();
    const result:any = document.querySelector('#result');
    const formObj:BMI = {};
    console.log(ev)

    for(field of ev.target){

        if(field.name !== 'submit') formObj[field.name] = field.value;
    }
    console.log(formObj);
    

    const mass = formObj.mass;
    let height = formObj.height;
    result.innerHTML = `your BMI is :${mass/(height*height)}`
   

}
