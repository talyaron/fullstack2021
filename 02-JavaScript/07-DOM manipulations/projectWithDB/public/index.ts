async function initApp() {
    getBooks();

}
async function getBooks() {
    const { data } = await axios.get('/get-books')

    renderBooks(data);
}
async function handleDescent(ev){
    //console.log(ev.target.value);
    let value = ev.target.value
    console.log(value);
    
    const {data} = await axios.post('/sort-books' , {value}
    
    

}
async function renderBooks(data) {
    let html = '';

    const root = document.getElementById('root')

    data.forEach(book => {
        html +=
            ` <div class = "book" >
                 <div class = "book-text">
                     the name of the book is ${book.name} 
                 <br> published in year  ${book.year}
                 <br> the author is  ${book.athor}
                </div>
        </div>`
    })
    root.innerHTML = html;

}