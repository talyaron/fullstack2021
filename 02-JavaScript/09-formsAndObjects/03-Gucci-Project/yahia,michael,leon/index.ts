const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Object {
    items: Array<namePrice>,
    carts:Array<type>,
    additems(name: string, price: number),
    sortAsc(),
    sortDes(),
    deleteItem(idItem: string),
    updateItem(idItem:string,newValue:string),
    addToCarts(type:string),
    selectItem(type:"shoes"|"pants"|"hoodie")
    renderAllData(root: any),
    renderAllCarts(root:any),
    render(root: any, list: any),

}
interface type{
    type:"shoes"|"pants"|"hoodie"
    name:string
}


interface namePrice {
    name: string;
    price: number;
    id: string;
    type:"shoes"|"pants"|"hoodie"
}

let nikeItems: object = {
    items: [],
    carts:[],
    additems(name, price) {
        const idItem = uid();
        this.items.push({ name, price, idItem })   
    },
    sortAsc() {
        this.items.sort((a, b) => a.price - b.price)

    },
    sortDes() {
        this.items.sort((a, b) => b.price - a.price)

    },
    deleteItem(idItem) {
        this.items = this.items.filter(item => item.idItem !== idItem)
        
    },
    updateItem(idItem,newValue){
        const i =this.items.findIndex(item=>item.idItem===idItem)
        this.items[i].name=newValue
    },
    addToCarts(type:string){
        this.carts.push(type)
    },
    renderAllCarts(root:any){
        const list=this.carts;
        this.renderCarts(root,list)
    },
    selectItem(type){

        this.carts.filter(type=>{
        
      
        })

    },
    renderAllData(root: any) {
        const list = this.items;
        this.render(root, list)
    },
    renderCarts(root,list){
        let htmlCustomer:string="";
        list.forEach(item=> {
            htmlCustomer+=`<div class= 'card'><h4>The Item You Want:</h4> <p>${item}</p></div>`
        });
        root.innerHTML = htmlCustomer;
    },
    render(root: any, list) {
        let html: string = '';

        list.forEach(item => {
            html += `<div class = 'card'> <p>${item.name}: ${item.price}</p>
            <button onclick="handleDelete('${item.idItem}')">delete</button>
            <form onsubmit="handleupdate(event,'${item.idItem}')">
            <input type="text" name="nameUpdate" placeholder="change item">
            <input type="submit" value="submit">
            </form>
            </div>`
            
        })
        root.innerHTML = html;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.description.value
    const price = event.target.elements.price.value
    nikeItems.additems(name, price)

    const root = document.getElementById('root');
    nikeItems.renderAllData(root);


    event.target.reset()

}

function handleAsce() {
    nikeItems.sortAsc()
    const root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
function handleDesce() {
    nikeItems.sortDes()
    const root = document.getElementById('root');

    nikeItems.renderAllData(root);
}
function handleDelete(id) {
    nikeItems.deleteItem(id);
    const root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
function handleupdate(event,id){
    event.preventDefault();
    const updateditem=event.target.elements.nameUpdate.value
    nikeItems.updateItem(id,updateditem)
    const root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
//customer
function handleCart(event){
    const type=event.target.id
    console.log(type);
    nikeItems.addToCarts(type)
    const root = document.getElementById('root');
    nikeItems.renderAllCarts(root);
}

function handleSelect(event){
const select=event.target.value

    
}