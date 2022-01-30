interface gucci {
    listOfItems: Array<item>;
    addItem(nameOfItem: string, type: "ring" | "bag", price: number);
    filterByType(type: "ring" | "bag"),
    //filterMaxPrice(price: number),
    sortByAscending?: any;
    sortByDescending?: any;
    filterLowerThan?: any;
}

interface item {
    nameOfItem: string;
    price: number;
    id?: string;
    type?: "ring" | "bag"
}


const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


const gucciStore: gucci = {
    listOfItems: [
        { nameOfItem: "gucci gold bag", price: 2000 },
        { nameOfItem: "gucci silver bag", price: 2300 }
    ],
    addItem(nameOfItem,price,type){
        const id=uid();
        this.listOfItems.push({nameOfItem,price,id,type});

    },
    filterByType(type){
        

    }


}

gucciStore.addItem("green gucci purse","bag",1000)
gucciStore.addItem("gold diamond ","ring",2000)
gucciStore.addItem("solid gold fannypack","bag",100000)
console.log(gucciStore)