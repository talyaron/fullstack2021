function handleInput(ev){
  
    console.dir(ev);
    console.log(ev.target.valueAsNumber)

}

function handleSubmit(ev){
    ev.preventDefault();
    console.dir(ev);

    const age = ev.target.elements.age.valueAsNumber;
    const name = ev.target.elements.name.value;

    console.log(age, name)
}

function handleChangeColor(ev){
   
    const color = ev.target.value; 
    document.body.style.background = color;
}