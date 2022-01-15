console.log('hi');
function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    var testObj = {};
    for (var _i = 0, _a = e.target; _i < _a.length; _i++) {
        var input = _a[_i];
        console.dir(input);
        console.log(input.name, input.value);
        if (input.name !== 'submit') {
            if (input.type === 'number') {
                testObj[input.name] = input.valueAsNumber;
            }
            else {
                testObj[input.name] = input.value;
            }
        }
    }
    console.log(testObj);
}
