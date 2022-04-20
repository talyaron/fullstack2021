// מביאה את כל המידע מהשרת ומרנדרת על המסך
async function handleclickd(ev) {
    const { data } = await axios.get("/me")
    renderalldata(data)
    
}

// שולחת את הנתונים של הסטודנט לשרת
async function handleAddStudent(ev) {
    ev.preventDefault();
    const name = ev.target.elements.name.value
    const age = ev.target.elements.age.value
    const { data } = await axios.post("/add-student", { name: name, age: age })
    renderalldata(data)

    ev.target.reset();
}

// מעבירה את המספר זהות של הסטודנט לשרת
async function letdelete(id) {
    try {
        const { data } = await axios.delete("/delete-game", { data: { id } })
        renderalldata(data)
    } catch (err) {
        console.error(err)
    }
}

// מחלצת את המספר זהות מהסטודנט בעת לחיצה על מחיקה
function handledelete(id) {
    letdelete(id)
}

async function handlechange(ev) {
    try {
        const id = ev.target.id;
        const value = ev.target.value;
        const { data } = await axios.patch("/change-name", { id, name: value })
        renderalldata(data)
    } catch (err) {
        
    }
}

// מרדנדרת את כל המידע למסך
function renderalldata(data) {

    let html = ''
    data.forEach(boy => {
        html += `<div class='card'> 
        <p class='card__studentcard'> my name is ${boy.name} 
        and my age is ${boy.age} 
        <button  onclick="handledelete('${boy.id}')">delete</button></p>
        <p class='studentcard2'>want to rename the name of student
        <input type="text" id="${boy.id}" value='${boy.name}' placeholder="rename" onchange="handlechange(event)">
        </p>
        </div>`

    });
    const root = document.getElementById('root')
    root.innerHTML = html;

}