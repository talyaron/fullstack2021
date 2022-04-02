async function appInit() {
    getProductsMain()
}

async function getProductsMain() {
    const { data } = await axios.get('/products/get-products-to-main');
    const { marketItems } = data;
    if (marketItems) {
        renderItemsMain(marketItems);
    }
}

async function handleAddProduct(ev) {
    ev.preventDefault();
    let { pic, title, description, price, category } = ev.target.elements;
    pic = pic.value;
    title = title.value;
    description = description.value
    price = price.value;
    category = category.value;

    const { data } = await axios.post('/products/add-product', { pic, title, description, price, category })
    document.querySelector("form").reset();
    document.getElementById("message").innerHTML = "The product was successfully added";

    window.setTimeout(function () { location.reload() }, 2000)
}

async function handleGetProducts() {

    const { data } = await axios.get('/products/get-products')
    const { products } = data;
    console.log({ products })
    if (products) {
        renderProducts(products);
    }
}

function renderItemsMain(items) {
    let html = '';
    const rootItems = document.querySelector('.mainPage__middle--products');
    if (items) {
        items.forEach(item => {
            html += `
            <div class="mainPage__middle--products--item">
                <img src="${item.pic}" title='${item.title}'>
                <h4>${item.description}</h4>
                <p>${item.price}$</p>
                <i title="Add product to cart" id="myBtn" class="fa fa-shopping-cart"></i>
                <i class="fa fa-heart"></i>
            </div>
            `
        })
        rootItems.innerHTML = html;
    }
}


function renderProducts(products) {
    const html = products.map(product => {
        return `
        <div class="mainPage__middle--products--item" id="card">
        <div id="trash"><i class="fa fa-trash-o" style="font-size:20px;cursor: pointer;" title="Delete product" onclick='handleDelete("${product._id}")'></i></div>
        <img src="${product.pic}" title='${product.title}'>
        <p>${product.title}.</p>
        <p>${product.price}$</p>
        <p>${product.description}.</p>
        <form onsubmit="handleUpadte(event,'${product._id}')">
            <input type = 'text' name = 'newImg' placeholder = 'Update img' >
            <input type = 'text' name = 'newTitle' placeholder = 'Update title'>
            <input type = 'text' name = 'newPrice' placeholder = 'Update price'>
            <input type = "submit" value = "Update">
        </form>
        </div>
        `
    }).join('');
    document.getElementById('products').innerHTML = html;
}

async function handleUpadte(ev, gameId) {
    ev.preventDefault();
    console.log(gameId)
    // const newImg = ev.target.value;
    // const { data } = await axios.patch('/products/update-picture', { gameId, newImg });
    // const {products} = data;
    // location.reload();
    // renderProducts(products);
}

// async function handleUpdateTitle(ev, gameId) {
//     const newTitle = ev.target.value;
//     const { data } = await axios.patch('/products/update-title', { gameId, newTitle });
//     const {products} = data;
//     location.reload();
//     renderProducts(products);
// }

// async function handleUpdatePrice(ev, gameId) {
//     const newPrice = ev.target.value;
//     const { data } = await axios.patch('/products/update-price', { gameId, newPrice });
//     const {products} = data;
//     location.reload();
//     renderProducts(products);
// }

async function handleDelete(productId) {
    const { data } = await axios.delete('/products/delete-product', { data: { productId } })
    const { product } = data;
    location.reload();
    renderProducts(product)
    renderItemsMain(product)
}

async function handleCategoryShow(ev) {
    const chosenCategory = ev.target.textContent;
    const { data } = await axios.post('/products/get-by-category', { chosenCategory });
    const { filterd } = data;
    const { products } = data;
    if (filterd) renderItemsMain(filterd);
    else if (products) renderItemsMain(products);
}

async function handleAscending() {
    const { data } = await axios.post('/products/sort-by-Ascending');
    const { filterd } = data;
    const { products } = data;
    if (filterd) renderItemsMain(filterd);
    else if (products) renderItemsMain(products);
}

async function handleDescending() {
    const { data } = await axios.post('/products/sort-by-Descending');
    const { filterd } = data;
    const { products } = data;
    if (filterd) renderItemsMain(filterd);
    else if (products) renderItemsMain(products);
}

async function handleSignUp(ev) {
    ev.preventDefault();
    let { email, password, userName } = ev.target.elements;
    email = email.value;
    password = password.value;
    userName = userName.value;
    document.querySelector("form").reset();
    document.getElementById("regMessage").innerHTML = "Successfully Signed Up";
    const { data } = await axios.post('/products/register', { email, password, userName })
}

async function handleLogin(ev) {
    ev.preventDefault();
    let { email, password, id } = ev.target.elements;
    email = email.value;
    password = password.value;
    const { data } = await axios.post('/products/login', { email, password });
    const{userName} = data
    const { ok } = data
    if (ok === true) {
        document.getElementById("logMessage").innerHTML = " You are login";
        // window.setTimeout(function () { location.reload() }, 2000)
        document.querySelector(".mainPage__header--welcome").innerHTML = `Hello` 
    }
    else if (ok === false) {
        document.getElementById("logMessage").innerHTML = "Email or Password is wrong, try again"
    }
}
