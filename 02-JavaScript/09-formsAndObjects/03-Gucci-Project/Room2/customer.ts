const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface shop {
    products: Array<product>;
    addCartItem(products:product);
    renderAdidas(domElement: any);
    renderFilter(domElement, filterd);
    filterItems(highPrice?: number, lowPrice?:number),
    shoeSizeFilter(price);
    sortItemsAsc();
    sortItemsDsc();
    sortByGender(item);
    sortByColor(color);
  }
  
  interface product {
      title:string;
      type:string;
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
    renderAdidas(domElement){
        let html = ''
        this.products.forEach(item => {
            html += `<div class="item">
            <img src=""/>
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
    filterItems(highPrice, lowPrice){
        return this.products.filter((item) => item.price >= lowPrice && item.price <= highPrice);
    },
    shoeSizeFilter(price){
        return this.products.filter((item)=> item.price === price);
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

  }
function handleType(ev){

}
function handleColor(ev){

}
function handleGender(ev){

}
function handleShoeSize(ev){
    
}