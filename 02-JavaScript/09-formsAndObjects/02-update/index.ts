console.log("ok");
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Zap {
  id?: number;
  data: Array<Item>;
  addItem(name: string, type: "computer" | "clothes");
  render(list: Array<Item>, domElement: any);
  renderAllData(domElement: any);
  filterByType(type: "computer" | "clothes");
  renderByType(type: "computer" | "clothes", domElement: any);
  deleteItem(id: string);
  updateItem(id:string, newName:string);
}

interface Item {
  id: number;
  name: string;
  type: "computer" | "clothes";
}

const myZap: Zap = {
  // id:0,
  data: [],
  addItem(name, type) {
    const id = uid();
    this.data.push({ id, name, type });

    //sequntial id
    // this.data.push({id:this.id, name, type });
    // this.id++;
  },
  deleteItem(id) {
    this.data = this.data.filter((item) => item.id !== id);
  },
  updateItem(id, newName) {
    //find index
    const index = this.data.findIndex((item) => item.id === id);
    //update the spesific item's name
    if (index >= 0) {
      this.data[index].name = newName;
    }
  },
  filterByType(type) {
    return this.data.filter((item) => item.type === type);
  },
  render(list, domElement) {
    let html = "";
    list.forEach((item) => {
      html += `<div class="item">
            <p>${item.name}</p>
            <button onclick="handleDelete('${item.id}')">Delete</button>
            <form onsubmit="handleUpdate(event, '${item.id}')">
            <input type="text" name="newName" placeholder="new name">
            <button type="submit">Update</button>
            </form>
            </div>`;
    });

    domElement.innerHTML = html;
  },
  renderAllData(domElement) {
    this.render(this.data, domElement);
  },
  renderByType(type, domElement) {
    const filterd = this.filterByType(type);
    this.render(filterd, domElement);
  },
};

myZap.addItem("lenovo 50", "computer");
myZap.addItem("lenovo 60", "computer");
myZap.addItem("lenovo 70", "computer");
myZap.addItem("lenovo 80", "computer");
myZap.addItem("lenovo 100", "computer");
myZap.addItem("lenovo 120", "computer");
myZap.addItem("shirt", "clothes");
myZap.addItem("pants", "clothes");
myZap.addItem("skirt", "clothes");
myZap.addItem("trousers", "clothes");
myZap.addItem("scarf", "clothes");

console.dir(myZap.data);
const root = document.getElementById("root");
myZap.renderAllData(root);

function handleSelect(ev) {
  const root = document.getElementById("root");
  const type = ev.target.value;
  if (type === "all") {
    myZap.renderAllData(root);
  } else {
    console.log(type);
    myZap.renderByType(type, root);
  }
}

function handleDelete(id) {
 
  const root = document.getElementById("root");
  myZap.deleteItem(id);
  myZap.renderAllData(root);
}

function handleUpdate(ev:any, itemId:string){
    ev.preventDefault();
    const newName:string = ev.target.elements.newName.value;
    myZap.updateItem(itemId, newName);
    const root = document.getElementById("root");
    
    myZap.renderAllData(root);
    
}