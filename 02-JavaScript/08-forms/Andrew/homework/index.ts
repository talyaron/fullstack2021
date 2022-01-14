
const canvas: any = document.querySelector('#canvas');
const drawBoard = canvas.getContext("2d");
canvas.height = 100;
canvas.width = 200;

drawBoard.strokeStyle = "blue";
drawBoard.moveTo(20, 80);
drawBoard.lineTo(180, 80);
drawBoard.stroke();

drawBoard.beginPath();
drawBoard.strokeStyle = "darkblue";

let drawing = false;

function start(ev) {
    drawing = true;
    draw(ev);
}

function end() {
    drawing = false;
    drawBoard.beginPath();
}

function draw(ev) {
    if (!drawing) return;
    drawBoard.lineWidth = 2;
    drawBoard.lineCap = "round";
    let pos = getMousePos(canvas, ev);

    drawBoard.lineTo(pos.x, pos.y);
    drawBoard.stroke();
    drawBoard.beginPath();
    drawBoard.moveTo(pos.x, pos.y);
}

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mousemove', draw);

function getMousePos(canvas, ev) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top
    };
}

function handleSumbit(ev) {
    ev.preventDefault();
    const outputs = document.querySelectorAll('.output');
    const uploadedPic: any = document.querySelector('#picture');

    const signature: any = document.querySelector('#signature');
    let destCtx = signature.getContext('2d');

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const nextDate = (today.getFullYear() + 1) + '-' + (today.getMonth() + 7) + '-' + today.getDate();

    const formObj: any = {};
    const outputsObj: any = {};

    for (let field of outputs) {
        outputsObj[field.id] = field;
    }
    for (let field of ev.target) {
        if (field.name !== 'submit') {
            formObj[field.name] = field.value;
        }
        if (field.value == "") {
            alert(`you must fill in ${field.name}`)
            return;
        }
    }
    console.log(formObj);

    destCtx.drawImage(canvas, 0, 0);

    outputsObj.card_background.style.background = formObj.color;
    outputsObj.card_name.innerHTML = `${formObj.firstName} ${formObj.lastName}`;
    outputsObj.card_role.innerHTML = formObj.role;
    outputsObj.card_pic.style.backgroundImage = `url('${URL.createObjectURL(uploadedPic.files[0])}')`;
    outputsObj.card_id.innerHTML = formObj.IDNum;
    outputsObj.card_DOB.innerHTML = formObj.DOB;
    outputsObj.card_joined.innerHTML = date;
    outputsObj.card_expire.innerHTML = nextDate;
}
