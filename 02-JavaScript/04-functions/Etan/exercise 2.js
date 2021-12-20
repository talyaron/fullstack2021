//------------- exercise 2
function monthsName(){
let whatMonth = window.prompt("Whats the number of your favorite month?", "Enter month here")
let answer = `Your favorite month is `;
const months = ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
alert(answer + months[whatMonth-1])
}

monthsName();
