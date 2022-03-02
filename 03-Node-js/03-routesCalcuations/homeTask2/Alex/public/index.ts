




function handleSearch(event) {
    axios.get(`/getText?searchTerm=${event.target.value}`).then(({data})=>{
        print(data)
    })
    // const search = event.target.value
    // const check = filterText(search)
    // print(check);
}
function print(list) {
    const dom = document.querySelector('#root')
    let html = "";
    list.forEach(text => {
        html += `<p>${text.title}<br>${text.body}<p>`
    });
    dom.innerHTML = html;
};


