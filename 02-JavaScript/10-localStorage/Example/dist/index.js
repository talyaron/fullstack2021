var data = 0;
var obj = { a: 1 };
function handleUpdateData(ev) {
    data = ev.target.valueAsNumber;
    console.log(data);
}
function handleAddDataToStorage() {
    //store data to localstorage
    sessionStorage.setItem("data", "" + data);
    sessionStorage.setItem("obj", JSON.stringify(obj));
}
function getData() {
    data = +sessionStorage.getItem("data");
    console.log(JSON.parse(sessionStorage.getItem("obj")));
}
getData();
console.log(data);
