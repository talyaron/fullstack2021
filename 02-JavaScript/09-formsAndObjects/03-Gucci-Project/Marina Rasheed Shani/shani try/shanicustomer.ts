interface handbags{
    listOfBags:Array<bag>;
    addItem?:any;
    sortByAscending?:any;
    sortByDescending?:any;
    filterLowerThan?:any;
}

interface bag{
    nameOfBag:string;
    price:number;
    id?:string;
    type?:
}


const gucciBags:handbags={
    listOfBags:[
        {nameOfBag:"gucci gold bag",price:2000},
        {nameOfBag:"gucci silver bag",price:2300}
    ],
    

}