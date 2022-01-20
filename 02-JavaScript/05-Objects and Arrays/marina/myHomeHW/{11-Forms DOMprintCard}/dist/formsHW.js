// // const form: any = document.querySelector('.formWrapper');
// const formName: any = document.getElementById('nameF');
// const formId = document.getElementById('idF');
// const formDOB: any = document.getElementById('dobF');
// const formJoined: any = document.getElementById('joinedF');
// const formExpire: any = document.getElementById('expireF');
var sign = document.getElementById('signF');
var context = sign.getContext('2d');
var x = 0;
var y = 0;
var isDrawing = false;
sign.addEventListener('mousedown', function (e) {
    console.log(e);
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});
sign.addEventListener('mousemove', function (e) {
    if (isDrawing == true) {
        drawSign(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});
sign.addEventListener('mouseup', function (e) {
    if (isDrawing == true) {
        isDrawing = false;
    }
});
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
    var formObj = createFormObj(e.target);
    printCard(formObj);
}
function createFormObj(form) {
    var formObj = {};
    for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
        var inputField = form_1[_i];
        if (inputField.name !== 'submit') {
            formObj[inputField.name] = inputField.value;
        }
    }
    return formObj;
}
function printCard(obj) {
    var html = "<div class=\"card\">\n        <div class=\"card__logo\">\n            <img src=\"https://cdn-static.thetrustedinsight.com/assets_v2/images/misc/profile-cover.jpg\" alt=\"\">\n        </div>\n\n        <div class=\"card__ditails\">\n            <div class=\"card__ditails__imgName\">\n                <div class=\"card__ditails__imgName--img\">\n                    <img style=\"width: 150px;\" src=\"https://i.pinimg.com/originals/2f/98/52/2f985280618decfef2137c8b7df35c3e.jpg\" alt=\"\">\n                </div>\n\n                <div class=\"card__ditails__imgName--name\">\n                    <h1 id=\"personName\">" + obj.name + "</h1>\n                    <p id=\"personDuty\">Creative Manager</p>\n                </div>\n            </div>\n\n            <div class=\"card__ditails__signature\">\n                <canvas id=\"signC\">" + obj.sign + "</canvas>\n                <h3>Yours Sincerely</h3>\n                <div class=\"card__ditails__signature--barcode\">\n                    <img src=\"https://code-cache.com/en/wp-content/uploads/2021/09/codee15.jpg\" alt=\"\">\n                </div>              \n            </div>\n        </div>\n\n        <div class=\"card__id\">\n            <div class=\"id1\">\n                <div style=\"font-size: 1em;\" class=\"card__id--idNumber\">ID No</div>\n                <div style=\"font-size: 0.9em;\" id=\"idC\" class=\"card__id--idNumber\">" + obj.idNumber + "</div><br>\n                <div style=\"font-size: 1em;\" class=\"card__id--DOB\">D.O.B.</div>\n                <div style=\"font-size: 0.9em;\" id=\"dobC\" class=\"card__id--DOB\">" + obj.dob + "</div>\n            </div>\n\n            <div class=\"id2\">\n                <div style=\"font-size: 1em;\" class=\"card__id--joined\">Joined date</div>\n                <div style=\"font-size: 0.9em;\" id=\"joinedC\" class=\"card__id--joined\">" + obj.joined + "</div><br>\n                <div style=\"font-size: 1em;\" class=\"card__id--expire\">Expire date</div>\n                <div style=\"font-size: 0.9em;\" id=\"expireC\" class=\"card__id--expire\">" + obj.expired + "</div>\n            </div>\n        </div>\n    </div> ";
    var root = document.getElementById('cardRoot');
    root.innerHTML = html;
}
