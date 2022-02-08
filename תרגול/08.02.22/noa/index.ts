
const radio = document.querySelectorAll("input[type='radio']")
const amount=document.getElementById('Amount')


for (let i = 0; i < radio.length; i++) {
    console.log(radio[i]);

    radio[i].addEventListener('click', ev => {
        if (ev.target.value == 'Partial Withdrawal'){
            console.log(ev.target.value);
            amount.style.display='block';
        }
        else{
            amount.style.display='none';
        }
})
}
