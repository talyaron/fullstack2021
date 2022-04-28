const dateValue = document.querySelectorAll('#date')
console.log(dateValue)

const date = new Date();
const todayDate = date.toISOString().slice(0, 10);
console.log(todayDate)

dateValue.forEach(date => {
    date.defaultValue = todayDate
    console.log(date.defaultValue = todayDate)
})
