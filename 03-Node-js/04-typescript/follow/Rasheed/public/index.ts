function initApp(){
    console.log('start')
    getAllData();
    console.log('end')
}

async function handleAddStudent(ev){
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    let {data} = await axios.post('/add-student',{name:name,ok:true})
    console.log(data)
    renderData(data)

    ev.target.reset();

}

async function getAllData(){
   let {data} = await axios.get('/get-all-data')
   console.log(data);
   renderData(data);
}

function renderData(data:Array<any>){
    let html = '';
    data.forEach(student =>{
        html +=`<p>${student.name} <button onclick="handleDelete('${student.id}')">delete</button></p>`
    });
    const root = document.querySelector('#root');
    root.innerHTML = html;
}

async function handleDelete(id){
    let {data} = await axios.post('/add-student',{id:id})
 console.log(data)
 renderData(data);
}