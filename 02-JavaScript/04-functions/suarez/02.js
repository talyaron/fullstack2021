function getMonthName() {
  let monthsNames = [
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
    "December",
  ];
  return monthsNames[8 - 1];
}

let dt = new Date();
let israeliDate = getMonthName(dt.getMonth());
console.log(israeliDate);
