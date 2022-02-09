
const radio = document.querySelectorAll("input[type='radio']")
const amount = document.getElementById('Amount')
const checkbox = document.querySelector('.checkbox')
const checkboxinput = document.querySelectorAll("input[type='checkbox']")
const tax = document.querySelector('.tax')

for (let i = 0; i < radio.length; i++) {
    console.log(radio[i]);

    radio[i].addEventListener('click', ev => {
        if (ev.target.value == 'Partial Withdrawal') {
            console.log(ev.target.value);
            amount.style.display = 'block';
        }
        else {
            amount.style.display = 'none';
        }

        if (ev.target.value == 'Autometed Monthly Withdrawal') {
            checkbox.style.cssText =
                `display: grid;
            grid-template-columns: 20% 80%;
            margin: 5px;`
        }
        else {
            checkbox.style.display = 'none';
        }
    })
}

for (let i = 0; i < checkboxinput.length; i++) {
    checkboxinput[i].addEventListener('click', ev => {
        if (ev.target.value == 'Payment withdrawal') {
            tax.style.cssText=
            `  grid-column: 1/3;
            display: flex;
            margin-left: 20px;
            margin-top: 10px;`
           
        }
        else if (ev.target.value == 'Corresponding to loan') {
            tax.style.display = 'none';
            checkboxinput[0].checked = false;

        }
    }
}
