function initApp() {
    getAllData();
}
async function handleAddStudent(ev) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;

    const {data} = await axios.post('/add-student', {name:name ,ok:true})

    

    renderData(data)

    ev.target.reset();
}
function getAllData() {
    axios.get("/get-student").then(({ data }) => {
        renderData(data);
    })
}
function renderData(data) {// here we need to elements 1) root 2) the data itself

    const root = document.getElementById('root')
    let html = '';
    data.forEach(student => {
        html += ` <h1> the name is ${student.name} </h1>`
    })
    root.innerHTML = html;
}