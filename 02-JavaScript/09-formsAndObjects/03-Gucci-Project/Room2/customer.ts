const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface shop {
    products: Array<product>;
    addCartItem(products:product);
    renderAdidas(domElement: any);
    filterItems(pricing?: number)
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
  }

//  const Adidas:shop = {

//   }
