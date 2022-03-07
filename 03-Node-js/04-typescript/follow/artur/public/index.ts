function initApp(){
    getAllData();
}


async function getAllData(){
    axios.get(`get all-data`).then()
}
function renderData(){
    let html ="";
    Data.array.forEach(student => {
        html+=`<p>${student} </p>`
        
    });
}
function HandleAddStudent(ev){
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const data
}