function handleSearch(ev){
    const time1 = performance.now();
    axios
    .get(`/getList?searchTerm=${ev.target.value}`)
    .then(({data}) => {
        const exeTime = performance.now() - time1;
        render(data, exeTime);
    });
}

function render(List,time){
    let html = `<p class="resualts">About ${List.length} results (${time} milliseconds)</p>`;
    List.forEach(article => {
        html += `<div class="main__resualt">
                    <p class="main__resualt__URL">${article.URL}</p>
                    <a class="main__resualt__title" href="${article.URL}">${article.title}</a>
                    <p class="main__resualt__text">${article.text}</p>
                </div>`;
    });
    document.querySelector(".main").innerHTML = html;
}