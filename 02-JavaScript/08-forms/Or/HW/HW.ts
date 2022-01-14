function handleSumbit(ev){
    ev.preventDefault();
    const name = document.getElementById('name');
    const userName = document.getElementById('userName');
    const phone = document.getElementById('phone');
    const date = document.getElementById('date');
    const ID = document.getElementById('ID');
    const formobj:any= {};
    for (let content of ev.target) {
        console.log(content.name, content.value)
        if (content.name !== `submit`){
            formobj[content.name] = content.value
        }
    }
    console.log(formobj)

    name.innerHTML=formobj.name
}