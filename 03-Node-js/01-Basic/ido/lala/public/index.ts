function calc(ev) : void{
    ev.preventDefault();

    let numberOne
    let numberTwo
    let action;
    let sum = 0;

    for(let field of ev.target){
        if(field.name == "numberOne"){
            numberOne = field.value
        }else if(field.name == "numberTwo"){
            numberTwo = field.value
        }else if(field.name == "selectAction")
        action = field.value
    }
    if(action == "plus"){
        sum = numberOne+numberTwo
    }else if(action == "minus"){
        sum = numberOne - numberTwo
    }else if(action == "multi"){
        sum = numberOne*numberTwo
    }else if(action == "split"){
        sum = numberOne/numberTwo
    }
    document.querySelector('.result').textContent = `${sum}`

    ev.target.reset()
}