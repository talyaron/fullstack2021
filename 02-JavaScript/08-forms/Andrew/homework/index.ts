
    const canvas:any = document.querySelector('#canvas');
    const drawBoard = canvas.getContext("2d");
    canvas.height = 100;
    canvas.width = 200;

    drawBoard.strokeStyle = "blue";
    
    drawBoard.moveTo(20,80);
    drawBoard.lineTo(180,80);
    drawBoard.stroke();
    drawBoard.beginPath();
    drawBoard.strokeStyle = "darkblue";

    let drawing = false;
    function start(ev){
        drawing = true;
        draw(ev);
    }
    function end(){
        drawing = false;
        drawBoard.beginPath();
    }
    function draw(ev){
        if(!drawing) return;
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
    const background:any = document.querySelector('#card_background');
    const name = document.querySelector('#card_name');
    const role = document.querySelector('#card_role');
    const image:any = document.querySelector('#card_pic');
    const ID = document.querySelector('#card_id');
    const DOB = document.querySelector('#card_DOB');
    const joined = document.querySelector('#card_joinded')
    const expire = document.querySelector('#card_expire')
    const uploadedPic:any = document.querySelector('#picture');
    const formObj:any = {} ;
    const signature:any = document.querySelector('#signature');
    let destCtx = signature.getContext('2d');
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let nextDate = (today.getFullYear()+1)+'-'+(today.getMonth()+7)+'-'+today.getDate();

    for (let field of ev.target) {
        if (field.name !== 'submit') {
            formObj[field.name] = field.value;
        }
        if (field.value == ""){
            alert(`you must fill in ${field.name}`)
            return;
        }
    }
    console.log(formObj);

    
    background.style.background = formObj.color;
    name.innerHTML = `${formObj.firstName} ${formObj.lastName}`;
    role.innerHTML = formObj.role;
    image.style.backgroundImage = `url('${URL.createObjectURL(uploadedPic.files[0])}')`;
    ID.innerHTML = formObj.IDNum;
    DOB.innerHTML = formObj.DOB;
    joined.innerHTML = date;
    expire.innerHTML = nextDate;

    destCtx.drawImage(canvas, 0, 0);
}
