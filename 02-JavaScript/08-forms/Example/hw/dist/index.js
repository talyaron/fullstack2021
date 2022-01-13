function handleSubmit(ev) {
    ev.preventDefault();
    var formObj = createFormObj(ev.target);
    printCard(formObj);
}
function createFormObj(form) {
    var formObj = {};
    for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
        var inputField = form_1[_i];
        if (inputField.id !== 'preview') {
            formObj[inputField.name] = inputField.value;
        }
    }
    return formObj;
}
function loadImage(e) {
    var image = document.getElementById('imgDisplay');
    // image.src = URL.createObjectURL(e.target.files[0]);
}
function printCard(obj) {
    var html = "<div class=\"card\">" +
        ("<h3>" + obj.name + "</h3>") +
        ("<p>Dept: " + obj.dept + "</p>") +
        "</div>";
    var root = document.querySelector('#cardRoot');
    root.innerHTML = html;
}
