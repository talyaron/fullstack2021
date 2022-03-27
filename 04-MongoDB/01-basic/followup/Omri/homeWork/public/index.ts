function appInit() {
    getItems()
}

async function getItems() {
    const {data} = await axios.get('/marketPlaces/getItems');
    const {ok, items} = data;
    if(items){
        renderItemsMain(items);
    }
}

function renderItemsMain(items){
    let html ='';
    const rootItems = document.querySelector('.mainPage__middle--products');
    if(items){
        items.forEach(item => {
            html += `
            <div class="mainPage__middle--products--item">
                <img src="${item.img}">
                <h4>${item.description}</h4>
                <p>${item.price}</p>
            </div>
            `
        })
        rootItems.innerHTML = html;
    }
}