

function handleSearch(event) {
    axios.get(`/getText?searchTerm=${event.target.value}`).then(({ data }) => {
        print(data)
    })
}
function print(list) {
    const dom = document.querySelector('#root')
    let html = "";
    list.forEach(text => {
        html += `<p>${text.title}<br>${text.body}<p>`
    });
    dom.innerHTML = html;
};


