function initApp() {
  console.log("start");
  getAllData();
  console.log("end");
}

async function handleAddStudent(ev) {
  ev.preventDefault();
  const name = ev.target.elements.name.value;
  const { data } = await axios.post("/add-student", { name: name, ok: true }); //body = data
  
  renderData(data);
  ev.target.reset();
}
async function handleDelete(studnetId){
    console.log(studnetId)
    const {data}= await axios.post("/delete-student" , {studnetId, ok:true})
    console.log(data);
    renderData(data)
}

async function getAllData() {
  const { data } = await axios.get("/get-all-data");
 
  renderData(data);
}

function renderData(data: Array<any>) {
  let html = "";
  data.forEach((student) => {
    html += `<p>${student.name} <button onclick="handleDelete('${student.id}')">Delete</button></p>`;
  });
  const root = document.querySelector("#root");
  root.innerHTML = html;
}
