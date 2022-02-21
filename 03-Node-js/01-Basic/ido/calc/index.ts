interface numbers {
    number: string
    keepNumber: string
    addNumber(number)
    addKeepNumber()
}

const numbers: numbers = {
    number: '',
    keepNumber: '',
    addNumber(number) {
        this.number += number
    }, addKeepNumber() {
        this.keepNumber = this.number
        this.number = '';
    }
}

const numbersBtns = document.querySelectorAll('.main_btns-box')

numbersBtns.forEach(btn => {
    btn.addEventListener('click', getNumber)
})

function getNumber(ev) {
    const display = document.querySelector('.main_display')
    const id = ev.target.id
    let value = ev.target.value
    let action;
    let numOne;
    let numTwo;
    let sum;

    if (id == 'numbers') {
        value = parseFloat(value)
        numbers.addNumber(value)
        display.textContent = numbers.number
    } else if (id == 'action') {
        numbers.addKeepNumber()
        action = value;
    }
    if (numbers.number.length > 0 && numbers.keepNumber.length > 0) {
        numOne = parseFloat(numbers.keepNumber)
        numTwo = parseFloat(numbers.number)
    }
    console.log(numOne);
    console.log(numTwo);
    
    


}


