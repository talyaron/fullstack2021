const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface shop {
  id?:number;
  products: Array<product>;
  addItem(title:string,price: number,type: "Sneakers" | "Boots" | "Ti Tops" | "Flip Flops", picture:string,color:string,description:string,shoeSize:number) ;
  deleteItem(id);
  render(list: Array<product>, domElement: any);
  renderAllData(domElement: any);
  deleteItem(id:string);
  updateItem(title:string, price:number,category:string, picture:string, color:string,description:string, shoeSize:number, id:number  );

}

interface product {
  title:string;
  price:number;
  category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops";
  picture:string;
  color:string;
  description:string;
  shoeSize:number;
  id:number;
}

const Adidas:shop = {
  products: [],
  addItem(title, price,category,picture,color,description,shoeSize) {
      const id = uid();
      this.products.push({id,title, price, category, picture,color,description,shoeSize});
  },
  deleteItem(id){
      this.products = this.products.filter(product=>product.id !== id);
  },
  render(list, domElement) {
      let html = ''
      list.forEach(product => { 
          html += `<div style="width: 35%;border: 1px solid red">
          <p><b>Title: </b> ${product.title}</p>
          <p><b> Price: </b> ${product.price}₪</p>
          <p><b> picture: </b> </p>
          <p><img src="${product.picture}" style="width: 200px; height: 200px;"></p>
          <p><b> Color: </b> ${product.color}</p>
          <p><b> Description: </b> ${product.description}</p>
          <p><b> Size: </b> ${product.shoeSize}</p>
          <p><b> category: </b> ${product.category}</p>
          <button onclick="handleDelete('${product.id}')">Delete</button>
          <button onclick="handleUpdate(event,'${product.id}')"> Edit</button>
          </div>`
      })

      domElement.innerHTML = html;
  },
  updateItem(){
    const index = this.product.findIndex((item)=> item.id===id);
    if (index >= 0) {
      this.product[index].title = newTitle;
      this.product[index].price = newPrice;
      this.product[index].category = newCategory;
      this.product[index].picture = newPicture;
      this.product[index].color = newColor;
      this.product[index].description = newDescription;
      this.product[index].shoeSize = newShoeSize;
      this.product[index].id = newId; 
    }
  },
  renderAllData(domElement) {
      this.render(this.products, domElement);
  }
}
Adidas.addItem('superstar shoes', 200, 'Sneakers', 'https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg','red','B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.',44);
const root = document.getElementById('root');
Adidas.renderAllData(root)


function handleUpdate(event, id){
  event.preventDefault();
  const newTitle:string = ev.target.elements.newName.value;
 const newPrice:number = ev.target.elements.newPrice.valueAsNumber;
    Adidas.updateItem(id, )

}

function handleAddItem(ev){
  ev.preventDefault();
  const title = ev.target.elements.title.value;
  const price = ev.target.elements.price.valueAsNumber;
  const category = ev.target.elements.category.value;
  const picture = ev.target.elements.picture.value;
  const color = ev.target.elements.color.value;
  const description = ev.target.elements.description.value;
  const shoeSize:number = ev.target.elements.shoeSize.valueAsNumber;

  Adidas.addItem(title,price,category,picture,color,description,shoeSize);
  Adidas.renderAllData(root);
  ev.target.reset();//reset the form fileds
  console.log(category);
}

function handleDelete(id){
  console.log(id)
  const root = document.getElementById('root');
  Adidas.deleteItem(id);
  Adidas.renderAllData(root);  
}