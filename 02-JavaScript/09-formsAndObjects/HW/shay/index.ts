console.log('ok');
const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
interface Obj{
    id?:number,
    zap:Array< Product >,
    addItem(product:string, price:number, type: "computer" | "games"|"movie"),
    sortAsc?:any,
    sortDesc?:any,
    renderAll(domElement)
    renderZap(domElement:any, list:Array<Product>),
    renderFilter(domElement:any, filterd:Array<Product>);
    renderByType(type: "computer" | "games"|"movie", domElement),
    deleteItem(id:string),
    filterByType(type: "computer" | "games"|"movie"),
     priceUnder
}
interface Product {
    id:number,
    product: string;
    type:  "computer" | "games"|"movie",
    price: number;
}

const myProduct: Obj={
    zap:[],
    addItem(product, price, type){
        const id = uid();
        this.zap.push({id, product, price,type});
    },
    sortAsc(){
        this.zap.sort((x, y)=> y.price -x.price)
      
    },
    sortDesc(){
        this.zap.sort((x, y)=> x.price -y.price)
    },
    renderAll(domElement) {
        const computers = this.zap;
        this.renderZap(domElement, computers)
      
      },
    renderZap(domElement, list){
    let html = "";
console.log(list);

    list.forEach(element => {
       html+=`<div class = 'card'>
       <p>product: ${element.product}, price: ${element.price}</p>
       <button onclick="handleDelete('${element.id}')">Delete</button></div>`
   });
    domElement.innerHTML = html;
},
renderFilter(domElement, filterd) {
    this.renderZap( domElement, filterd);
   
    
},
deleteItem(id){
    this.zap = this.zap.filter(item=>item.id !== id);
},
filterByType(type) {
    return myProduct.zap.filter(item => item.type === type);
    
    
},
 priceUnder(item){
     
   if(item == ""){
       this.renderZap(this.Zap);
       return;
   }
    return  this.zap.filter(element=> element.price <= item);


},
renderByType(type, domElement) {
    const filterd = this.filterByType(type);
    console.log(filterd) + `filterd`;
    
    this.renderZap( domElement, filterd);
}
};



function handlePriceChange(ev) {
    ev.preventDefault();
  
    console.dir(ev.target);
    const product = ev.target.elements.title.value;
    const price = ev.target.elements.price.valueAsNumber;
    const type = ev.target.elements.type.value;
    myProduct.addItem(  product, price, type);
    
    const rootZap= document.getElementById("rootZap");
    myProduct.renderAll(rootZap);
 
    ev.target.reset();
  }
function handleAsc(event){
    event.preventDefault();
     myProduct.sortAsc();
     const rootZap = document.getElementById("rootZap");
    myProduct.renderAll(rootZap);

};
function handleDesc(event){
    event.preventDefault();
     myProduct.sortDesc();
     const rootZap = document.getElementById("rootZap");
    myProduct.renderAll(rootZap);
}

function handleFilter(ev){
    const price = ev.target.valueAsNumber;
    const rootZap = document.getElementById("rootZap");
    if(price){
  
    console.log(price) + `price`;
    const filterd = myProduct.priceUnder(price)
    console.log(filterd)
    
    myProduct.renderFilter(rootZap, filterd);
    } else {
      this.renderAll();
    }
    
}
function handleSelect(ev) {
    const rootZap = document.getElementById('rootZap');
    const theType = ev.target.value;
    if (theType === 'all') {
        myProduct.renderAll(rootZap);
    } else {
        console.log(theType)+` theType`;
        myProduct.renderByType(theType, rootZap);
    }
}
function handleDelete(id){
    console.log(id)
    const rootZap = document.getElementById('rootZap');
    myProduct.deleteItem(id);
    myProduct.renderAll(rootZap);  
}
console.log(myProduct);

console.log(this.zap);

myProduct.addItem('lenovo 50',1550, 'computer');
myProduct.addItem('lenovo 60',2000, 'computer');
myProduct.addItem('lenovo 70',2500, 'computer');
myProduct.addItem('lenovo 80', 3000, 'computer');
myProduct.addItem('lenovo 100',4000, 'computer');
myProduct.addItem('lenovo 120',5000, 'computer');
myProduct.addItem('Fortnite GiftCard',100, 'games');
myProduct.addItem('Roblox GiftCard',120, 'games');
myProduct.addItem('Valorant GiftCard',60, 'games');
myProduct.addItem('League Of Legends GiftCard',50, 'games');
myProduct.addItem('Fifa GiftCard',50, 'games');
myProduct.addItem('One Tree Hill season 1',200, 'movie');