function calc(ev) {
    ev.preventDefault();
    var numberOne;
    var numberTwo;
    var action;
    var sum = 0;
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name == "numberOne") {
            numberOne = field.value;
        }
        else if (field.name == "numberTwo") {
            numberTwo = field.value;
        }
        else if (field.name == "selectAction")
            action = field.value;
    }
    if (action == "plus") {
        sum = numberOne + numberTwo;
    }
    else if (action == "minus") {
        sum = numberOne - numberTwo;
    }
    else if (action == "multi") {
        sum = numberOne * numberTwo;
    }
    else if (action == "split") {
        sum = numberOne / numberTwo;
    }
    document.querySelector('.result').textContent = "" + sum;
    ev.target.reset();
}
axios.get("/details").then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
