// let text = [
//     {
//         title: 'reguler expressions',
//         body: 'Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.'
//     },
//     {
//         title: 'markdown',
//         body: 'Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.'
//     }
// ]
var axios = require('axios');
function handleSearch(event) {
    var search = event.target.value;
    console.log(search);
    if (search) {
        axios.get("/getText?search=" + search).then(function (_a) {
            var text = _a.text;
            print(search);
        });
    }
}
// function getFilteredText(search) {
// }
// function findText(event) {
//     const text = event.target.value
//     const regex = new RegExp(text, 'i');
//     const root = document.querySelector('#root')
//     if (regex.test)
// }
function print(list) {
    var dom = document.querySelector('#root');
    var html = "";
    list.forEach(function (text) {
        html += "<p>" + text.body + "<p>";
    });
    dom.innerHTML = html;
}
;
