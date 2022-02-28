function initApp() {
    console.log("start");
    getAllData();
    console.log("end");
  }
  
  async function handleAddStudent(ev) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const { data } = await axios.post("/add-student", { name: name, ok: true }); //body = data
    console.log(data);
    renderData(data);
    ev.target.reset();
  }
  
  async function getAllData() {
    const { data } = await axios.get("/get-all-data");
    console.log(data);
    renderData(data);
  }
  
  function renderData(data: Array<any>) {
    let html = "";
    data.forEach((student) => {
      html += `<p>${student.name}</p>`;
    });
    const root = document.querySelector("#root");
    root.innerHTML = html;
  }
  