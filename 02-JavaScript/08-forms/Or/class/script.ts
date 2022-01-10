function Submit(ev) {
    ev.preventDefault();
    console.dir(ev)
    const obj = {}

    for (let content of ev.target) {
        console.log(content.name, content.value)
        if (content.name !== `submit`){
             obj[content.name] = content.value
        }
    }
    console.log(obj)
}