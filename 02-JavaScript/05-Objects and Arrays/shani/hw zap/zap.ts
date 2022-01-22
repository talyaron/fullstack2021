interface zap {
    products: Array<item>,
    addItem(product: item);
    renderItem(array:any);
    sortAscending(orderBy?: any);
    sortDescending?(orderBy?: string);
    lowerThan
}
interface item {
    description: string;
    price: number
}


const zapPage: zap = {
    products: [{ description: "clock", price: 20 }],
    addItem(product: item) {
        this.products.push(product);
    },
    renderItem(array) {
        let html = "";
        array.forEach(item => {
            html += `<div class='card'>
            <p>${item.description}, ${item.price}</p></div>`

        })
        document.getElementById('rootZap').innerHTML = html
    },
    sortAscending() {
        // const ascending = document.getElementById('Ascending')

        // ascending.addEventListener('click', (product) => {
        //     this.product.sort((a, b) => { return a.price - b.price })
        // })
        document.getElementById("ascending").addEventListener("click", () => {
            this.products.sort((a, b) => {return a.price - b.price;})
            this.renderItem(this.products);
        });



    },
    sortDescending() {
        document.getElementById("descending").addEventListener("click", () => {
            this.products.sort((a, b) => {return b.price - a.price;})
            this.renderItem(this.products);
        });
    },
    lowerThan(input) {
        if (input == ""){
            this.renderItem(this.products);  
            return;
        }
        let filteredArray = this.products.filter(product => product.price < Number(input))
        this.renderItem(filteredArray);
    },


}
//render makes what i wrote in the ts show on the html
//the handle submit makes the input responsive
function handleSubmit(ev) {
    ev.preventDefault();
    // console.dir(ev.target.value)
    const description = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;

    zapPage.addItem({ description, price });
    zapPage.renderItem(zapPage.products);

    //zapPage.sortAscending({description, price})



    ev.target.reset();
}

function handleInput(ev) {
    console.log(ev.target.value)
    zapPage.lowerThan(ev.target.value)
}



zapPage.addItem({ description: "paper", price: 5 });
console.log(zapPage)

const rootZap = document.getElementById('rootZap');
zapPage.renderItem(zapPage.products);

zapPage.sortAscending();
console.log(zapPage.products);
zapPage.sortDescending();
// console.log(zapPage.products);


