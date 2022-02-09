var radio = document.querySelectorAll("input[type='radio']");
var amount = document.getElementById('Amount');
var checkbox = document.querySelector('.checkbox');
var checkboxinput = document.querySelectorAll("input[type='checkbox']");
var tax = document.querySelector('.tax');
for (var i = 0; i < radio.length; i++) {
    console.log(radio[i]);
    radio[i].addEventListener('click', function (ev) {
        if (ev.target.value == 'Partial Withdrawal') {
            console.log(ev.target.value);
            amount.style.display = 'block';
        }
        else {
            amount.style.display = 'none';
        }
        if (ev.target.value == 'Autometed Monthly Withdrawal') {
            checkbox.style.cssText =
                "display: grid;\n            grid-template-columns: 20% 80%;\n            margin: 5px;";
        }
        else {
            checkbox.style.display = 'none';
        }
    });
}
for (var i = 0; i < checkboxinput.length; i++) {
    checkboxinput[i].addEventListener('click', function (ev) {
        if (ev.target.value == 'Payment withdrawal') {
            tax.style.cssText =
                "  grid-column: 1/3;\n            display: flex;\n            margin-left: 20px;\n            margin-top: 10px;";
        }
        else if (ev.target.value == 'Corresponding to loan') {
            tax.style.display = 'none';
            checkboxinput[0].checked = false;
        }
    });
}
