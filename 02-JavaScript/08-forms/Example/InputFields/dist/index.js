function handleInput(ev) {
    console.dir(ev);
    console.log(ev.target.valueAsNumber);
}
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev);
    var age = ev.target.elements.age.valueAsNumber;
    var name = ev.target.elements.name.value;
    console.log(age, name);
}
function handleChangeColor(ev) {
    var color = ev.target.value;
    document.body.style.background = color;
}
