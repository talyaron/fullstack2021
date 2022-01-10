
interface BMI{
    weight?:number;
    height?:number;
}

function Submit(ev) {
    ev.preventDefault();
    const formObj = {}
    console.log(ev)
    const result:any = document.querySelector('#result');


    for (let field of ev.target) {
        console.dir(field)
        console.log(field.type, field.name, field.value)


        if (field.name !== 'submit') {
            if (field.type === 'number') {
                formObj[field.name] = field.valueAsNumber;
            } else {
                formObj[field.name] = field.value;
            }

        }
    }

    console.log(formObj)
const weight= formObj.weight;
const height = formObj.height;
result.innerHTML=weight/(height*height)

}