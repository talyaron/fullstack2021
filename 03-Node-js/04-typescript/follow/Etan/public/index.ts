function initApp() {
  getAllData();
}
async function handleAddStudent(ev) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const {data} = await axios.post('/add-student', {name:name})
    console.log(data);
    ev.target.reset();
    renderData(data)
    
}
function handleDelete(studentId) {
    console.log(studentId);
    
}
async function getAllData() {
  const {data} = await axios.get("/get-all-data");
  console.log(data);
  renderData(data);
}

function renderData(data: Array<any>) {
  let html = "";
  data.forEach((student) => {
      html += 
    `<h1 onclick="handleDelete(${student.id})">${student.name}</h1>
    <p>${student.id}</p>`
});
const root= document.querySelector('#root')
root.innerHTML = html
}
