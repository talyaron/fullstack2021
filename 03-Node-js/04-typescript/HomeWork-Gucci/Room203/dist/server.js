"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.get("/get-all-products", (req, res) => {
    const shoes = getData();
    console.log(shoes);
    res.send(shoes);
    const category = req.query.category;
    const Price = req.body.price;
    const Gender = req.body.gender;
    const Color = req.body.color;
    const ShoeSize = req.body.shoeSize;
    setTimeout(() => {
        if (category) {
            const filterUsers = Adidas.products.filter((element) => element.category === category);
            res.send(filterUsers);
        }
        else if (Price) {
            const priceAsc = req.body.priceAsc;
            const priceDsc = req.body.priceDsc;
            if (priceAsc) {
                const ascFilter = Adidas.products.sort((x, y) => y.price - x.price);
                res.send(ascFilter);
            }
            else if (priceDsc) {
                const dscFilter = Adidas.products.sort((x, y) => x.price - y.price);
                res.send(dscFilter);
            }
        }
        else if (Gender) {
            const genderFilter = Adidas.products.filter((element) => element.gender === Gender);
            res.send(genderFilter);
        }
        else if (Color) {
            const colorFilter = Adidas.products.filter((element) => element.color === Color);
            res.send(colorFilter);
        }
        else if (ShoeSize) {
            const shoeSizeFilter = Adidas.products.filter((item) => item.shoeSize === ShoeSize);
            res.send(shoeSizeFilter);
        }
    }, 2000);
});
function getData() {
    return Adidas;
}
app.post("/add-shoes", (req, res) => {
    console.log(req.body);
    const Title = req.body.title;
    const Price = req.body.price;
    const Gender = req.body.gender;
    const Category = req.body.category;
    const PictureFront = req.body.pictureFront;
    const PictureBack = req.body.pictureBack;
    const Color = req.body.color;
    const Description = req.body.description;
    const ShoeSize = req.body.shoeSize;
    const shoes = Adidas.addItem(Title, Price, Gender, Category, PictureFront, PictureBack, Color, Description, ShoeSize);
    res.send(shoes);
});
app.post("/update-shoes", (req, res) => {
    console.log(req.body);
    const newTitle = req.body.title;
    const newPrice = req.body.price;
    const newGender = req.body.gender;
    const newCategory = req.body.category;
    const newPictureFront = req.body.pictureFront;
    const newPictureBack = req.body.pictureBack;
    const newColor = req.body.color;
    const newDescription = req.body.description;
    const newShoeSize = req.body.shoeSize;
    const id = uid();
    const shoes = Adidas.updateItem(id, newTitle, newPrice, newGender, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize);
    res.send(shoes);
});
const Adidas = {
    // id:0,
    products: [],
    wishlistArr: [],
    cartArr: [],
    addItem(title, price, gender, category, pictureFront, pictureBack, color, description, shoeSize) {
        const id = uid();
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
    },
    deleteItem(id) {
        this.products = this.products.filter((product) => product.id !== id);
    },
    updateItem(id, newTitle, newPrice, newGender, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize) {
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
    // filterItems(highPrice, lowPrice) {
    //   return this.products.filter(
    //     (item) => item.price >= lowPrice && item.price <= highPrice
    //   );
    // },
    // shoeSizeFilter(size) {
    //   return (this.products = this.products.filter(
    //     (item) => item.shoeSize === size
    //   ));
    // },
    // sortItemsAsc() {
    //   this.products.sort((x, y) => y.price - x.price);
    // },
    // sortItemsDsc() {
    //   this.products.sort((x, y) => x.price - y.price);
    // },
    // sortByGender(item) {
    //   return this.products.filter(
    //     (element) => element.gender === item
    //   );
    // },
    // sortByColor(color) {
    //   return this.products.filter(
    //     (element) => element.color === color
    //   );
    // },
    // sortByType(category) {
    //   return this.products.filter(
    //     (element) => element.category === category
    //   );
    // },
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
// function handleSearchProduct(ev) {
//   const search = ev.target.value;
//   const regex = new RegExp(search, "i");
//   const root = document.getElementById("rootSearch");
//   root.innerHTML = "";
//   if (search.length > 0) {
//     const foundProducts = Adidas.products.filter((product) => {
//       if (regex.test(product.title)) return true;
//     });
//     const html = foundProducts
//       .map((product) => {
//         return `<p>${product.title}</p>`;
//       })
//       .join("");
//     root.innerHTML = html;
//     console.log(foundProducts);
//   }
// }
// function handleAddItem(ev) {
//   ev.preventDefault();
//   const title = ev.target.elements.title.value;
//   const price = ev.target.elements.price.valueAsNumber;
//   const gender = ev.target.elements.title.value;
//   const category = ev.target.elements.category.value;
//   const pictureFront = ev.target.elements.pictureFront.value;
//   const pictureBack = ev.target.elements.pictureBack.value;
//   const color = ev.target.elements.color.value;
//   const description = ev.target.elements.description.value;
//   const shoeSize = ev.target.elements.shoeSize.valueAsNumber;
//   Adidas.addItem(
//     title,
//     price,
//     category,
//     gender,
//     pictureFront,
//     pictureBack,
//     color,
//     description,
//     shoeSize
//   );
//   const root = document.getElementById("rootOwner");
//   Adidas.renderAllData(root);
//   ev.target.reset(); //reset the form fileds
//   // console.log(category);
//   Adidas.setData();
// }
Adidas.addItem("superstar shoes", 300, "women", "Boots", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8953617284f4c47b613acbb011e74ee_9366/Supernova_Shoes_Black_S42722_02_standard.jpg", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 40);
Adidas.addItem("superstar shoes", 100, "unisex", "Hi Tops", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086956_x-speedflow1-messi-firm-ground-boots_fy6879_top-portrait-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086954_x-speedflow1-messi-firm-ground-boots_fy6879_side-lateral-center-view.jpeg", "blue", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
