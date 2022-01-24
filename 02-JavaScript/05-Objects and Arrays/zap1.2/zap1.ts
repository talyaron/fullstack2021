interface laptopObject {
    laptops: Array<descriptionAndPrice>,
    addLaptop(newLaptop: descriptionAndPrice),
    renderLaptop(domElement: any),
    ascLaptops(),
    descLaptops(),
    renderAsc(sortedArray:Array<descriptionAndPrice>, rootLaptops:any),
    renderDesc(sortedArray: Array<descriptionAndPrice>, rootLaptops:any),
}

interface descriptionAndPrice {
    company: string,
    price: number,
}

let zapLaptops: laptopObject = {
    laptops: [],
    addLaptop(addLaptop: descriptionAndPrice) {

        this.laptops.push(addLaptop);
    },
    renderLaptop(laptopOnDom: any) {
        let laptopHtml: string = '';

        this.laptops.forEach(laptop => {
            laptopHtml = `<div class="card"><p>${laptop.company}: ${laptop.price}</p></div>`
        })
        laptopOnDom.innerHTML += laptopHtml;
    },
    ascLaptops() {
        //console.log(ascLaptops);//לבצע ת זה עם התניה של אין אורדר
        this.laptops.sort((a, b) => { return a.price - b.price });
        this.renderAsc(this.laptops, rootLaptops)
    },
    descLaptops() {
        this.laptops.sort((a, b) => { return b.price - a.price });
        this.renderDesc(this.laptops, rootLaptops)
    },
    renderAsc(sortedArray, rootLaptops) {

        let sortedAscHtml = ''

        for (let i in sortedArray) {
            sortedAscHtml += `<div class="card"><p>${sortedArray[i].company}: ${sortedArray[i].price}</p></div>`
        }
        rootLaptops.innerHTML = sortedAscHtml
    },
    renderDesc(sortedArray, rootLaptops) {
        let sortedDescHtml = ''

        for (let i in sortedArray) {
            sortedDescHtml += `<div class="card"><p>${sortedArray[i].company}: ${sortedArray[i].price}</p></div>`
        }
        rootLaptops.innerHTML = sortedDescHtml
    }
};


function handleSubmit(event) {
    event.preventDefault();

    const company = event.target.elements.description.value;
    const price = event.target.elements.price.valueAsNumber;

    zapLaptops.addLaptop({ company, price });
    zapLaptops.renderLaptop(rootLaptops);

    event.target.reset();
}


function handleAsc(ev) {
    ev.preventDefault();
    zapLaptops.ascLaptops()

}

function handleDesc(ev) {
    ev.preventDefault();
    zapLaptops.descLaptops();
}

//I decided to Diversify & to put filter outside the object----------

function handleFilter(e) {
    let fiterEvent = e.target.valueAsNumber
    FilterIt(fiterEvent)

}

function FilterIt(filterNumber) {
    let filtered: Array<descriptionAndPrice> = [];
    filtered = zapLaptops.laptops.filter(priceFilter => { return priceFilter.price < filterNumber; })
    renderFilter(filtered, rootLaptops)

}

function renderFilter(laptopsFiltered, rootLaptops) {
    let filteredHtml = ''

    for (let i in laptopsFiltered) {
        filteredHtml += `<div class="card"><p>${laptopsFiltered[i].company}: ${laptopsFiltered[i].price}</p></div>`
    }
    rootLaptops.innerHTML = filteredHtml
}

const rootLaptops = document.getElementById("rootLaptops");
zapLaptops.renderLaptop(rootLaptops);


