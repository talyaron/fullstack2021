interface gucci {
    listOfItems: Array<item>;
    addItem(nameOfItem: string, price: number,type: "jewelry" | "bag"),
    render(list:Array<item>,domElement),
    renderAllData(domElement:any),
    filterByType(type: "jewelry" | "bag"),  
    renderfilterByType?(type: "jewelry" | "bag",domElement:any), 
    sortByAscending?: any,
    sortByDescending?: any,
    //filterLowerThan?(price: number),
    
    

}

interface item {
    nameOfItem: string,
    price: number,
    id?: string,
    type: "jewelry" | "bag",
    img?:string,
}


const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


const gucciStore: gucci = {
    listOfItems: [
        { nameOfItem: "gucci gold bag", price: 200, type:"bag"},
        { nameOfItem: "gucci silver bag", price: 2300 ,type:"bag"}
    ],
    addItem(nameOfItem,price,type){
        const id=uid();
        this.listOfItems.push({nameOfItem,price,id,type});

    },
    render(list,domElement){
        let html="";
        list.forEach(item=>{
            html+=`<div class="item">
            <h3>${item.nameOfItem}</h3>
            <p>${item.type}</p>
            <h3>${item.price}</h3>      
            </div>`
        });
        domElement.innerHTML=html;    
    },
    renderAllData(domElement){
     this.render(this.listOfItems,domElement);
    },
    
    filterByType(type){
        return this.listOfItems.filter(item=> item.type==type);

    },
    renderfilterByType(type,domElement){
    const filtered=this.filterByType(type);
    this.render(filtered,domElement)

    },
    sortByAscending(){
        this.listOfItems.sort((a,b)=>{return a.price-b.price})
    },
    sortByDescending(){
        this.listOfItems.sort((a,b)=>{return b.price-a.price})
    },
    


}

gucciStore.addItem("green gucci purse",1000,"bag")
gucciStore.addItem("gold diamond ring ",2000,"jewelry")
gucciStore.addItem("silver diamond ring ",1000,"jewelry")
gucciStore.addItem("solid gold fannypack",100000,"bag")

gucciStore.sortByAscending()
gucciStore.sortByDescending()
console.log(gucciStore.listOfItems)
//console.log(gucciStore)

const root=document.getElementById('root')
gucciStore.renderAllData(root)

//gucciStore.renderfilterByType("jewelry",root)

function handleSelect(ev){
    console.dir(ev)
    const type=ev.target.value;
    if(type==="all"){
     gucciStore.renderAllData(root)

    }else{
        const root=document.getElementById('root')
        gucciStore.renderfilterByType(type,root)


    }


    
}

function handlePriceAsc(ev){
    gucciStore.sortByAscending()
    const root=document.getElementById('root')
    gucciStore.renderAllData(root);

}
function handlePriceDesc(ev){
    gucciStore.sortByDescending()
    const root=document.getElementById('root')
    gucciStore.renderAllData(root);

}