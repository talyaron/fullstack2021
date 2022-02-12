const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface shop {
  id?: number;
  products: Array<product>;
  // wishList: Array<product>;
  addItem(
    title: string,
    price: number,
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
  renderFilter(domElement, filterd);
  getData();
  setData();
  addWishList(
    title: string,
    price: number,
    category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops",
    pictureFront: string,
    pictureBack: string,
    color: string,
    description: string,
    shoeSize: number
  );
  FindIndex(id);
}

interface product {
  id: number;
  title: string;
  price: number;
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
      html += `
     <div class="cards__item" >

      <div class="picture">
          <i class="far fa-heart"  onclick="handleFindIndex(id)"></i>
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


        ;

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
  renderFilter(domElement, filterd) {
    this.render(domElement, filterd);
  },
  // addWishList(id){

  //     const index = this.products.findIndex((product) => product.id === id);
  //     if (index >= 0) {

  //       console.log(index);
  //       this.setData();
  //     }
  // },
  FindIndex(id) {
    // console.log(id);

    // const id = uid();
    const index = this.products.findIndex((product) => product.id === id);
    if (index >= 0) {
      Adidas.products[index]
      console.log(index);
      this.setData();
    }
  }

};


// function HandleWishList(ev) {
// const wish = ev.target.value;
// Adidas.addWishList()
// }
function handleFindIndex(id) {

    Adidas.FindIndex(id)
    const root = document.getElementById("rootWishList")
    Adidas.renderAllData(root)
  }
}


function handleAddItem(ev) {
  ev.preventDefault();
  const title = ev.target.elements.title.value;
  const price = ev.target.elements.price.valueAsNumber;
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
  const root = document.getElementById("rootCart");
  const priceLow = ev.target.valueAsNumber;
  const priceHigh = ev.target.valueAsNumber;
  if (priceLow && priceHigh) {
    // console.log(price) + `price`;
    const filterd = Adidas.filterItems(priceLow && priceHigh);
    console.log(filterd);

    Adidas.renderFilter(root, filterd);
  } else {
    this.renderAll();
  }
}
function handleSort(ev) {


  const sort = ev.target.value;
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
  const root = document.getElementById("rootCards");
  // if(type === " ")
  return Adidas.renderFilter(root, Adidas.sortByType(type));
}
function handleColor(ev) {
  const color = ev.target.value;
  ev.preventDefault();
  const root = document.getElementById("rootCards");
  // if(type === " ")
  return Adidas.renderFilter(root, Adidas.sortByColor(color));
}
function handleGender(ev) {
  const gender = ev.target.value;
  ev.preventDefault();
  const root = document.getElementById("rootCards");
  // if(type === " ")

  return Adidas.renderFilter(root, Adidas.sortByGender(gender));
}
function handleShoeSize(ev) {
  const size = ev.target.value;
  ev.preventDefault();
  const root = document.getElementById("rootCards");
  Adidas.renderFilter(root, Adidas.shoeSizeFilter(size));
  // if(type === " ")
  //Adidas.shoeSizeFilter(size);
}
Adidas.addItem(
  "superstar shoes",
  200,
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
  "Sneakers",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "red",
  "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",
  44
);
Adidas.addItem(
  "superstar shoes",
  100,
  "Sneakers",
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
      const root = document.getElementById("rootCards");
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
//       const root = document.getElementById("rootCards");
//       Adidas.renderAllData(root);
//     } else {
//       throw new Error(`page is not found (${page})`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
