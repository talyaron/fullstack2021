interface Obj{
    zap:Array< Product >,
    addItem?:any,
    sortAsc?:any,
    sortDesc?:any,
    renderZap?:any,
     priceUnder
}
interface Product {
    product: string;
    price: number;
}

const myProduct: Obj={
    zap:[],
    addItem(products:Product){
        
        this.zap.push(products);
    },
    sortAsc(){
        this.zap.sort((x, y)=> y.price -x.price)
      
    },
    sortDesc(){
        this.zap.sort((x, y)=> x.price -y.price)
    },
    renderZap(domElement){
    let html = "";

    this.zap.forEach(element => {
        html+=`<div class = 'card'>
        <p>product: ${element.product}, price: ${element.price}</p></div>`
    });
    domElement.innerHTML = html;
},
 priceUnder(item){
     
   if(item == ""){
       this.renderZap(this.Zap);
       return;
   }
    let listFilter = this.zap.filter(element=> element.price <= (item));
    console.log(listFilter);
    
    myProduct.renderZap(listFilter);

}
};



function handlePriceChange(ev) {
    ev.preventDefault();
  
    console.dir(ev.target);
    const product = ev.target.elements.title.value;
    const price = ev.target.elements.price.valueAsNumber;

    myProduct.addItem({ product, price });
    const rootZap= document.getElementById("rootZap");
    myProduct.renderZap(rootZap);
    ev.target.reset();
  }
function sort(ev){
    switch(ev.target.id){
        case `asc`: myProduct.sortAsc();
        break;
        case `desc`: myProduct.sortDesc();
    }
    myProduct.renderZap(rootZap)
}

function handleFilter(ev){
myProduct.priceUnder(ev.target.value)
console.log(ev.target.value);
    
}

console.log(myProduct);
const rootZap = document.getElementById("rootZap");
 myProduct.renderZap(rootZap);

