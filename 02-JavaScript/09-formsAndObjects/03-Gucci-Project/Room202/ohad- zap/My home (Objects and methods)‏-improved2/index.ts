const admin= 'no';

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface MyHome {
    id?:number;
    data: Array<Item>
    addItem(name: string, type: "Movie" | "Book" | "Clothes", price:number);
    render(list: Array<Item>, domElement: any);
    renderAllData(domElement: any);
    filterByType(type: "Movie" | "Book" | "Clothes");
    renderByType(type: "Movie" | "Book" | "Clothes", domElement: any);
    deleteItem(id:string);
    updateItem(id:string, newName:string, newPrice:number);
    sortAscending?:any;
    sortDescending?:any;
}

interface Item {
    id:number;
    name: string,
    price:number,
    type: "Movie" | "Book" | "Clothes"
}

const MyHome: MyHome = {
    data: [],
    addItem(name, type,price) {
        const id = uid();
        this.data.push({id, name, type, price});
    },
    deleteItem(id){
        this.data = this.data.filter(item=>item.id !== id);
    },
    filterByType(type) {
        return this.data.filter(item => item.type === type);
    },
    render(list, domElement) {
        let html = ''
        list.forEach(item => { 
            html += `<div class="item">
            <p >${item.name} - ${item.price}₪    (${item.type})</p>
            <form onsubmit="handleUpdate(event, '${item.id}')">
            <input type="text" name="newName" placeholder="new name" value="${item.name}">
            <input type="number" name="newPrice" placeholder="new price" value="${item.price}">
            <button type="submit">Update</button>
            <button onclick="handleDelete('${item.id}')">Delete</button>
            </form>
            <hr>
            </div>`
        })

        domElement.innerHTML = html;
    },
    renderAllData(domElement) {
        this.render(this.data, domElement);
    },
    renderByType(type, domElement) {
        const filterd = this.filterByType(type);
        this.render(filterd, domElement);
    },
    sortAscending() {
            this.data.sort((a, b) => {return a.price - b.price;})
    },
    sortDescending() {
            this.data.sort((a, b) => {return b.price - a.price;})
    },
    updateItem(id, newName, newPrice) {
        //find index
        const index = this.data.findIndex((item) => item.id === id);
        //update the spesific item's name
        if (index >= 0) {
          this.data[index].name = newName;
          this.data[index].price = newPrice;
        }
      }
}

MyHome.addItem('Harry Potter', 'Book', 20,);
MyHome.addItem('Harry Potter 2', 'Book', 30);
MyHome.addItem('shirt', 'Clothes', 177);
MyHome.addItem('pants', 'Clothes', 132);
MyHome.addItem('Joker', 'Movie', 40);
MyHome.addItem('Spider-Man','Movie', 40);


const root = document.getElementById('root');
MyHome.renderAllData(root)


function handleAddItem(ev){
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const price:number = ev.target.elements.price.valueAsNumber;
    const type = ev.target.elements.type.value;

    MyHome.addItem(name, type, price);
    MyHome.renderAllData(root);
    ev.target.reset();//reset the form fileds
}

function handleSelectSort(ev) {
    const root = document.getElementById('root');
    const type = ev.target.value;
    if (type === 'all') {
        MyHome.renderAllData(root);
    } else {
        MyHome.renderByType(type, root);
    }
}

function handleDelete(id){
    console.log(id)
    const root = document.getElementById('root');
    MyHome.deleteItem(id);
    MyHome.renderAllData(root);  
}

function handleUpdate(ev:any, itemId:string){
    ev.preventDefault();
    const newName:string = ev.target.elements.newName.value;
    const newPrice:number = ev.target.elements.newPrice.valueAsNumber;
    MyHome.updateItem(itemId, newName,newPrice);
    const root = document.getElementById('root');
    
    MyHome.renderAllData(root);
}

function handleAsc(event){
    const root = document.getElementById('root');
    event.preventDefault();
    MyHome.sortAscending();
    MyHome.renderAllData(root);

};
function handleDesc(event){
    const root = document.getElementById('root');
    event.preventDefault();
    MyHome.sortDescending();
    MyHome.renderAllData(root);
}