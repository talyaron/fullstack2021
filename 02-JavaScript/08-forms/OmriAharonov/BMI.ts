interface info{
    weight?: number;
    height?: number;
};

function handleSubmit(ev) {
    ev.preventDefault();
    const result:any = document.querySelector('.bmi');

    const bmi:info = {};

    for (let elem of ev.target) {

        if (elem.name !== 'submit') bmi[elem.name] = elem.valueAsNumber;
        
    }

    result.innerHTML = `your BMI is: ${bmi.weight /(((bmi.height)/100)*((bmi.height)/100))}`;

}










