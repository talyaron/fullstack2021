async function initApp() {
    getBooks();
}
async function getBooks() {
    const { data } = await axios.get('/get-books')



    renderBooks(data);
}
async function handleSubmit(ev) {
    ev.preventDefault();

    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;


    const { data } = await axios.post('/add-user', { username, password });


    ev.target.reset();
}
async function handleAddBook(ev) {
    ev.preventDefault();
    let name = ev.target.elements.name.value;
    let year = ev.target.elements.year.value;
    let author = ev.target.elements.author.value;

    const book = { name, year, author }



    const { data } = await axios.post('/add-book', { book })

    renderBooks(data);
    ev.target.reset();

}
async function handleGetUsers() {
    const name = 'yoel'

    const { data } = await axios.get(`/get-users?${name}`)

    const { users } = data;

    renderUsers(users);
}
function handleUpdate(ev, userId) {

    const value = ev.target.value;

    const { data } = axios.patch('update-user', { value, userId })//with the update
    let { users } = data;

}
async function handleSort(ev) {
    let value = ev.target.value

    const { data } = await axios.post('/sort-books', { value })// I'm extracting the "data" out

    const { booksSite } = data; //I'm extracting the "booksSite" out

    // console.log("the {data} is data ", data);
    // console.log("the {bookSite} is " , booksSite);

    renderBooks(booksSite);



}
async function renderBooks(data) {
    try {
        if (data) {

            let html = '<div class = book>';

            const root = document.getElementById('root')

            console.log("data.bookss is" , data.books);
            console.log("data is" , data);

            data.books.forEach(book => {
                html +=
                    `
             <div class = "book-text">
             <h1> the name of the book is ${book.name} </h1> 
             <h2> published in year  ${book.year} </h2>
             <h3>the author is  ${book.author} <h3>
             </div>
           <div>
           <input type = "text" placeholder = "change the name" onblur = 'handleUpdate(event, "${book._id}")'</div>`

            })
            html += `<div>`
            root.innerHTML = html;
        }
        else {
            throw new Error("the obj is und");
        }
    } catch (error) {
        console.error(error.message)
    }
}
function renderUsers(users) {
    let html = '';

    const root = document.getElementById('rootUsers')

    users.forEach(user => {
        html += `<div> the name is ${user.username} 
        the password is ${user.password}` // //x.something .. the something need to be exactly the key of the users = "username , password " else it'll be undfind
    })

    root.innerHTML = html;

}