// document.getElementById('root').innerHTML
// async function handlestore(ev) {
//     ev.preventDefault();
// }

// async function getalldata() {
//     try {
//         const { data } = await axios.get("/get-all-data");
//         const { books, error } = (data);
//         if (error) throw new Error(error);
//         console.log(data);
//         console.log(books);
//         const root: Element = document.querySelector("#root")
//     } catch (err) {
//         console.error(err)
//     }
// }

// let catagories = {
//     adult: [
//         { id: 'sefer', price: 50, name: 'tanach' },
//         { id: 'baba', price: 70, },
//         { id: 'aas', price: 100 }
//     ],
//     encyclopedia: [
//         { id: 'sef', price: 50, name: 'kesef' },
//         { id: 'barr', price: 70, name: 'perot' },
//         { id: 'aee', price: 100, name: 'mada' }
//     ],
//     History: [
//         { id: 'sef', price: 50, name: 'israel' },
//         { id: 'barr', price: 70, name: 'world' },
//         { id: 'aee', price: 100, name: 'eropa' }
//     ],



//     storebooks: [],

//     searchbooks: [],





//     addbooks(id, price, name) {
//         try {
//             let books = catagories
//             this.books.push({ id, price, name })
//             this.storebooks();

//         } catch (error) {
//             console.error(error);
//         }
//     },


//     removebooks(id) {
//         try {

//             this.books = this.books.filter((books) => books.id !== id);
//             this.storeData();
//         } catch (error) {
//             console.error(error);
//         }
//     },


//     removeCartbooks(id) {
//         try {
//             const Root = document.getElementById("root")
//             this.cartbooks = this.cartbooks.filter((books) => books.id !== id);
//             this.storeData();
//             this.renderCart(catagories.addbooks, Root)
//         } catch (error) {
//             console.error(error);
//         }
//     },
//     Sorting: [],
//     addadult(catagories, id, price) {
//         const list = itemid();
//         if (catagories == 'adult') {
//             this.adult.push({ id, price })
//         }
//     },
//     addencyclopedia(catagories, id, price) {
//         const list = itemid();
//         if (catagories == 'encyclopedia') {
//             this.encyclopedia.push({ id, price })
//         }
//     },
//     addHistory(catagories, id, price) {
//         const list = itemid();
//         if (catagories == 'History') {
//             this.History.push({ id, price })
//         }
//     },

//     render(catagories) {
//         let html = "";
//         catagories.forEach((element) => {
//             html += `<form onsubmit='handlestore(event)'>

//             <select class="books_form-Catagory" name="Catagory" id="Catagory">
//                 <option class="books_form-Catagory-options" value="">Catagory</option>
//                 <option class="books_form-Catagory-options" value="Adult">books to Adult</option>
//                 <option class="books_form-Catagory-options" value="History">History books</option>
//                 <option class="books_form-Catagory-options" value="encyclopedia">encyclopedia</option>
//                 <input type="submit" value="submit">
//                 <input type="text" name="description" id="" placeholder="Addbooks">
//             </select>

//         <div class="books_form-actions">
//             <input class="books_form-actions-books" type="button" name="Add" id="add" value="ADD">
//             <input class="books_form-actions-books" type="button" name="filter" id="filter" value="Filter">
//             <input class="books_form-actions-btn" type="button" name="delete" id="delete" value="delete">
//             <input class="books_form-actions-btn" type="button" name="update" id="update" value="update">
//         </div>
// </form>`
//         });
//         catagories.innerHTML = html;
//     },
//     renderadult(catagories) {
//         this.render(this.adult, catagories);
//     },
//     renderencyclopedia(catagories) {
//         this.render(this.encyclopedia, catagories);
//     },
//     renderhistory(catagory) {
//         this.render(this.History, catagory);
//     },
// }

// function itemid() {
//     throw new Error("Function not implemented.");
// }


async function handleSubmit(ev) {
    ev.preventDefault()
    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;

    console.log(username, password) 
    const { data } = await axios.post("/add-users", { name, password })
    console.log(data)
}

async function handleGetUsers() {
    const { data } = await axios.get('/get-users')
    console.log(data)

  
    const { users } = data
    console.log(users)

    users.forEach(user => {
        console.log(`the name of user is ${user.username} and the password ${user.password}`)
    })
}

async function handlelogin(ev) {
   ev.preventDefault();
   let {username, password}= ev.target.elements;
username= username.value
password=password.value
console.log(username, password);
const {data}= axios.port('/users,login',{username,password})
console.log(data);
if (data.login){
    window.location.href='home.html'
}
}
