var details = document.querySelectorAll('.input');
var card = document.querySelector('.main-card');
function displaycard(ev) {
    ev.preventDefault();
    var formDetails = {};
    console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.log(field.name);
        console.log(field.value);
        if (field.type !== "submit") {
            if (field.type === 'number') {
                formDetails[field.name] = field.valueAsNumber;
            }
            else {
                formDetails[field.name] = field.value;
            }
        }
    }
    creatCard(formDetails);
}
function creatCard(object) {
    var cardDetails = "<p>First Name : " + object.firstName + "</p> " + ("<p>Last Name : " + object.LastName + "</p> ") + ("<p>Email : " + object.email + "</p> ")
        + ("<p>BirthDay : " + object.birthDay + "</p> ") + ("<p>Gender : " + object.gender + "</p> ") + ("<p>Phone Number : " + object.phoneNumber + "</p> ");
    card.innerHTML = cardDetails;
}
