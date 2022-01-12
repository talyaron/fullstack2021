const info = {};

function handleSubmit(ev){
    ev.preventDefault();
    for(let elem of ev.target){

        if(elem.name !== 'submit')info[elem.name] = elem.valueAsNumber;
        //console.dir(elem)
    }

  
}

function calculateBmi(obj){
    let calc = (obj.weight / ((obj.height * obj.height)/100))
}

const result = calculateBmi(info);
document.querySelector('bmi').innerHTML = `${result}`

// console.log(info);
// console.dir(info);





