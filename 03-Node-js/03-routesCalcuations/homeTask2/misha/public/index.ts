function handleSearch(ev){
   let searchParagraph = ev.target.value;
   const searchTerm = req;
    const regex = new RegExp(searchTerm , "i");
    const root = document.querySelector(".article_root");

}

function handleRange(ev){
    filterTerms.price = ev.target.value;
    document.querySelector('#price-show').innerHTML = filterTerms.price+'';
    console.log(filterTerms);
    getFilteredList(filterTerms);
}

function getFilteredList(paragraphs) {
    axios
        .get(`get-?terms=${paragraphs}`)
        .then(({ data }) => {
            filteredItems = data;
            renderItems(filteredItems)
        });
}

article.forEach(paragraph => {
    if(regex.test(paragraph.title)) {
        html += `
        <div id='paragraph'>
        </div>
        `
    }
});

root.innerHTML = html;