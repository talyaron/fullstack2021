console.log('owner')

// interface aviator {

//     items: Array<newItem>

// }
interface newItem {
    img: string
    name: string
    price: number

}

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

let stock = {
    items: [
        { name: 'DOUGLAS DAY 41', price: 45, img: `https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp` },
        { name: 'DOUGLAS DAY-DATE 41', price: 55, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.276.4.webp' },
        { name: 'DOUGLAS', price: 35, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-dc-3/AVIATOR-WATCH--DOUGLAS-DC-3--V.3.32.2.237.4.webp' },
        { name: 'tamir', price: 57, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.277.4.webp' },
        { name: 'avi', price: 140, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.280.4.webp' },
        { name: 'nir', price: 60, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.274.4.webp' }
    ],
    addItem() {
    }
}

function handleSubmit(ev){
    ev.preventDefault();
    const newItem = {name: "", price:0, img:"", group:"", Collection:"", function:""};
    for (let field of ev.target){
        console.log(field.value);
        let name = field.name;
        switch(name){
            case "name":
                newItem.name = field.value;
            break;
            case "price":
                newItem.price = field.value;
            break;
        }
        
    }
    
}
