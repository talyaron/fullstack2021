var canvas = document.querySelector('#canvas');
var drawBoard = canvas.getContext("2d");
canvas.height = 100;
canvas.width = 200;
drawBoard.strokeStyle = "blue";
drawBoard.moveTo(20, 80);
drawBoard.lineTo(180, 80);
drawBoard.stroke();
drawBoard.beginPath();
drawBoard.strokeStyle = "darkblue";
var drawing = false;
function start(ev) {
    drawing = true;
    draw(ev);
}
function end() {
    drawing = false;
    drawBoard.beginPath();
}
function draw(ev) {
    if (!drawing)
        return;
    drawBoard.lineWidth = 2;
    drawBoard.lineCap = "round";
    var pos = getMousePos(canvas, ev);
    drawBoard.lineTo(pos.x, pos.y);
    drawBoard.stroke();
    drawBoard.beginPath();
    drawBoard.moveTo(pos.x, pos.y);
}
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mousemove', draw);
function getMousePos(canvas, ev) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top
    };
}
function handleSumbit(ev) {
    ev.preventDefault();
    var background = document.querySelector('#card_background');
    var name = document.querySelector('#card_name');
    var role = document.querySelector('#card_role');
    var image = document.querySelector('#card_pic');
    var ID = document.querySelector('#card_id');
    var DOB = document.querySelector('#card_DOB');
    var joined = document.querySelector('#card_joinded');
    var expire = document.querySelector('#card_expire');
    var uploadedPic = document.querySelector('#picture');
    var formObj = {};
    var signature = document.querySelector('#signature');
    var destCtx = signature.getContext('2d');
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var nextDate = (today.getFullYear() + 1) + '-' + (today.getMonth() + 7) + '-' + today.getDate();
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name !== 'submit') {
            formObj[field.name] = field.value;
        }
        if (field.value == "") {
            alert("you must fill in " + field.name);
            return;
        }
    }
    console.log(formObj);
    background.style.background = formObj.color;
    name.innerHTML = formObj.firstName + " " + formObj.lastName;
    role.innerHTML = formObj.role;
    image.style.backgroundImage = "url('" + URL.createObjectURL(uploadedPic.files[0]) + "')";
    ID.innerHTML = formObj.IDNum;
    DOB.innerHTML = formObj.DOB;
    joined.innerHTML = date;
    expire.innerHTML = nextDate;
    destCtx.drawImage(canvas, 0, 0);
}
