import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  interface shop {
    id?: number;
    products: Array<product>;
    wishlistArr: Array<any>;
    cartArr: Array<any>;
  
    addItem(
      title: string,
      price: number,
      gender: string,
      category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops",
      pictureFront: string,
      pictureBack: string,
      color: string,
      description: string,
      shoeSize: number
    );
    deleteItem(id: number);
    render(list: Array<product>, domElement: any);
    renderWish(list: Array<product>, domElement: any);
    renderCart(list: Array<product>, domElement: any);
    renderAllData(domElement: any);
    renderAllWish(domElement);
    renderAllCart(domElement);
    deleteItem(id: number);
    updateItem(
      id: string,
      newTitle: string,
      newPrice: number,
      newGender: string,
      newCategory: string,
      newPictureFront: string,
      newPictureBack: string,
      newColor: string,
      newDescription: string,
      newShoeSize: number
    );
    shoeSizeFilter(size);
    sortItemsAsc();
    sortItemsDsc();
    sortByGender(item);
    sortByColor(color);
    sortByType(type);
    filterItems(highPrice?: number, lowPrice?: number);
    renderFilter(filterd: Array<product>, domElement);
    getData();
    setData();
    WishList(id);
    Cart(id);
    shoeRender(id);
  }

app.use(express.static("public"));
app.use(express.json());

