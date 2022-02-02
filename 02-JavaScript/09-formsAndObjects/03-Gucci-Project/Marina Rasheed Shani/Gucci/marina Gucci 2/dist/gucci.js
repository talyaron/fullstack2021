var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var gucci = {
    products: [
        { title: "pants", price: 450, category: "women", id: "2" }
    ],
    addItem: function () {
        this.products = [
            { title: "short", price: 120, category: "women", id: "1" },
            //if your id is string - he must to be writen like string (was 1 not "1")
            //also you have uid, use him to create id, ex:
            { title: "pants", price: 450, category: "women", id: uid() },
            { title: "dress", price: 378, category: "women", id: "3" },
        ];
        this.storeData();
    },
    addNewItem: function (title, price, category) {
        var id = uid();
        var item = { title: title, price: price, category: category, id: id };
        console.log(item);
        console.log(this.products);
        if (item) {
            try {
                console.log(this.products);
                this.products.push(item);
                console.log("pushed");
            }
            catch (error) {
                console.log(error);
            }
        }
        // this.products.push(item);
        // this.storeData();
    },
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.products));
    },
    getData: function () {
        this.products = JSON.parse(localStorage.getItem("storeData"));
    },
    render: function (list, domElement) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class=\"item\">\n        <p>You were looking for </p> <h3> " + item.title + "</h3><p>" + item.category + "</p> <p>for</p>\n        <h3>" + item.price + "</h3>\n       </div>";
        });
    },
    renderAllData: function (domElement) {
        var products = this.products;
        this.render(products, domElement);
    }
};
console.log(gucci.products);
function handleAddNewItemSubmit(e) {
    e.preventDefault();
    var root = document.querySelector("#root");
    var title = e.target.elements.title.value; //was any
    var price = e.target.elements.price.value;
    var category = e.target.elements.category.value; //was number
    console.log("title is " + title + " category " + category + " price " + price);
    gucci.addNewItem(title, category, price);
    gucci.renderAllData(root);
}
// function handleShowProducts(): void {
//   console.log(gucci.products);
// }
// function handleGetProducts(): void {
//   gucci.getData();
// }
gucci.getData();
// const women: any = document.querySelector(".title_mouseover");
// const popup: any = document.querySelector(".category__women");
// const closePopup: any = document.querySelector(".popup_close");
// women.addEventListener("mouseover", () => {
//   popup.style.visibility = "visible";
// });
// closePopup.addEventListener("click", () => {
//   popup.style.visibility = "hidden";
// });
// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// };
// interface Item {
//   id: number;
//   title: string,
//   price: number,
//   type: "dress" | "pans"
// }
// interface Gucci {
//   id?: number;
//   data: Array<Item>;
//   addItem(title: string, type: "dress" | "pans", price: number);
//   filterByType(type: "dress" | "pans");
//   filterMaxPrice(price: number);
//   sortAscen();
//   sortDescen();
//   deleteItem(id: string);
//   deleteItemByName(itemName: string);
//   updateItem(id: string, newName: string);
//   render(list: Array<Item>, domElement: any);
//   renderFilter(domElement: any, filterd: Array<Item>);
//   renderAllData(domElement: any);
//   renderByType(type: "dress" | "pans", domElement);
// }
// const gucciShop: Gucci = {
//   data: [],
//   addItem(title, type, price) {
//     const id = uid();
//     this.data.push({ title, price, type });
//   },
//   filterMaxPrice(price): Array<Item> {
//     return this.data.filter((item) => item.price < price);
//   },
//   filterByType(type) {
//     return this.data.filter((item) => item.type === type);
//   },
//   sortAscen() {
//     console.log("sortAscen");
//     this.data = this.data.sort((a, b) => {
//       return a.price - b.price;
//     });
//     console.log(this.data);
//   },
//   sortDescen() {
//     console.log("sortDescen");
//     this.data = this.data.sort((a, b) => {
//       return b.price - a.price;
//     });
//     console.dir(this);
//   },
//   deleteItem(id) {
//     this.data = this.data.filter((item) => item.id !== id);
//   },
//   deleteItemByName(itemName: string) {
//     // doesnt work
//     const index = this.data.findIndex((item) => item.title === itemName);
//     if (index >= 0) {
//       this.data.splice(index, 1);
//       // this.data.delete[index]
//     }
//   },
//   updateItem(id, newName) {
//     //find index
//     const index = this.data.findIndex((item) => item.id === id);
//     //update the spesific item's name
//     if (index >= 0) {
//       this.data[index].title = newName;
//     }
//   },
//   renderByType(type, domElement) {
//     const filterd = this.filterByType(type);
//     this.render(filterd, domElement);
//   },
//   renderFilter(filterd, domElement) {
//     this.render(domElement, filterd);
//   },
//   render(list, domElement) {
//     let html = "";
//     list.forEach((item) => {
//       html += `<div class="item">
//         <h3> ${item.title}</h3><p>${item.type}</p>
//         <h3>${item.price}</h3>
//         </div>`;
//     });
//     domElement.innerHTML = html;
//   },
//   renderAllData(domElement) {
//     this.render(this.data, domElement);
//   },
// };
// function handlePriceAscen() {
//   gucciShop.sortAscen();
//   const root = document.getElementById("root");
//   gucciShop.renderAllData(root);
// }
// function handlePriseDescen() {
//   const root = document.getElementById("root");
//   gucciShop.sortDescen();
//   gucciShop.renderAllData(root);
// }
// function handleSelect(e) {
//   const root = document.getElementById("root");
//   const type = e.target.value;
//   if (type === "all") {
//     gucciShop.renderAllData(root);
//   } else {
//     console.log(type);
//     gucciShop.renderByType(type, root);
//   }
// }
// function handleFilter(e) {
//   const price = e.target.valueAsNumber;
//   const root = document.getElementById("root");
//   if (price) {
//     // console.log(price);
//     const filterd = gucciShop.filterMaxPrice(price);
//     // console.log(filterd);
//     gucciShop.renderFilter(root, filterd);
//   } else {
//     gucciShop.renderAllData(root);
//   }
// }
// function handleSubmit(e) {
//   e.preventDefault();
//   console.dir(e.target);
//   const root: any = document.querySelector("#root");
//   const title: any = e.target.elements.title.value;
//   const price: number = e.target.elements.price.value;
//   gucciShop.addItem(title, type, price);
//   gucciShop.renderAllData(root);
//   e.target.reset();
// }
// function handleDeleteByName(e) {
//   // doesnt work
//   e.preventDefault();
//   const title = e.target.elements.delete.value;
//   gucciShop.deleteItemByName(title);
//   const root = document.getElementById("root");
//   gucciShop.renderAllData(root);
// }
// function handleDelete(id) {
//   console.log(id);
//   const root = document.getElementById("root");
//   gucciShop.deleteItem(id);
//   gucciShop.renderAllData(root);
// }
// function handleUpdate(e: any, itemId: string) {
//   e.preventDefault();
//   const newName: string = e.target.elements.newName.value;
//   gucciShop.updateItem(itemId, newName);
//   const root = document.getElementById("root");
//   gucciShop.renderAllData(root);
// }
// gucciShop.addItem("Gucci Tiger denim shorts with embroidery", "dress", 1800);
// gucciShop.addItem("Shiny leather pant", "pans", 3800);
// const root = document.getElementById("root");
// gucciShop.renderAllData(root);
