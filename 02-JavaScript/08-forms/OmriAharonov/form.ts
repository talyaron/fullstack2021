const infoObj = {};

function handleSubmit(ev){
    ev.preventDefault();

    for (let data of ev.target){

        if(data.name !== 'submit')infoObj[data.name] = data.value;
        
    }
}

console.log(infoObj)