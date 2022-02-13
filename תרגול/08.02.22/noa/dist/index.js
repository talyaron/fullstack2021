var radio = document.querySelectorAll("input[type='radio']");
var amount = document.getElementById('Amount');
var checkbox = document.querySelector('.checkbox');
var checkboxinput = document.querySelectorAll("input[type='checkbox']");
var tax = document.querySelector('.tax');
var clearForm = document.querySelector('.clear');
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
                "display: grid;\n            ";
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
                "display: flex;";
        }
        else if (ev.target.value == 'Corresponding to loan') {
            tax.style.display = 'none';
            checkboxinput[0].checked = false;
        }
        if (ev.target.value == 'Eligible for Tax Refund') {
            checkboxinput[2].checked = false;
        }
        else if (ev.target.value == 'Not Eligible for Tax Refund') {
            checkboxinput[1].checked = false;
        }
    });
}
clearForm.addEventListener('click', function (ev) { return ev.reset(); });
