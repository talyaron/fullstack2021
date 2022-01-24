interface zap{
    products:Array<item>,
    addItem(product:item);
}
interface item{
    description:string;
    price:number
}


const zapPage:zap={
    products:[{description:"clock",price:20}],
    addItem(product:item){
        this.products.push(product);
    },
}


zapPage.addItem({description:"paper",price:5});
console.log(zapPage)