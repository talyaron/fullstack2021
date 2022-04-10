var date = new Date();
date.setDate(1);
var monthDays = document.querySelector('.days');
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
var firstDayIndex = date.getDay;
var lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
var nextDays = 7 - lastDayIndex - 1;
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
document.querySelector('.date h1').innerHTML
    = months[date.getMonth()];
document.querySelector(".date p").innerHTML
    = date.toDateString();
var days = "";
for (var x = firstDayIndex; x > 0; x--) {
    days += "<div class=\"prev-date\">" + (prevLastDay - x + 1) + "</div>";
}
for (var i = 1; i <= lastDay; i++) {
    days += "<div>" + i + "</div>";
    monthDays.innerHTML = days;
}
for (var j = 1; j <= nextDays; j++) {
    days += "<div class=\"next-date\">" + j + "</div>";
    monthDays.innerHTML = days;
}
