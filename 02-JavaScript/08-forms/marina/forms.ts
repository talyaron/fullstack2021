console.log('hi');

function handleSubmit (e) {
    e.preventDefault();
    console.log(e);

    let testObj = {};
    for(let input of e.target) {
        console.dir(input)
        console.log(input.name, input.value)
        if(input.name !=='submit') {
            if(input.type === 'number'){
                testObj[input.name] = input.valueAsNumber;
            } else{
                testObj [input.name] = input.value;
            }
            
        }

    }
    console.log(testObj);
}