app.get("/get-all-products", (req, res) => {
    const shoes = getData();
    console.log(shoes);
    res.send(shoes);
  });

  function getData() {
    return Adidas;
  }



  app.post("/add-shoes", (req, res) => {
    console.log(req.body);
    const Title = req.body.title;
    const Price= req.body.price;
    const Gender= req.body.gender;
    const Category= req.body.category;
    const PictureFront=req.body.pictureFront;
    const PictureBack= req.body.pictureBack;
    const Color= req.body.color;
    const Description= req.body.description;
    const ShoeSize= req.body.shoeSize;

    const shoes = Adidas.addItem(Title,Price,Gender,Category,PictureFront,PictureBack,Color,Description,ShoeSize);
    res.send(shoes)
  });




  app.post("/update-shoes", (req, res) => {
    console.log(req.body);
    const newTitle = req.body.title;
    const newPrice= req.body.price;
    const newGender= req.body.gender;
    const newCategory= req.body.category;
    const newPictureFront=req.body.pictureFront;
    const newPictureBack= req.body.pictureBack;
    const newColor= req.body.color;
    const newDescription= req.body.description;
    const newShoeSize= req.body.shoeSize;
    const id=uid();
    

    const shoes = Adidas.updateItem(id, newTitle,newPrice,newGender,newCategory,newPictureFront,newPictureBack,newColor,newDescription,newShoeSize);
    res.send(shoes)
  });








  
  interface product {
    id: number;
    title: string;
    price: number;
    gender: string;
    category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops";
    pictureFront: string;
    pictureBack: string;
    color: string;
    description: string;
    shoeSize: number;
  }
  
  const Adidas: shop = {
    // id:0,
    products: [],
    wishlistArr: [],
    cartArr: [],
  
    getData() {
      const products = JSON.parse(localStorage.getItem("Adidas"));
      if (products) {
        this.products = products;
      }
    },
    setData() {
      localStorage.setItem("Adidas", JSON.stringify(this.products));
    },
    addItem(
      title,
      price,
      gender,
      category,
      pictureFront,
      pictureBack,
      color,
      description,
      shoeSize
    ) {
      const id = uid();
      this.getData();
      this.products.push({
        id,
        title,
        price,
        gender,
        category,
        pictureFront,
        pictureBack,
        color,
        description,
        shoeSize,
      });
  
      this.setData();
    },
    deleteItem(id) {
      this.products = this.products.filter((product) => product.id !== id);
      this.setData();
    },
    render(list, domElement) {
      console.log(list);
  
      let html = "";
      this.products.forEach((product) => {
        let text = document.URL;
        let customer = text.includes("customer");
        let owner = text.includes("owner");
        if (customer) {
          html += `
       <div class="cards__item" >
  
        <div class="picture">
        <i class="fa-solid fa-heart fa-beat"  onclick="handleWishList('${product.id}')"></i>
            <i class="fa-solid fa-circle-plus fa-beat"  onclick="handleCart('${product.id}')"></i>
            <img src="${product.pictureBack}" >
           <img src="${product.pictureFront}" class="img-top">
            </div>
                
        <div class="color">
        <p><b> Color: </b> ${product.color}</p>
        </div>
  
        <div class="description">
           <p>${product.title}</p>
            <p>${product.description}</p>
            <p>${product.price}₪</p> 
        </div>
            </div>   `;
        } else if (owner) {
          html += `
       <div class="cards__item" >
  
        <div class="picture">
            <i class="far fa-heart"  onclick="handleWishList('${product.id}')"></i>
            <img src="${product.pictureBack}" >
           <img src="${product.pictureFront}" class="img-top">
            </div>
                
        <div class="color">
        <p><b> Color: </b> ${product.color}</p>
        </div>
  
        <div class="description">
           <p>${product.title}</p>
            <p>${product.description}</p>
            <p>${product.price}₪</p> 
        </div>;
  
        <form onsubmit="handleUpdate(event, '${product.id}')">
        <input type="text" name="newTitle" placeholder="new title" value="${product.title}">
        <input type="number" name="newPrice" placeholder="new price" value="${product.price}">
        <input type="text" name="newCategory" placeholder="new category" value="${product.category}">
        <input type="text" name="newPictureFront" placeholder="new picture front" value="${product.pictureFront}">
        <input type="text" name="newPictureBack" placeholder="new picture back" value="${product.pictureBack}">
        <input type="text" name="newColor" placeholder="new color" value="${product.color}">
        <input type="text" name="newGender" placeholder="new gender" value="${product.gender}">
        <input type="text" name="newDescription" placeholder="new description" value="${product.description}">
        <input type="number" name="newShoeSize" placeholder="new shoeSize" value="${product.shoeSize}">
        <button type="submit">Update</button>
        </form>
  
        <button onclick="handleDelete('${product.id}')">Delete</button>
            </div>   `;
        }
      });
  
      // const button = document.getElementById("button");
      //console.log(button);
  
      domElement.innerHTML = html;
    },
    renderWish(list, domElement) {
      //onsole.log(list);
  
      let html = "";
      this.wishlistArr.forEach((product) => {
        html += `
       <div class="cards__item" >
  
        <div class="picture">
            <img src="${product.pictureBack}" >
           <img src="${product.pictureFront}" class="img-top">
            </div>
                
  
        <div class="description">
           <p>${product.title}</p>
            
            <p>${product.price}₪</p> 
        </div>
  
        <div class="color">
        <p> ${product.color}</p>
        </div>
            </div>   `;
      });
  
      domElement.innerHTML = html;
    },
    renderCart(list, domElement) {
      //console.log(list);
  
      let html = "";
      this.cartArr.forEach((product) => {
        html += `
       <div class="cards__item" >
  
        <div class="picture">
            <img src="${product.pictureBack}" >
           <img src="${product.pictureFront}" class="img-top">
            </div>
                
        <div class="description">
           <p>${product.title}</p>
            
            <p>${product.price}₪</p> 
        </div>
        <div class="color">
        <p> ${product.color}</p>
        </div>
            </div>   `;
      });
  
      domElement.innerHTML = html;
    },
    updateItem(
      id,
      newTitle,
      newPrice,
      newGender,
      newCategory,
      newPictureFront,
      newPictureBack,
      newColor,
      newDescription,
      newShoeSize
    ) {
      const index = this.products.findIndex((product) => product.id === id);
      if (index >= 0) {
        this.products[index].title = newTitle;
        this.products[index].price = newPrice;
        this.products[index].gender = newGender;
        this.products[index].category = newCategory;
        this.products[index].pictureFront = newPictureFront;
        this.products[index].pictureBack = newPictureBack;
        this.products[index].color = newColor;
        this.products[index].description = newDescription;
        this.products[index].shoeSize = newShoeSize;
        console.log(index);
        this.setData();
      }
    },
    renderAllData(domElement) {
      this.render(this.products, domElement);
    },
  
    renderAllWish(domElement) {
      this.renderWish(this.wishlistArr, domElement);
    },
  
    renderAllCart(domElement) {
      this.renderCart(this.cartArr, domElement);
    },
  
    filterItems(highPrice, lowPrice) {
      return this.products.filter(
        (item) => item.price >= lowPrice && item.price <= highPrice
      );
    },
    shoeSizeFilter(size) {
      return (this.products = this.products.filter(
        (item) => item.shoeSize === size
      ));
    },
    sortItemsAsc() {
      this.products.sort((x, y) => y.price - x.price);
    },
    sortItemsDsc() {
      this.products.sort((x, y) => x.price - y.price);
    },
    sortByGender(item) {
      return this.products.filter(
        (element) => element.gender === item
      );
    },
    sortByColor(color) {
      return this.products.filter(
        (element) => element.color === color
      );
    },
    sortByType(category) {
      return this.products.filter(
        (element) => element.category === category
      );
    },
    renderFilter(filterd, domElement) {
      // console.log(filterd);
  
      this.render(filterd, domElement);
    },
    WishList(id) {
      const index = this.products.findIndex((product) => product.id === id);
      //console.log(`The index:${index}.`)
      //console.log(`The id: ${id}.`)
      let item;
      item = Adidas.products[index];
      this.wishlistArr.push(item);
    },
  
    Cart(id) {
      const index = this.products.findIndex((product) => product.id === id);
      let item;
      item = Adidas.products[index];
      this.cartArr.push(item);
    },
  
    shoeRender(id) {
      const index = this.products.findIndex((product) => product.id === id);
      //console.log(`The index:${index}.`)
      //console.log(`The id: ${id}.`)
      let item;
      item = Adidas.products[index];
      this.wishlistArr.push(item);
      console.log(Adidas.wishlistArr);
    },
  };
  
  function handleSearchProduct(ev) {
    const search = ev.target.value;
    const regex = new RegExp(search, "i");
    const root = document.getElementById("rootSearch");
    root.innerHTML = "";
  
    if (search.length > 0) {
      const foundProducts = Adidas.products.filter((product) => {
        if (regex.test(product.title)) return true;
      });
  
      const html = foundProducts
        .map((product) => {
          return `<p>${product.title}</p>`;
        })
        .join("");
  
      root.innerHTML = html;
  
      console.log(foundProducts);
    }
  }
  
  function handleAddItem(ev) {
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    const price = ev.target.elements.price.valueAsNumber;
    const gender = ev.target.elements.title.value;
    const category = ev.target.elements.category.value;
    const pictureFront = ev.target.elements.pictureFront.value;
    const pictureBack = ev.target.elements.pictureBack.value;
    const color = ev.target.elements.color.value;
    const description = ev.target.elements.description.value;
    const shoeSize = ev.target.elements.shoeSize.valueAsNumber;
  
    Adidas.addItem(
      title,
      price,
      category,
      gender,
      pictureFront,
      pictureBack,
      color,
      description,
      shoeSize
    );
    const root = document.getElementById("rootOwner");
    Adidas.renderAllData(root);
    ev.target.reset(); //reset the form fileds
    // console.log(category);
    Adidas.setData();
  }













app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
