async function handleAddProduct(ev){
    ev.preventDefault();
    let {pic, title,description,price,category} = ev.target.elements;
    pic=pic.value;
    title = title.value;
    description=description.value
    price = price.value;
    category = category.value;

    const {data} = await axios.post('/add-product',{pic, title,description,price,category})
    document.querySelector("form").reset();
    document.getElementById("message").innerHTML = "The product was successfully added";

    window.setTimeout(function(){location.reload()},2000)
}

async function handleGetProducts(){
  
    const {data} = await axios.get('/get-products')
    const {products} = data;
    console.log({products})
    if(products){
        renderProducts(products);
    }
}


function renderProducts(products){
    const html =  products.map(product=>{
        return `

        <div class="mainPage__middle--products--item">
        <img src="${product.pic}" title='${product.title}'>
        <p>${product.title}.</p>
        <p>${product.price}₪</p>
        <p>${product.description}.</p>
        <input type = 'text' name = 'newImg' placeholder = 'Update img' onblur = 'handleUpdate(event, "${product._id}")'>
        <input type = 'text' name = 'newTitle' placeholder = 'Update title' onblur = 'handleUpdate(event, "${product._id}")'>
    <div style="width:0%;position: relative; bottom: 62.4%; right:80%; color:black;"><i class="fa fa-trash-o" style="font-size:20px;cursor: pointer;" title="Delete product" onclick='handleDelete("${product._id}")'></i></div>
    <div style="width:0%;position: relative; right:1%; bottom: 67%;cursor: pointer; color:black"; onclick=''><i class="fa fa-plus" style="font-size:20px" title="Add to cart"></i></div>
        </div>
        `
    }).join('');
    document.getElementById('products').innerHTML = html ;
}

async function handleUpdate(ev, gameId) {
    const newImg = ev.target.value;
    const newTitle=ev.target.value;
    const { data } = await axios.patch('/update-product', { gameId, newImg,newTitle });
    const {products} = data;
    renderProducts(products);
}

async function handleDelete(productId){
    const {data} = await axios.delete('/delete-product', {data:{productId}})
    const {product} = data;
    location.reload();
    renderProducts(product)
}