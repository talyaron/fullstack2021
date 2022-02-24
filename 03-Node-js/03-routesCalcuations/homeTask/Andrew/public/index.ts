let filterTerms = {
    searchByName: "",
    price: 13500,
    category: "all",
}
let filteredItems;

function handleSearch(ev) {
    filterTerms.searchByName = ev.target.value;
    console.log(filterTerms);
    getFilteredList(filterTerms);
};

function handleSelector(ev){
    filterTerms.category = ev.target.value;
    console.log(filterTerms);
    getFilteredList(filterTerms);    
}

function handleRange(ev){
    filterTerms.price = ev.target.value;
    document.querySelector('#price-show').innerHTML = filterTerms.price+'';
    console.log(filterTerms);
    getFilteredList(filterTerms);
}

function getFilteredList(terms) {
    axios
        .get(`getList?price=${terms.price}&name=${terms.searchByName}&category=${terms.category}`)
        .then(({ data }) => {
            filteredItems = data;
            renderItems(filteredItems)
        });
}

function renderItems(list) {
    let html = "";

    list.forEach(item => {
        html += `<div class='card'>
                    <h2>${item.name}</h2>
                    <img src='${item.picUrl}'>
                    <h2>${item.price} $</h2>
                    <h4>${item.category}</h4>
                </div>`
    });

    document.querySelector('#main').innerHTML = html;
};

getFilteredList(filterTerms);

