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
  id: number;
  books: Array<book>;
  addItem(
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
  id: number;
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

function handleAddItem(ev: any) {
  ev.preventDefault();
  console.dir(ev.target);
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
