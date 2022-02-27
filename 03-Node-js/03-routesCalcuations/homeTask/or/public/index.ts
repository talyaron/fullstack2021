axios.get("get-pics").then(({ data }) => {
    console.log(data);
});

function handleOrderSlider(ev) {
    const order = ev.target.value
    console.log(order)

    axios.get(`get-pics?order=${order}`).then(({ data }) => {
        console.log(data);
        const root = document.querySelector("#root");
        let html = ""
        if(Array.isArray(data)){
        data.forEach((pic) => {
            html += `<h1>${pic.name}</h1>
            <img src=${pic.picUrl}></img>`

        });
        root.innerHTML = html
        }else{
            console.log("it isnt an array")

        }
    })


}