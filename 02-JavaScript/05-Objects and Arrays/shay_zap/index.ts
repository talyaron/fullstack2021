interface Obj{
    zap:Array< Product >,
    addItem(product:Product),
    sortAsc?:any,
    sortDesc?:any,
    renderAll(domElement)
    renderZap(domElement:any, filterd:Array<Product>),
    renderFilter(domElement:any, filterd:Array<Product>);
    
     priceUnder
}
interface Product {
    product: string;
    price: number;
}

const myProduct: Obj={
    zap:[],
    addItem(product:Product){
        
        this.zap.push(product);
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
       <p>product: ${element.product}, price: ${element.price}</p></div>`
   });
    domElement.innerHTML = html;
},
renderFilter(domElement, filterd) {
    this.renderZap( domElement, filterd);
   
    
},

 priceUnder(item){
     
   if(item == ""){
       this.renderZap(this.Zap);
       return;
   }
    return  this.zap.filter(element=> element.price <= item);


} 
};



function handlePriceChange(ev) {
    ev.preventDefault();
  
    console.dir(ev.target);
    const product = ev.target.elements.title.value;
    const price = ev.target.elements.price.valueAsNumber;

    myProduct.addItem({ product, price });
    const rootZap= document.getElementById("rootZap");
    myProduct.renderAll(rootZap);
 
    ev.target.reset();
  }
// function sort(ev){
  
//     switch(ev.target.id){
//         case `asc`:   myProduct.sortAsc();
//         break;
//         case `desc`:   myProduct.sortDesc();
//     }
//     const rootZap = document.getElementById("rootZap");
//  myProduct.renderZap(this.zap, rootZap);
// }
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
console.log(myProduct);

console.log(this.zap);

