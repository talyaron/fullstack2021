interface finditems {
    items: Array<newItem>;
    filteritem: Array<newItem>;
    additem(newitem: newItem);
    renderitem(domElement: any);
    renderitem2(domElemnt: any);
    sortitemsDES();
    sortitemacs();
    removeitem(newtitle: string)
   
}
interface newItem {
    nameofitem?: string,
    price?: number
    type:'tamir'|'tamir1'
}
let zapitems: finditems = {
    items: [],
    filteritem: [],

    additem: function (newitem: newItem) {
        this.items.push(newitem)
    },
    renderitem(domElement) {
        let html = '';
        this.items.forEach((item) => {
            html += `<div class='card'>
            you looking for:<h3> ${item.nameofitem} </h3> and his price is: ${item.price}$ 
            
             </div>`
        })
        domElement.innerHTML = html
    },
    renderitem2(domElement) {
        let html = '';
        this.filteritem.forEach((item) => {
            html += `<div class='card'>
            you looking for:<h3> ${item.nameofitem} </h3> and his price is: ${item.price}$ 
           </div>`
        })
        domElement.innerHTML = html
    },
    sortitemsDES() {
        this.items.sort((a, b) => { return a.price - b.price })
    },
    sortitemacs() {
        this.items.sort((a, b) => { return b.price - a.price })
    },
    removeitem(newtitle: string) {

        const index = this.items.findIndex(item => item.nameofitem == newtitle);
        if (index >= 0) {
            this.items.splice(index, 1)
        }
    },

}

zapitems.additem({nameofitem:'tamir',price:54,type:'tamir1'})
zapitems.additem({nameofitem:'avi',price:54,type:'tamir'})
zapitems.additem({nameofitem:'yosi',price:54,type:'tamir1'})
// מוסיף אובייקט לפי דרישה
function handleadditem(ev) {
    ev.preventDefault();
    const type=ev.target.elements.type.value;
    const nameofitem = ev.target.elements.title.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    zapitems.additem({ nameofitem, price ,type})
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
function handleprice(ev) {
    const price2 = ev.target.valueAsNumber;
    zapitems.filteritem = zapitems.items.filter(item => { return item.price < price2 })
    if (zapitems.filteritem.length > 0) {
        const rootitems = document.getElementById('renderitems');
        zapitems.renderitem2(rootitems);
    }
    else {
        const rootItems = document.getElementById('renderitems');
        zapitems.renderitem(rootitems);
    }
}
// מוחקת איטם אחד מהמסך לפי בחירה של המשתמש
function handleremoveitem(ev) {
    ev.preventDefault();
    const newtitle = ev.target.itemName.value;
    zapitems.removeitem(newtitle)
    zapitems.renderitem(rootitems);
    ev.target.reset();
}
const rootitems = document.getElementById('renderitems')
zapitems.renderitem(rootitems)




