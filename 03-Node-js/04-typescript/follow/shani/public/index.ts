function initApp(){
    console.log("start")
    getAllData();
  
}
//we did console.log(start) to show how the function is async. That it 
//take time to run and wont show an answer or even undefined cause its 
//suspended until the promise is fulfilled

async function getAllData(){
    const {data} = await axios.get('/get-all-data');
    //why is data in {data} why is it considered an object?
    console.log(data);
    renderData(data);
}

async function handleAddStudent(ev){
    ev.preventDefault();
    const name=ev.target.elements.name.value 
    //elements is used in form
    const {data}=await axios.post('/add-student',{name:name, ok:true}); //body=data
    //what is the query here?
    console.log(data);
    renderData(data);
    ev.target.reset();

}

async function handleDelete(studentId){
    const {data}=await axios.post('/delete-student',{studentId}); //body=data
    console.log(studentId);
    renderData(data);
}

function renderData(data:Array<any>){
    let html=""
    data.forEach((student)=>{
        html+=`<p>${student.name} <button onclick="handleDelete('${student.id}')">Delete</button> </p>`
    });
    const root=document.querySelector("#root");
    root.innerHTML=html;
}