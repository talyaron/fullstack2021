var dateValue = document.querySelectorAll('#date');
console.log(dateValue);
var date = new Date();
var todayDate = date.toISOString().slice(0, 10);
console.log(todayDate);
dateValue.forEach(function (date) {
    date.defaultValue = todayDate;
    console.log(date.defaultValue = todayDate);
});
