//get data

const store = {
  getProducts: async function () {
    try {
      const { data } = await axios.get("/get-products");
      console.log(data);
      if (Array.isArray(data)) return data;
      throw new Error("data is not an array");
    } catch (err) {
      console.error(err);
      return [];
    }
  },
  loadStore: async function () {
    const products = await this.getProducts();
    this.renderStore(products);
  },
  loadERP: async function () {
    const products = await this.getProducts();
    this.renderERP(products);
  },
  renderStore(products: Array<any>) {
    const root: HTMLElement = document.querySelector("#root");
    //render
    let html = "";
    products.forEach((product) => {
      html += `<p>${product.title}</p>`;
    });

    root.innerHTML = html;
  },
  renderERP(products: Array<any>) {
    const root: HTMLElement = document.querySelector("#root");
    //render
    let html = "";
    products.forEach((product) => {
      html += `<form class='stam' id="${product.id}" onsubmit="handleUpdateProduct(event)"><input type="text" value="${product.title}" name="title" placeholder="product title"><button>UPDATE</button></form>`;
    });

    root.innerHTML = html;
  },
};

function handleStoreLoad() {
  store.loadStore();
}

function handleERPLoad() {
  store.loadERP();
}

async function handleUpdateProduct(ev){
    try{
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    let id = ev.target.id;
    id = `${id}aa`;
    console.log(id)

    const {data} = await axios.patch('/update-product',{title,id});
    const {ok, products, error} = data;
    // console.log(ok, products)
    if(error) throw new Error(error)
    if(ok){
        console.log('aaaaaaa')
        store.renderERP(products);
        document.querySelector(`#${id}`).classList.add("blink");
        setTimeout(()=>{
            document.querySelector(`#${id}`).classList.remove("blink");
        },500)
    }
} catch(err){
    console.error(err.message)
}



}
