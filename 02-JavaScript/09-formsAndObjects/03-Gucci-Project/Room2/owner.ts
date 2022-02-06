const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface shop {
  id?: number;
  products: Array<product>;
  addItem(
    title: string,
    price: number,
    category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops",
    picture: string,
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
    newPicture: string,
    newColor: string,
    newDescription: string,
    newShoeSize: number,
  );
}

interface product {
  id: number;
  title: string;
  price: number;
  category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops";
  picture: string;
  color: string;
  description: string;
  shoeSize: number;
}

const Adidas: shop = {
  // id:0,
  products: [],
  addItem(title, price, category, picture, color, description, shoeSize) {
    const id = uid();
    this.products.push({ id, title, price, category, picture, color, description, shoeSize });
  },
  deleteItem(id) {
    this.products = this.products.filter((product) => product.id !== id);
  },
  render(list, domElement) {
    let html = "";
    this.products.forEach(product => {
      html += `<div style="width: 35%;border: 1px solid red">
          <p><b>Title: </b> ${product.title}</p>
          <p><b> Price: </b> ${product.price}₪</p>
          <p><b> picture: </b> </p>
          <p><img src="${product.picture}" style="width: 200px; height: 200px;"></p>
          <p><b> Color: </b> ${product.color}</p>
          <p><b> Description: </b> ${product.description}</p>
          <p><b> Size: </b> ${product.shoeSize}</p>
          <p><b> category: </b> ${product.category}</p>

          <form onsubmit="handleUpdate(event, '${product.id}') ">
          <input type="text" name="newTitle" placeholder="new title" value="${product.title}">
          <input type="number" name="newPrice" placeholder="new price" value="${product.price}">
          <input type="text" name="newCategory" placeholder="new category" value="${product.category}">
          <input type="text" name="newPicture" placeholder="new picture" value="${product.picture}">
          <input type="text" name="newColor" placeholder="new color" value="${product.color}">
          <input type="text" name="newDescription" placeholder="new description" value="${product.description}">
          <input type="number" name="newShoeSize" placeholder="new shoeSize" value="${product.shoeSize}">
          <button id ="button" type="submit">Update</button>

          </form>

          <button onclick="handleDelete('${product.id}')">Delete</button>

          </div>`;
    });
    const button = document.getElementById('button');
    console.log(button);

    domElement.innerHTML = html;
  },
  updateItem(id, newTitle, newPrice, newCategory, newPicture, newColor, newDescription, newShoeSize) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index >= 0) {

      this.products[index].title = newTitle;
      this.products[index].price = newPrice;
      this.products[index].category = newCategory;
      this.products[index].picture = newPicture;
      this.products[index].color = newColor;
      this.products[index].description = newDescription;
      this.products[index].shoeSize = newShoeSize;
      console.log(index);

    }
  },
  renderAllData(domElement) {
    this.render(this.products, domElement);
  },
};


function handleAddItem(ev) {
  ev.preventDefault();
  const title = ev.target.elements.title.value;
  const price = ev.target.elements.price.valueAsNumber;
  const category = ev.target.elements.category.value;
  const picture = ev.target.elements.picture.value;
  const color = ev.target.elements.color.value;
  const description = ev.target.elements.description.value;
  const shoeSize = ev.target.elements.shoeSize.valueAsNumber;

  Adidas.addItem(title, price, category, picture, color, description, shoeSize);
  const root = document.getElementById('root');
  Adidas.renderAllData(root);
  ev.target.reset(); //reset the form fileds
  // console.log(category);
}

function handleDelete(id) {
  console.log(id);
  const root = document.getElementById("root");
  Adidas.deleteItem(id);
  Adidas.renderAllData(root);
}

function handleUpdate(ev: any, itemId: number) {
  ev.preventDefault();

  const newTitle: string = ev.target.elements.newTitle.value;
  const newPrice: number = ev.target.elements.newPrice.valueAsNumber;
  const newCategory: string = ev.target.elements.newCategory.value;
  const newPicture: string = ev.target.elements.newPicture.value;
  const newColor: string = ev.target.elements.newColor.value;
  const newDescription: string = ev.target.elements.newDescription.value;
  const newShoeSize: number = ev.target.elements.newShoeSize.valueAsNumber;

  const root = document.getElementById("root");
  Adidas.updateItem(itemId, newTitle, newPrice, newCategory, newPicture, newColor, newDescription, newShoeSize);
  Adidas.renderAllData(root);

}

Adidas.addItem(
  "superstar shoes",
  200,
  "Sneakers",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "red",
  "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",
  44
);
Adidas.addItem(
  "superstar shoes",
  200,
  "Sneakers",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "red",
  "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",
  44
);
Adidas.addItem(
  "superstar shoes",
  200,
  "Sneakers",
  "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg",
  "red",
  "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.",
  44
);
const root = document.getElementById("root");
Adidas.renderAllData(root);
