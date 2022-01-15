var form = document.querySelector('.wrapper');
var card = document.querySelector('.wrapper2');
var fname = document.getElementById('fname');
var date = document.getElementById('carddate');
var gend = document.getElementById('cardgend');
var mail = document.getElementById('cardmail');
var phone = document.getElementById('cardphone');
function createCard(event) {
    event.preventDefault();
    var formObj = {};
    for (var _i = 0, _a = event.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name !== 'Submit')
            formObj[field.name] = field.value;
    }
    fname.innerHTML = formObj.name + " the " + formObj.last;
    date.innerHTML = formObj.date;
    gend.innerHTML = formObj.gender;
    mail.innerHTML = formObj.username;
    phone.innerHTML = formObj.phone;
    console.log(formObj);
    form.classList.toggle("visable");
    card.classList.toggle("visable");
}
