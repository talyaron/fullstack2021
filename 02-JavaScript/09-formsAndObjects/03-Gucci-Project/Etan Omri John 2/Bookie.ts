const selectRoot = document.querySelector("[data-update-book-by-id]");
const addingForm = document.querySelector("[data-addingItemForm]");
const bookTitle = document.querySelector("[data-bookTitle]");
const imagePreview = document.querySelector("[data-bookImage-preview]");
const rootBooks = document.querySelector("[data-rootBooks]");
let backToTop = document.querySelector("[data-back-to-top]");


function handleTop(ev) {
  ev.preventDefault();
  document.documentElement.scrollTop = 0;
}
function hideTopBtn(){
  let rootElement = document.documentElement;
  let topTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / topTotal) > 0.80) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
}
document.addEventListener("scroll", hideTopBtn)
interface BookShop {
  id: any;
  books: Array<book>;
  addItem(ev: any)
    // render(list: Array<book>, domElement);
    renderItem(domElement: any);
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
    img?: any;
    year?: number;
  }
  
  const bookie: BookShop = {
    id: 0,
    books: [{id: 1, category: "thriller",title: 'okay',price: 19.99, img: 'https://static-cse.canva.com/blob/142541/Yellow-Surgeon-Creative-Book-Cover.jpg',year:1998}, {id: 1, category: "thriller",title: 'okay',price: 19.99, img: 'https://static-cse.canva.com/blob/142541/Yellow-Surgeon-Creative-Book-Cover.jpg',year:1998}, {id: 1, category: "thriller",title: 'okay',price: 19.99, img: 'https://static-cse.canva.com/blob/142541/Yellow-Surgeon-Creative-Book-Cover.jpg',year:1998}, {id: 1, category: "thriller",title: 'okay',price: 19.99, img: 'https://static-cse.canva.com/blob/142541/Yellow-Surgeon-Creative-Book-Cover.jpg',year:1998}, {id: 1, category: "thriller",title: 'okay',price: 19.99, img: 'https://static-cse.canva.com/blob/142541/Yellow-Surgeon-Creative-Book-Cover.jpg',year:1998}],
    addItem(ev:any) {
      let id = ev.target.elements.id.value;
  let category = ev.target.elements.category.value;
  let title = ev.target.elements.title.value;
  let price = ev.target.elements.price.value;
  let img = ev.target.elements.image.files[0]?.name;
  let year = ev.target.elements.year.value;
  let book = { id, category, title, price, img, year };
  let newBook: book = book;
  makeId(newBook);
  this.books.push(newBook);
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
    renderItem(domElement){
      let html = '';

        this.books.forEach(item => {
          domElement ='';
            html += `
            <div class="rootBooks__card">
                <button class="rootBooks__card__bag" data-add-to-bag><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 14">
                        <symbol viewBox="0 0 15 14" id="svg-icon-shopping-bag">
                            <title>shopping-bag</title>
                            <g fill="currentColor">
                                <path
                                    d="M13,4.2h-2.4l0-2c0-1.1-1.3-2-3-2s-3,0.8-3,2l0,2H1.9c-1,0-1.6,0.5-1.6,1.2l0.5,7.8h13.4l0.6-7.7&#10;&#9;&#9;&#9;C14.8,4.7,14,4.2,13,4.2z M6.1,2.2c0.1-0.1,0.6-0.5,1.5-0.5c0.9,0,1.4,0.3,1.5,0.5l0,2h-3L6.1,2.2z M12.8,11.7H2.2L1.8,5.8&#10;&#9;&#9;&#9;c0,0,0.1,0,0.1,0H13c0.1,0,0.2,0,0.2,0L12.8,11.7z" />
                            </g>
                        </symbol>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-shopping-bag" />
                    </svg></button>
                <button class="rootBooks__card__heart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13.5">
                        <symbol viewBox="0 0 15 13.5" id="svg-icon-saved-items">
                            <title>saved-items</title>
                            <g fill="currentColor">
                                <path
                                    d="M12.5,5.3l-5,5.2l-5-5.3c0,0-0.8-0.9-0.8-1.5c0-1,0.8-1.8,1.7-1.8c0.6,0,1.1,0.3,1.4,0.9l2.6,2.7l2.7-2.8l0,0&#10;&#9;&#9;&#9;c0.3-0.5,0.8-0.9,1.5-0.9c0.9,0,1.7,0.8,1.7,1.8C13.4,4.4,12.5,5.3,12.5,5.3 M11.5,0c-1.1,0-2.1,0.6-2.7,1.5L7.5,2.8L6.2,1.5&#10;&#9;&#9;&#9;C5.6,0.6,4.6,0,3.5,0C1.5,0,0,1.7,0,3.8c0,1.2,0.5,2.3,1.4,3l1.3,1.4l4.9,5.3l0,0l0,0l4.9-5.3l1.2-1.4C14.5,6.1,15,5,15,3.8&#10;&#9;&#9;&#9;C15,1.7,13.5,0,11.5,0" />
                            </g>
                        </symbol>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon-saved-items" />
                    </svg></button>
                <img src='${item.img}' alt="" class="rootBooks__card__img">
                <div class="rootBooks__card__title">${item.title}</div>
                <div class="rootBooks__card__price">${item.price}</div>
            </div>`
        });
        domElement.innerHTML = html
    }
  };
  let localBookie = bookie
  
  
  
  
  
  // addingForm.onsubmit(function(e) {})
  
  //function handleAddToCart()
  //function handleOpenThis()
  //function handleOpenMenu()
  //function handleCloseMenu()
  //function handleSortDesc()
  //function handleSortAsc(ev)
  function makeId(book: book) {
    if (book.id === "uid") {
      let uid = Math.random().toString(36).slice(-8);
      book.id = uid;
    } else {
      return;
    }
  }
  localBookie.renderItem(rootBooks)
  
  function handleAddItem(ev: any) {
    ev.preventDefault();
    console.dir(bookie);
    localBookie.addItem(ev)
    localStorage.setItem("Bookie shop", JSON.stringify(localBookie))
    ev.target.reset();
    console.log(localBookie);

    // localBookie.makeOptions(ev)
    // how to use localStorage:
    //   window.localStorage.setItem("Bookie shop", JSON.stringify(bookie));
    // let shopRetreval = localStorage.getItem("Bookie shop");
    // console.log("retrievedShop: ", JSON.parse(shopRetreval));
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
  
  function handleUpdate(ev: any) {
    ev.preventDefault();
    console.dir(ev.target);
  }
  
  
  
  
  localStorage.setItem("Bookie shop", JSON.stringify(localBookie))
  const stringBookie = localStorage.getItem("Bookie shop")
let parsedBookie = JSON.parse(stringBookie)
console.log(parsedBookie)
let ascPrice =(a:book,b:book)=>{
  return a.price - b.price
}
let descPrice = (a, b) => {
  return b.price - a.price;
}
let ascYear =(a:book,b:book)=>{
  return a.year - b.year
}
let descYear = (a, b) => {
  return b.price - a.price;
}
  // create an option to choose and update for each book
  function makeAnOption(shop: BookShop, root:any, sortFunc) {

    shop.books.sort(sortFunc);
  shop.books.forEach(
    (book) =>
      (root.innerHTML += `<option value="${book.id}">${book.title}(${book.year})</option>`)
  );
}
localBookie = bookie;
makeAnOption(localBookie, selectRoot, descPrice)
console.log(parsedBookie)
console.log(localBookie)

