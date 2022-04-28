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
    const { filterdProducts } = data;
    console.log({ filterdProducts })
    if (filterdProducts) {
        renderProducts(filterdProducts);
    }
}

function renderItemsMain(items,ok?, userName?) {
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
        if(localStorage.getItem("name") !=null){
            document.querySelector(".mainPage__header--welcome").innerHTML = `
            </br>
            hello ${localStorage.getItem("name")}
            </br>
            <button class="LogOutBtn" onclick="localStorage.clear();location.reload()">log out</button>  
            `

            document.querySelector(".mainPage__header--icons").innerHTML = `
                <a href="index.html"><i class="fa fa-home" ></i></a>
                <a href="personal-zone.html"><i class="fa fa-user" ></i></a>
                <i id="" class="fa fa-shopping-cart"></i>
            `

        } 
        else if(localStorage.getItem("name") ==='user'){document.querySelector(".mainPage__header--welcome").innerHTML = '';}

        else{document.querySelector(".mainPage__header--welcome").innerHTML = '';}
        rootItems.innerHTML = html;
    }
}


function renderProducts(products, ok?, userName?) {
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

    if(localStorage.getItem("name") !=null){
        document.querySelector(".mainPage__header--welcome").innerHTML = `
        </br>
        hello ${localStorage.getItem("name")}
        </br>
        <button class="LogOutBtn" onclick="localStorage.clear();location.reload()">log out</button>  
        `

    } 
    else if(localStorage.getItem("name") ==='user'){document.querySelector(".mainPage__header--welcome").innerHTML = '';}

    else{document.querySelector(".mainPage__header--welcome").innerHTML = '';}
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
    console.log("handleLogin");

    ev.preventDefault();
    let { email, password } = ev.target.elements;
    email = email.value;
    password = password.value;
    const { data } = await axios.post('/products/login', { email, password });
    let{userName} = data;
    // console.log("userName="+userName);
    // localStorage.setItem("name", userName);
    const { ok,items } = data;
    // const{userId} = data; 
    if (ok === true) {
        const logMessage= document.getElementById("logMessage").innerText = "You are login";
        //  setTimeout(function () { location.reload() }, 2000)
        localStorage.setItem("name", userName);
    }
    else  {
        document.getElementById("logMessage").innerText = "Email or Password is wrong, try again"
    }
    renderItemsMain(items, ok, userName);
    //renderProducts(products ,ok, userName)
}
