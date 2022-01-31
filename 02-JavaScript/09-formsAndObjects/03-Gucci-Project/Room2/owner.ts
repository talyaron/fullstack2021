interface shop {
    products: Array<product>;
    addItem(products:product);
    updateItem();
    deleteItem();
  }

  interface product {
    item: "flipflop" | "headphones";
    title:string;
    picture:string;
    price:number;
    color:string;
    description:string;
    shoeSize:number;
}