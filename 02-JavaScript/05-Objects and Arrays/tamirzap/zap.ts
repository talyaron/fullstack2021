interface finditems {
    items: Array<newItem>;
    additem(newitem: newItem);
    renderitem(domElement: any);
    sortitemsDES();
    sortitemacs();
    thelowerprice(ev);
}


interface newItem {
    nameofitem: string,
    price: number
}

let zapitems: finditems = {
    items: [],
    additem: function (newitem: newItem) {
        this.items.push(newitem)
    },
    renderitem(domElement) {
        let html = '';
        this.items.forEach((item) => {
            html += `<div class='card'>
            you looking for: ${item.nameofitem}  and is price his: ${item.price}  </div>`
        })

        domElement.innerHTML = html
    },
    sortitemsDES() {
        this.items.sort((a, b) => { return a.price - b.price })
    },
    sortitemacs() {
        this.items.sort((a, b) => { return b.price - a.price })
    },
    thelowerprice(ev) {
     

    }

}

// מוסיף אובייקט לפי דרישה
function handleadditem(ev) {
    ev.preventDefault();
    const nameofitem = ev.target.elements.title.value;
    const price: number = ev.target.elements.price.valueAsNumber;

    zapitems.additem({ nameofitem, price })
    zapitems.renderitem(rootitems)
    ev.target.reset();

}
// ממיין את הרשימה לפי מחיר מלמעלה למטה
function handlesortitem(ev) {
    ev.preventDefault();
    zapitems.sortitemsDES()
    zapitems.renderitem(rootitems)
}
// ממיין את הרשימה לפי מחיר מלמטה למעלה
function handlesortitemacs(ev) {
    ev.preventDefault();
    zapitems.sortitemacs()
    zapitems.renderitem(rootitems)
}
// ברגע שהמשתמש מרים את היד מהמקלדת הפונקציה מתחילה לעבוד
function handlethelowerprice(ev) {
    zapitems.thelowerprice(ev) 
    zapitems.renderitem(rootitems)
}

const rootitems = document.getElementById('renderitems')
zapitems.renderitem(rootitems)



