function createCard(event) {
    // event.preventDefault();
    var formObj = {};
    for (var _i = 0, _a = event.target; _i < _a.length; _i++) {
        var field = _a[_i];
        // console.log(field.name, field.value)
        if (field.name !== 'Submit')
            formObj[field.name] = field.value;
    }
    console.log(formObj);
    // const fname = formObj.name;
    // console.log(fname);
    // console.log(formObj[1]);
}
console.log(formObj.name);
// fname.innerHTML = formObj[0];
