//------------- exercise 2
function monthsName(){
let whatMonth = window.prompt("Whats the number of your favorite month?", "Enter month here")
let answer = `Your favorite month is `;
const months = ['Tishrey', 'Heshvan', 'Kislev','Tevet', 'Shvat', 'Hadar', 'Nisan', 'Iyar', 'sivan', 'tamuz', 'av', 'elul'];

console.log(answer + months[whatMonth-1]);
}

monthsName();
