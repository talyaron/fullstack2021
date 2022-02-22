var numbers = {
    number: '',
    keepNumber: '',
    addNumber: function (number) {
        this.number += number;
    }, addKeepNumber: function () {
        this.keepNumber = this.number;
        this.number = '';
    }
};
var numbersBtns = document.querySelectorAll('.main_btns-box');
numbersBtns.forEach(function (btn) {
    btn.addEventListener('click', getNumber);
});
function getNumber(ev) {
    var display = document.querySelector('.main_display');
    var id = ev.target.id;
    var value = ev.target.value;
    var action;
    var numOne;
    var numTwo;
    var sum;
    if (id == 'numbers') {
        value = parseFloat(value);
        numbers.addNumber(value);
        display.textContent = numbers.number;
    }
    else if (id == 'action') {
        numbers.addKeepNumber();
        action = value;
    }
    if (numbers.number.length > 0 && numbers.keepNumber.length > 0) {
        numOne = parseFloat(numbers.keepNumber);
        numTwo = parseFloat(numbers.number);
    }
    console.log(numOne);
    console.log(numTwo);
}
