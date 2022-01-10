console.log('hi');
function handleSubmit(ev) {
    ev.preventDefault(); //prevent refresh
    var formObj = {};
    console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.dir(field);
        console.log(field.type, field.name, field.value);
        if (field.type !== 'submit') {
            if (field.type === 'number') {
                formObj[field.name] = field.valueAsNumber;
            }
            else if (field.type === 'radio') {
                if (field.checked) {
                    formObj[field.name] = field.value;
                }
            }
            else {
                formObj[field.name] = field.value;
            }
        }
    }
    console.log(formObj);
    createCard(formObj);
}
function createCard(obj) {
    var html = "<div class=\"card\">" +
        ("<h1>" + obj.name + "</h1>") +
        ("<p>Telphone: " + obj.phone + "</p>") +
        "</div>";
    document.getElementById('card').innerHTML = html;
}
