const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface shop {
  id?: number;
  products: Array<product>;
  wishlist:Array<any>;
  // wishList: Array<product>;
  addItem(
    title: string,
    price: number,
    gender:string,
    category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops",
    pictureFront: string,
    pictureBack: string,
    color: string,
    description: string,
    shoeSize: number
  );
  deleteItem(id: number);
  render(list: Array<product>, domElement: any);
  renderAllData(domElement: any);
  deleteItem(id: number);
  updateItem(
    id: number,
    newTitle: string,
    newPrice: number,
    newGender:string,
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
  renderFilter( filterd: Array<product>, domElement);
  getData();
  setData();
  WishList(id)
}

interface product {
  id: number;
  title: string;
  price: number;
  gender:string;
  category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops";
  pictureFront: string;
  pictureBack: string;
  color: string;
  description: string;
  shoeSize: number;
  
}


const Adidas: shop = {
  // id:0,
  products: [], wishlist:[],
  // wishList: [],
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
      if(document.URL=="http://127.0.0.1:5501/customer.html"){
      html += `
     <div class="cards__item" >

      <div class="picture">
          <i class="far fa-heart"  onclick="handleIndex('${product.id}')"></i>
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
          </div>   `
    }

    else if(document.URL=="http://127.0.0.1:5501/owner.html"){
      html += `
     <div class="cards__item" >

      <div class="picture">
          <i class="far fa-heart"  onclick="handleIndex('${product.id}')"></i>
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
      <button onclick="handleDelete('${product.id}')">Delete</button>
          </div>   `
    }

      console.log("render");

    });
    

    // const button = document.getElementById("button");
    // console.log(button);

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
  filterItems(highPrice, lowPrice) {
    return this.products.filter(
      (item) => item.price >= lowPrice && item.price <= highPrice
    );
  },
  shoeSizeFilter(size) {
    return this.products.filter((item) => item.size === size);
  },
  sortItemsAsc() {
    this.products.sort((x, y) => y.price - x.price);
  },
  sortItemsDsc() {
    this.products.sort((x, y) => x.price - y.price);
  },
  sortByGender(item) {
    return this.products.filter((element) => element.gender === item);
  },
  sortByColor(color) {
    return this.products.filter((element) => element.color === color);
  },
  sortByType(category) {
    return this.products.filter((element) => element.category === category);
  },
  renderFilter(filterd, domElement) {
    console.log(filterd);
    
    this.render(filterd, domElement);
  },
  WishList(id){
    const index = this.products.findIndex((product) => product.id === id);
    //console.log(`The index:${index}.`)
    //console.log(`The id: ${id}.`)
    let item;
    item= Adidas.products[index]
    this.wishlist.push(item);
    console.log(Adidas.wishlist)
}
};




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

function handleDelete(id) {
  console.log(id);
  const root = document.getElementById("rootOwner");
  Adidas.deleteItem(id);
  Adidas.renderAllData(root);
}

function handleUpdate(ev: any, itemId: number) {
  ev.preventDefault();

  const newTitle: string = ev.target.elements.newTitle.value;
  const newPrice: number = ev.target.elements.newPrice.valueAsNumber;
  const newGender:string = ev.target.elements.newGender.value;
  const newCategory: string = ev.target.elements.newCategory.value;
  const newPictureFront: string = ev.target.elements.newPictureFront.value;
  const newPictureBack: string = ev.target.elements.newPictureBack.value;
  const newColor: string = ev.target.elements.newColor.value;
  const newDescription: string = ev.target.elements.newDescription.value;
  const newShoeSize: number = ev.target.elements.newShoeSize.valueAsNumber;

  const root = document.getElementById("rootOwner");
  Adidas.updateItem(
    itemId,
    newTitle,
    newPrice,
    newGender,
    newCategory,
    newPictureFront,
    newPictureBack,
    newColor,
    newDescription,
    newShoeSize
  );
  Adidas.renderAllData(root);
}

