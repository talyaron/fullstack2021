// popup

const helloGuest: any = document.querySelector(".guest_mouseover");
const popup: any = document.querySelector(".popup_wrapper");
const closePopup: any = document.querySelector(".popup_close");

setTimeout(function popupTimeOut() { popup.style.visibility = 'visible'; }, 2000);

helloGuest.addEventListener('mouseover', () => {
    popup.style.visibility = 'visible';
});

closePopup.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
});

// popup.addEventListener('click', (e) => {       // does`nt work
//     console.log(e);
//     popup.style.visibility = 'hidden';
// });

// Search input on hover CSS changing
const generalInput: any = document.querySelector(".search");

generalInput.addEventListener("click", (e) => {
  generalInput.style.backgroundColor = "rgb(58, 63, 64)";
  generalInput.style.color = "white";
});

generalInput.addEventListener("mouseout", (e) => {
  generalInput.style.backgroundColor = "rgb(58, 63, 64)";
  generalInput.style.color = "white";
});

//login popup mouse event
const login: any = document.querySelector(".login");

login.addEventListener("mouseover", () => {
  login.style.cursor = "pointer";
});


// on COMPUTERS click event
const filteCategoryComputer = document.querySelector(".category");

filteCategoryComputer.addEventListener("click", () => {
  const html = `    <div class="computers">
        <div class="computers_comp1">
            <h3>Apple MacBook Air MGN93HB / A Apple</h3>
            <h4>Prise: 4,590   &star; &bigstar; &bigstar; &bigstar; &bigstar; </h4> 
            <p>Manufacturer: Apple, Screen size: 13.3 inches, Processor type: M1, RAM: 8 GB</p>
            <p>Screen: 2560 x1600, Touch screen: without, Hard drive: 256 GB, Weight: 1.29 kg</p>
        </div>
        <div>
            <img  style="width: 80%;" class="apple" src="https://img.zap.co.il/pics/3/4/3/5/58935343c.gif" alt="">
        </div>

    </div>`;
  const rootComp = document.querySelector("#rootComputer");
  rootComp.innerHTML = html;
});






const rootComp = document.querySelector("#rootComputer");
// interfaces
interface Computer {
  titleComp: string;
  price: number;
}

interface Zap {
  computers: Array<Computer>;
  addComputer(computer: Computer);
  removeComputer(compTitle: string);
  renderComp(domElement: any);
  sortAscen(price: number);
  sortDescen(price: number);
  newComp(price: number);
  renderFilter(price: number);
  //   renderAsc(): any;
}

const myZapSearch: Zap = {
  computers: [],

  addComputer(computer: Computer) {
    this.computers.push(computer);
  },

  removeComputer(compTitle: string) {
    const index = this.computers.findIndex(
      (computer) => computer.titleComp === compTitle
    );
    if (index >= 0) {
      this.computers.splice(index, 1);
    }
  },

  newComp(price): Array<Computer> {
    return this.computers.filter((computer) => {
      return computer.price > price;
    });
  },

  sortAscen() {
    this.computers.sort((a, b) => a.price - b.price);
    // renderAsc(this.computers, rootComp);
  },

  sortDescen() {
    this.computers.sort((a, b) => b.price - a.price);
  },

  renderComp(domElement) {
    let html = "";
    this.computers.forEach((computer) => {
      html = `<div class = "computers">
            <p>You were looking for</p>
            <h3>${computer.compDescription}</h3>
            <p>for</p> <h4>${computer.compPrice}</h4></div>`;
    });
    // console.log(html);
    domElement.innerHTML += html;
  },
};

// function renderAsc(sortAscen, rootComp) {
//   let sortedAscHtml = "";

//   for (let i in sortedArray) {
//     sortedAscHtml += `<div class="card"><p>${sortedArray[i].titleComp}: ${sortedArray[i].price}</p></div>`;
//   }
//   rootComp.innerHTML = sortedAscHtml;
// }


const newComp: any = myZapSearch.newComp(25);
console.log(newComp);

function handlePriceAscen(e) {
  //   console.log(e, e.targit);
  e.preventDefault();
  myZapSearch.sortAscen(price: number);
  myZapSearch.renderComp(rootComp);
  // myZapSearch.sortAscen(ev.target.elements.ascending.name);
}

function handlePriseDescen(e) {
  //   console.log(e, e.targit);
  e.preventDefault();
  myZapSearch.sortDescen(price: number);
  myZapSearch.renderComp(rootComp);
}

function handleDelete(e) {
  //   console.log(e, e.targit);
  e.preventDefault();
  myZapSearch.renderComp(rootComp);
}

function handleSubmit(e) {
  e.preventDefault();
  console.dir(e.target);
  const rootComp: any = document.querySelector("#rootComputer");
  const compDescription: any = e.target.elements.comp_title.value;
  const compPrice: number = e.target.elements.comp_price.value;
  myZapSearch.addComputer({ compDescription, compPrice });
  myZapSearch.renderComp(rootComp);

  e.target.reset();
}



// Filtering (M.F)
function handleFilter(e) {
  let fiterEvent = e.target.valueAsNumber;
  FilterIt(fiterEvent);
}

function FilterIt(filterNumber) {
    let filtered: Array<Computer> = [];
    
  filtered = myZapSearch.computers.filter((priceFilter) => {
    return priceFilter.price < filterNumber;
  });
  renderFilter(filtered, rootComp);
}

function renderFilter(compFiltered, rootComp) {
  let filteredHtml = "";

  for (let i in compFiltered) {
    filteredHtml += `<div class="card"><p>${compFiltered[i].titleComp}: ${compFiltered[i].price}</p></div>`;
  }
  rootComp.innerHTML = filteredHtml;
}