async function initApp() {
    getBooks();


}
// 
async function getBooks() {
    const { data } = await axios.get('/book/get-books')



    renderBooks(data);
}
async function handleSubmit(ev) {
    ev.preventDefault();

    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;



    const { data } = await axios.post('/user/add-user', { username, password });


    ev.target.reset();
}
async function handleAddBook(ev) {
    ev.preventDefault();
    let name = ev.target.elements.name.value;
    let year = ev.target.elements.year.value;
    let author = ev.target.elements.author.value;

    const book = { name, year, author }
    const { data } = await axios.post('/book/add-book', { book })

    renderBooks(data);
    ev.target.reset();

} async function handleUpdate(ev, bookId) {
    ev.preventDefault();
    let name = ev.target.elements.name.value;
    let year = ev.target.elements.year.value;
    let author = ev.target.elements.author.value;

    const book = { name, year, author }


    const { data } = await axios.patch('/book/update-book', { book, bookId })//with the update


    if (data.ok) {
        renderBooks(data.books);
    }
    ev.target.reset();
}
// async function handleGetUsers() {
//     const name = 'yoel'

//     const { data } = await axios.get(`/user/get-users?${name}`)

//     const { users } = data;

//     renderUsers(users);
// }
async function handleReg(ev) { // working 
    ev.preventDefault();

    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;
 //    const regNSign = document.getElementById('regNSign')


    const { data } = await axios.post('/user/reg-user', { username, password })
 
    
    if (data.error) {
        alert('this username is already existed , you need to sign in')// not work
        window.location.href = 'sign.html'// not work
    }
    if (data.ok) {
        let html = `welcome ${data.user.username} `;

        //alert(html)
        // localStorage.setItem('nameOfTheUser' , html )


        window.location.href = 'index.html'





     //   regNSign.innerHTML = html;



    }
    ev.target.reset();
}


async function handleSign(ev) {
    ev.preventDefault();

    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;

    const {data } = await axios.post('/user/sign-in', { username, password })

    if (data.ok) {

        let html = `${data.user.username}`;

        //const regNSign = document.getElementById('regNSign')

        //regNSign.innerHTML = html;
        window.location.href = 'index.html'
        alert(`hii ${html}`)
    }
    if (data.error) {
        alert(data.error)
    }


    ev.target.reset();
}
async function handleSort(ev) {
    let value = ev.target.value

    const { data } = await axios.post('/book/sort-books', { value })// I'm extracting the "data" out

    const { booksSite } = data; //I'm extracting the "booksSite" out



    renderBooks(booksSite);

}
async function renderBooks(data) {
    try {
        if (data) {

            let html = '<div class = "book">';

            const root = document.getElementById('root')
            console.log('in the render ', data);


            data.forEach(book => {
                html +=
                    `
             <div class = "book-text">
             <h1> the name of the book is ${book.name} </h1> 
             <h2> published in year  ${book.year} </h2>
             <h3>the author is  ${book.author} <h3>
             </div>
           <div>
           <button onclick= 'handleDelete(" ${book._id}")'>Delete</button>
           <form onsubmit='handleUpdate(event, "${book._id}")'>
           <input type="text" name="name" placeholder="write  name of the book">
           <br>
           <input type="number" name="year" placeholder="write  Production year of the book">
           <br>
           <input type="text" name="author" placeholder="write  author of the book">
           <br>
           <input type="submit" value="Update Book">
       </form>
   
</div>`

                // <input type = "text" placeholder = "change the name" onblur = 'handleUpdate(event, "${book._id}")'

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
async function handleDelete(bookId) {//problem with Delete


    const { data } = axios.delete('/book/delete-book', { data: { bookId } })
    //   console.log("We couldn't do that.");

    //    console.log(data);



    // renderBooks(books)


}
// function renderUsers(users) {
//     let html = '';

//     const root = document.getElementById('rootUsers')

//     users.forEach(user => {
//         html += `<div> the name is ${user.username}
//         the password is ${user.password}` // //x.something .. the something need to be exactly the key of the users = "username , password " else it'll be undfind
//     })

//     root.innerHTML = html;

// }