function handlePriceRange(ev) {
  const root = document.getElementById("rootCustomer");
  const priceLow = ev.target.valueAsNumber;
  const priceHigh = ev.target.valueAsNumber;
  if (priceLow && priceHigh) {
    // console.log(price) + `price`;
    const filterd = Adidas.filterItems(priceLow && priceHigh);
    console.log(filterd);

    Adidas.renderFilter(filterd, root);
  } else {
    this.renderAll();
  }
}
function handleSort(ev) {

  ev.preventDefault();
  const sort= ev.target.value;
  const root = document.getElementById("rootCustomer");
  if(sort ==="startPosition"){
      

  Adidas.renderAllData(root);
  }
  else if(sort === "priceAsc"){
       Adidas.sortItemsAsc();
 
  Adidas.renderAllData(root);
  }
  else if(sort === "priceDsc"){
           Adidas.sortItemsDsc();
 
  Adidas.renderAllData(root);
  }
  console.log(sort);
  Adidas.setData();
}
function handleType(ev) {
  const type = ev.target.value;
  ev.preventDefault();
  console.log(type);
  
  const root = document.getElementById("rootCustomer");
  if(type === "Sneakers"){
    console.log(type);
    
// Adidas.sortByType(type)
//      Adidas.renderAllData(root);
Adidas.renderFilter(Adidas.sortByType(type), root);
  }
  else if(type === "Boots"){
  //   console.log(type);
  //  Adidas.sortByType(type)
  //    Adidas.renderAllData(root);
  Adidas.renderFilter(Adidas.sortByType(type), root);
  }
  else if(type === "Hi Tops"){
  //   console.log(type);
  //  Adidas.sortByType(type)
  //    Adidas.renderAllData(root);
  Adidas.renderFilter(Adidas.sortByType(type), root);
  }
  else if(type === "Flip Flops"){
  //   console.log(type);
  //  Adidas.sortByType(type)
  //    Adidas.renderAllData(root);
  Adidas.renderFilter(Adidas.sortByType(type), root);
  }

    //  Adidas.sortByType(type)
    //  Adidas.renderAllData(root);

// Adidas.renderFilter(Adidas.sortByType(type), root);
}
function handleColor(ev) {
  const color = ev.target.value;
  ev.preventDefault();
  const root = document.getElementById("rootCustomer");
  // if(type === " ")
  return Adidas.renderFilter(Adidas.sortByColor(color), root );
}
function handleGender(ev) {
  const gender = ev.target.value;
  ev.preventDefault();
  const root = document.getElementById("rootCustomer");
  
  if(gender === "men"){
    console.log(gender);
    
    Adidas.renderFilter(Adidas.sortByGender(gender), root)
  }
  else if(gender === "women"){
    console.log(gender);
    Adidas.renderFilter(Adidas.sortByGender(gender), root)

  }
  else if(gender === "unisex"){
    console.log(gender);
    Adidas.renderFilter(Adidas.sortByGender(gender), root)

  }
}
function handleShoeSize(ev) {
  const size = ev.target.value;
  ev.preventDefault();
  const root = document.getElementById("rootCustomer");
  Adidas.renderFilter(Adidas.shoeSizeFilter(size),root);
  // if(type === " ")
  //Adidas.shoeSizeFilter(size);
}

function handleIndex(id) {
  Adidas.WishList(id);
}

Adidas.addItem(
  "superstar shoes",
  200,
  "men",
  "Sneakers",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "red",
  "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",
  44
);
Adidas.addItem(
  "superstar shoes",
  300,
  "women",
  "Boots",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "red",
  "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",
  44
);
Adidas.addItem(
  "superstar shoes",
  100,
  "unisex",
  "Hi Tops",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086954_x-speedflow1-messi-firm-ground-boots_fy6879_side-lateral-center-view.jpeg",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086956_x-speedflow1-messi-firm-ground-boots_fy6879_top-portrait-view.jpeg",
  "red",
  "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",
  44
);

function handleGetData(page: string) {
  try {
    // console.log(page);
    Adidas.getData();
    // console.log(Adidas);
    if (page === "owner") {
      const root = document.getElementById("rootOwner");
      Adidas.renderAllData(root);
    } else if (page === "customer") {
      const root = document.getElementById("rootCustomer");
      Adidas.renderAllData(root);
    } else {
      throw new Error(`page is not found (${page})`);
    }
  } catch (err) {
    console.log(err);
  }
}

// function handleSetData(page: string) {
//   try {
//     console.log(page);
//     Adidas.setData();
//     console.log(Adidas);
//     if (page === "owner") {
//       const root = document.getElementById("rootOwner");
//       Adidas.renderAllData(root);
//     } else if (page === "customer") {
//       const root = document.getElementById("rootCustomer");
//       Adidas.renderAllData(root);
//     } else {
//       throw new Error(`page is not found (${page})`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
