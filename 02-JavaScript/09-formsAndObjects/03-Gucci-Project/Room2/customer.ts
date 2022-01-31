interface shop {
    products: Array<product>;
    addItem(products:product);
    renderAdidas(domElement: any);
    filterItems(pricing?: number)
    sortItemsAsc();
    sortItemsDsc();
    sortByType(item);
  }
  
  interface product {
      title:string;
      picture:string;
      price:number;
      color:number;
  }