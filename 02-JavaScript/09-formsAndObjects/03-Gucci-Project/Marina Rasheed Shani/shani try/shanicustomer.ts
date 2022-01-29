interface handbags{
    listOfBags:Array<bag>;
    sortByAscending?:any;
    sortByDescending?:any;
    filterLowerThan?:any
}

interface bag{
    nameOfBag:string;
    price:number;
    id?:string;
}


const gucciBags:handbags={
    listOfBags:[
        {nameOfBag:"gucci gold bag",price:2000},
        {nameOfBag:"gucci silver bag",price:2300}
    ],
    

}