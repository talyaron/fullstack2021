async function handledata(ev) {
    const { data } = await axios.get("/get-data")
    console.log(data);
    renderdata(data)

}

async function handledelete(id) {
    const { data } = await axios.delete("/delete-data", { data: { id } })
    renderdata(data)
}

async function handleregister(ev) {
    ev.preventDefault();
    let username = ev.target.elements.username.value
    let age = ev.target.elements.age.value
    const { data } = await axios.post('/register', { username, age })
    console.log(data);
}

function renderdata(data) {
    let html = ""
    data.forEach(data => {
        html += `<P onclick='handledelete("${data.id}")'>${data.name}<button>delete</button></p>`
    });
    const root = document.getElementById('root')
    root.innerHTML = html
}