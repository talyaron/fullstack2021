console.log(`hi`);

function handlesubmit(ev){
    ev.preventDefault();
    console.log(ev);

    for(let field of ev.target){
        console.dir(field)
        
    }
    
}