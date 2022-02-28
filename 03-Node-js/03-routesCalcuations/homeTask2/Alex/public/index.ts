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

const axios = require('axios');



function handleSearch(event) {

    const search = event.target.value
    console.log(search);
    if (search) {
        axios.get(`/getText?search=${search}`).then(({ text }) => {
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
    const dom = document.querySelector('#root')
    let html = "";

    list.forEach(text => {
        html += `<p>${text.body}<p>`
    });
    dom.innerHTML = html;


};


