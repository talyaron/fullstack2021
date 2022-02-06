interface BookShop{
    id: number;
    books: Array<book>;
    addItem(category:"thriller" | "history" | "cooking" | "fantasy", name:string, price:number, img:any);
    //render(list: Array<book>, domElement);
    //renderItem(domElement: any);
    //filterByCategory();
    //filterByPrice();
    //updateBook();
    //deleteBook();
    //changeOrder()
    sortItemAsc();
    sortItemDesc();

}

interface book{
    id: number;
    category: "thriller" | "history" | "cooking" | "fantasy";
    name: string;
    price:number;
    img: any;
}

const bookie: BookShop = {
    id: 0,
    books: [],
    addItem(category,name,price,img){
        this.books.push({id: this.id, category, name, price, img});
        this.id++;
    },

    sortItemAsc() {
        this.items.sort((a, b) => { return a.price - b.price });
    },

    sortItemDesc() {
         this.items.sort((a, b) => { return b.price - a.price });
    },
}


//function handleAddToCart()
//function handleOpenThis()
//function handleOpenMenu()
//function handleCloseMenu()
//function handleSortDesc()
//function handleSortAsc(ev)
