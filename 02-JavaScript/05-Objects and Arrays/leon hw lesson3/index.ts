interface myHome {
    books: Array<string>
    clothes: Array<string>
    movies: Array<string>
    addItems: any
}


const myHome: any = {
    books: [],
    clothes: [],
    movies: [],
    addItems: function () {
        this.books.push({ name: `harry potter`, year: `1923` }, { name: `god of war` }),
            this.clothes.push({ name: `jeans` }, { name: `shirt` })
        this.movies.push({ name: `name:fast and furious` }, { name: `the saw` })
        return this
    }
}
console.log(myHome.addItems())


function renderItems(myHome, domElement) {
    //יוצאת שגיא בקונסול, לא ניתן לראות את ה
    //innerHTML

    let html = '';
    this.movies.forEach(movie => {
        html += `<div class='card'>
        <p>${movie.name}, ${movie.year}</p></div>`
    })

    domElement.innerHTML = html

    myHome.movies.forEach(movie => {
        let homeHtml = `<div class='card'><h2>${movie.name}</h2> </div>`;
        html += homeHtml;
    })
    html += `<h1>clothes:</h1>`
    myHome.clothes.forEach(clothes => {
        let homeHtml = `<div class='card'><h2>${clothes.name}</h2> </div>`;
        html += homeHtml;
    })

    domElement.innerHtml = html;

}
const root = document.querySelector(`#rootItems`);
renderItems(myHome, root)









