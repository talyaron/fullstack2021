const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface shop {
    products: Array<product>;
    addCartItem(products:product);
    renderAdidas(list:any, domElement: any);
    renderFilter(domElement, filterd);
    filterItems(highPrice?: number, lowPrice?:number),
    renderAll(domElement),
    shoeSizeFilter(size);
    sortItemsAsc();
    sortItemsDsc();
    sortByGender(item);
    sortByColor(color);
    sortByType(type);
    getData()
  }
  
  interface product {
      title:string;
      type:"Sneakers" | "Boots" | "Hi Tops" | "Flip Flops";
      picture:string;
      price:number;
      color:string;
      description:string;
      shoeSize:number;
      gender:string;
  }

 const Adidas:shop = {
    products:[],
    addCartItem(products:product){
        const id = uid;
        this.products.push(products, id);
    },
    renderAdidas(list, domElement){
        let html = ''
        this.products.forEach(item => {
            html += `<div class="item">
            <p><img src="${item.picture}" style="width: 200px; height: 200px;"></p>
            <p>${item.title}</p>
            <p> size: ${item.shoeSize}</p>
            <p> price: ${item.price}
            <button onclick="handleDelete('${item.id}')">Delete</button>
            </div>`
        })

        domElement.innerHTML = html;
    },
    renderFilter(domElement, filterd) {
        this.renderAdidas( domElement, filterd);
       
        
    },
    renderAll(domElement){
        const computers = this.products;
        this.renderAdidas(domElement, computers)
    },
    filterItems(highPrice, lowPrice){
        return this.products.filter((item) => item.price >= lowPrice && item.price <= highPrice);
    },
    shoeSizeFilter(size){
        return this.products.filter((item)=> item.size === size);
    },
    sortItemsAsc(){
        this.products.sort((x, y)=> y.price -x.price);
    },
    sortItemsDsc(){
        this.products.sort((x, y)=>x.price - y.price);
    },
    sortByGender(item){
        return this.products.filter((element)=> element.gender === item);
    },
    sortByColor(color){
        return this.products.filter((element)=> element.color === color);
    },
    sortByType(type){
        return this.products.filter((element)=> element.type === type);
    }
  }
 function handleCart(ev){
    //  const title = ev.target.elements.
 }
  function handlePriceRange(ev){
    const root = document.getElementById("rootCart");
      const priceLow = ev.target.valueAsNumber;
      const priceHigh = ev.target.valueAsNumber;
      if(priceLow && priceHigh){
  
       // console.log(price) + `price`;
        const filterd = Adidas.filterItems(priceLow && priceHigh)
        console.log(filterd)
        
        Adidas.renderFilter(root, filterd);
        } else {
          this.renderAll();
        }
  }
  function handleSort(ev){
    const sort = ev.target.value;
    ev.preventDefault();
    const root = document.getElementById("root");
     if(sort === ev.target.value.priceAsc){
  
      
     Adidas.renderAll(this.sortItemsAsc(root));
     }
     else if(sort === ev.target.value.priceDsc){
      Adidas.renderAll(this.sortItemsDsc(root));
     }
     else if(sort === ev.target.value.startPosition){
        ev.target.reset();
       }
  }
function handleType(ev){
    const type = ev.target.value;
    ev.preventDefault();
    const root = document.getElementById("root");
    // if(type === " ")
    return Adidas.renderFilter(root, Adidas.sortByType(type));
}
function handleColor(ev){
    const color = ev.target.value;
    ev.preventDefault();
    const root = document.getElementById("root");
    // if(type === " ")
    return Adidas.renderFilter(root, Adidas.sortByColor(color));
}
function handleGender(ev){
    const gender = ev.target.value;
    ev.preventDefault();
    const root = document.getElementById("root");
    // if(type === " ")

    return Adidas.renderFilter(root, Adidas.sortByGender(gender));
}
function handleShoeSize(ev){
    const size = ev.target.value;
    ev.preventDefault();
    const root = document.getElementById("root");
    Adidas.renderFilter(root, Adidas.shoeSizeFilter(size));
    // if(type === " ")
    //Adidas.shoeSizeFilter(size);
}

function getData() {
    this.products = +localStorage.getItem("products");
    console.log(JSON.parse(localStorage.getItem("Adidas")));
  }
  
  getData();
  
  console.log(this.products);