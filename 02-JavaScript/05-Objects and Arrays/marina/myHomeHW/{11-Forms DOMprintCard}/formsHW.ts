

// // const form: any = document.querySelector('.formWrapper');
// const formName: any = document.getElementById('nameF');
// const formId = document.getElementById('idF');
// const formDOB: any = document.getElementById('dobF');
// const formJoined: any = document.getElementById('joinedF');
// const formExpire: any = document.getElementById('expireF');

// // const card: any = document.querySelector('.card');
// const cardName: any = document.getElementById('personName');
// const cardId: any = document.getElementById('idC');
// const carDOB: any = document.getElementById('dobC');
// const carJoined: any = document.getElementById('joinedC');
// const carExpire: any = document.getElementById('expireC');




// function handleSubmit(e) {
//     e.preventDefault();

//     cardName.innerHTML = formName.value;
//     cardId.innerHTML = formId.value;
//     carDOB.innerHTML = formDOB.value;
//     carJoined.innerHTML = formJoined.value;
//     carExpire.innerHTML = formExpire.value;

//     console.log(e)

// }





interface Card {
    name?: string;
    idNumber?: number;
    joined?: number;
    expired?: number;
    dob?: number;
    signature?: CanvasDrawImage;
}


const sign: any = document.getElementById('signF');
const context: any = sign.getContext('2d');

let x: any = 0;
let y: any = 0;
let isDrawing: any = false;

sign.addEventListener('mousedown', (e) => {
    console.log(e)
    x = e.offsetX;
    y = e.offsetY;

    isDrawing = true
})

sign.addEventListener('mousemove', (e) => {
    if (isDrawing == true) {
        drawSign(context, x, y, e.offsetX, e.offsetY)
        x = e.offsetX;
        y = e.offsetY;
    }
})

sign.addEventListener('mouseup', (e) => {
    if (isDrawing == true) {
        isDrawing = false
    }
})

function drawSign(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'grey';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();

}

function handleSubmit(e) {

    e.preventDefault();
    const formObj = createFormObj(e.target);
    printCard(formObj);   
}

function createFormObj(form) {

    const formObj: Card = {};

    for (let inputField of form) {

        if (inputField.name !== 'submit') {

            formObj[inputField.name] = inputField.value;
            

        }
    }

    return formObj;
}


function printCard(obj) {

    const html = `<div class="card">
        <div class="card__logo">
            <img src="https://cdn-static.thetrustedinsight.com/assets_v2/images/misc/profile-cover.jpg" alt="">
        </div>

        <div class="card__ditails">
            <div class="card__ditails__imgName">
                <div class="card__ditails__imgName--img">
                    <img style="width: 150px;" src="https://i.pinimg.com/originals/2f/98/52/2f985280618decfef2137c8b7df35c3e.jpg" alt="">
                </div>

                <div class="card__ditails__imgName--name">
                    <h1 id="personName">${obj.name}</h1>
                    <p id="personDuty">Creative Manager</p>
                </div>
            </div>

            <div class="card__ditails__signature">
                <canvas id="signC">${obj.sign}</canvas>
                <h3>Yours Sincerely</h3>
                <div class="card__ditails__signature--barcode">
                    <img src="https://code-cache.com/en/wp-content/uploads/2021/09/codee15.jpg" alt="">
                </div>              
            </div>
        </div>

        <div class="card__id">
            <div class="id1">
                <div style="font-size: 1em;" class="card__id--idNumber">ID No</div>
                <div style="font-size: 0.9em;" id="idC" class="card__id--idNumber">${obj.idNumber}</div><br>
                <div style="font-size: 1em;" class="card__id--DOB">D.O.B.</div>
                <div style="font-size: 0.9em;" id="dobC" class="card__id--DOB">${obj.dob}</div>
            </div>

            <div class="id2">
                <div style="font-size: 1em;" class="card__id--joined">Joined date</div>
                <div style="font-size: 0.9em;" id="joinedC" class="card__id--joined">${obj.joined}</div><br>
                <div style="font-size: 1em;" class="card__id--expire">Expire date</div>
                <div style="font-size: 0.9em;" id="expireC" class="card__id--expire">${obj.expired}</div>
            </div>
        </div>
    </div> `;

    const root = document.getElementById('cardRoot');
    root.innerHTML = html;
}








