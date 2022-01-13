interface Card {
    image?: File;
    name?: string;
    dept?: string;
    idNum?: number;
    date?: number;
    email?: string;
    phone?: number;
}

function handleSubmit(ev) {
    ev.preventDefault();
    
    const form = ev.target;
    const formObj = createFormObj(form);
    printCard(formObj);


}

function createFormObj(form){
    const formObj: Card = {};

    for (let inputField of form) {
       
        if (inputField.id !== 'preview') {
            
            formObj[inputField.name] = inputField.value;
        }
    }

    return formObj;
}



function loadImage(e) {
    const image = document.getElementById('imgDisplay');
    // image.src = URL.createObjectURL(e.target.files[0]);
}

function printCard(obj){
    
    const html = `<div class="card">
    <h3>${obj.name}</h3>
    <p>Dept: ${obj.dept}</p>
    </div>`;

    const root = document.querySelector('#cardRoot');

    root.innerHTML = html;

    
}