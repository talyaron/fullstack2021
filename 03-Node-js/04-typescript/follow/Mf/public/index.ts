async function handleAddStudents(ev) {

    ev.preventDefault()
    const studentName = ev.target.elements.name.value;

    const {data} = await axios.post('/addStudent', {name: studentName});
    const root = document.querySelector("#root")
    
    render(root, data)
    ev.target.reset();
}

async function handleDelete(id){
    const {data} = await  axios.post('/deleteStudent', {id});
    const root = document.querySelector("#root")
    render (root, data);
}

function render (root, data){
    let html = '';

    data.forEach(student => {
        html += `<div class="card">
        <p>${student.name}</p>
        <button onclick="handleDelete('${student.id}')">Delete</button>
        </div>`
        
    });
    root.innerHTML = html;
}



