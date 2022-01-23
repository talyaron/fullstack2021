interface itemObject{
    items:Array<descriptionAndPrice>,
    addItem(newItem:descriptionAndPrice)
    renderItem(domElement:any)
}

interface descriptionAndPrice{
    company:string,
    price:number,
}

let zapitem:itemObject={
items:[],
addItem(addItem:descriptionAndPrice){
    this.items.push(addItem);
    // console.log(this)
    this.renderItem(root)
},
renderItem(itemOnDom){
    console.log(itemOnDom)
    console.log(this.items)
    let itemHtml:string='';
    

    this.items.forEach(item => {
        itemHtml=`<div class="card"><p>${item.company}:${item.price}</p></div>`
    })
    itemOnDom.innerHTML+=itemHtml;
}
}


function handlesubmit(event){
    event.preventDefault();   
     // console.log(event);
    const company=event.target.elements.description.value;
    const price=event.target.elements.price.valueAsNumber;

    zapitem.addItem({company,price});

    zapitem.renderItem(root);
    // console.log(zapitem)

    // event.traget.reset();

}
const root=document.querySelector(".rootItem");

zapitem.renderItem(root);



