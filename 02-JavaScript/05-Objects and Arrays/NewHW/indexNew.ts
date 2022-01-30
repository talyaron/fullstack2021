
interface Obj {
    books: Array<string>,
    cloths: Array<string>,
    movies: Array<string>
    pushFunction: any,
}

let home: Obj = {
    books: ['gmara', 'more-nevuchim', 'the death of the west'],
    cloths: ['shirt', 'coat', 'pents', "shoos"],
    movies: ['the usual suspect', 'shawshank', 'snatch', "lock stock"],

    pushFunction(value, name): any {
        console.log(value);
        console.log(name);

        this[name].push(value)
        console.log(this);

    }
}

function handleSubmit(event: any) {
    event.preventDefault();
    console.log(event);

    for (let field of event.target) {
        if (field.name !== 'submit') {
            switch (field.value) {

                case '':
                    alert('Please fill all fields')
                    return;
                    break;

                default:
                    home.pushFunction(field.value, field.name);
                    break;
            }
        }
    }
}

function handleRemove(event) {
    event.preventDefault();
    console.log(event);

    home.books.pop();//תבדוק דרך אחרת איך ניתן למחוק אובייקטים
    home.cloths.pop();
    home.movies.pop();

    console.log(home);

}

for (let item in home) {
    /*
    לא קורה כלום ב
    DOM
    רק בקונסול
    */

    if (typeof home[item] !== "function") {
        let displayDom = document.querySelector(".render");
        displayDom.innerHTML += `${home[item]}`
    }
}





