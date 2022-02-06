const addingForm = document.querySelector("[data-addingItemForm]");
const bookTitle = document.querySelector("[data-bookTitle]");
const imagePreview = document.querySelector("[data-bookImage-preview]");
console.dir(imagePreview);
let backToTop = document.querySelector("[data-back-to-top]");

function handleTop(ev) {
  ev.preventDefault();
  document.documentElement.scrollTop = 0;
}

interface BookShop {
  id: any;
  books: Array<book>;
  addItem(
    id: any,
    category: "thriller" | "history" | "cooking" | "fantasy",
    name: string,
    price: number,
    img: any
  );
  //render(list: Array<book>, domElement);
  //renderItem(domElement: any);
  //filterByCategory();
  //filterByPrice();
  //updateBook();
  //deleteBook();
  //changeOrder()
  sortItemAsc();
  sortItemDesc();
}

interface book {
  id: any;
  category: "thriller" | "history" | "cooking" | "fantasy";
  title: string;
  price: number;
  img: any;
  year?: number;
}

const bookie: BookShop = {
  id: 0,
  books: [],
  addItem(category, title, price, img) {
    this.books.push({ id: this.id, category, title, price, img });
    this.id++;
  },

  sortItemAsc() {
    this.items.sort((a, b) => {
      return a.price - b.price;
    });
  },

  sortItemDesc() {
    this.items.sort((a, b) => {
      return b.price - a.price;
    });
  },
};

// addingForm.onsubmit(function(e) {})

//function handleAddToCart()
//function handleOpenThis()
//function handleOpenMenu()
//function handleCloseMenu()
//function handleSortDesc()
//function handleSortAsc(ev)
function makeId(book: book) {
  if (book.id === "uid"){
  let uid = Math.random().toString(36).slice(-8);
  book.id = uid;
}else {return}

}
function addItem(shop: BookShop, ev: any) {
  let id = ev.target.elements.id.value;
  let category = ev.target.elements.category.value;
  let title = ev.target.elements.title.value;
  let price = ev.target.elements.price.value;
  let img = ev.target.elements.image.files[0]?.name;
  let year = ev.target.elements.year.value;
  let book = { id, category, title, price, img, year };
  let newBook:book = book
  makeId(newBook);
  shop.books.push(newBook);
}
function handleAddItem(ev: any) {
  ev.preventDefault();
  addItem(bookie, ev);
  ev.target.reset();
  console.dir(bookie);
  // how to use localStorage:
  window.localStorage.setItem('shop', JSON.stringify(bookie))
  let shopRetreval = localStorage.getItem('shop')
  console.log('retrievedObject: ', JSON.parse(shopRetreval));
}

function showPreviewImage(ev: any) {
  const imagePreview = document.querySelector("[data-bookImage-preview]");
  const imgLink = ev.target.files[0].name;
  const preview = `<img src="./Images/${imgLink}" alt="">`;
  console.dir(imagePreview);
  console.dir(preview);
  console.dir(imgLink);
  imagePreview.innerHTML = preview;
}

