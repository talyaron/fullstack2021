const obj = {}

function handleSumbit(ev){
    ev .preventDefault()


    for(let i of ev.target){
        // console.dir(i);
        if(i.value !== "send"){
            obj[i.name] = i.value
        }     

    }
    console.dir(obj)
}           