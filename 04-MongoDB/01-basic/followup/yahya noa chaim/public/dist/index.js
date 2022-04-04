// document.getElementById('root').innerHTML
// async function handlestore(ev) {
//     ev.preventDefault();
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function handleSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, password, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    name = ev.target.elements.username.value;
                    password = ev.target.elements.password.value;
                    console.log(name, password);
                    return [4 /*yield*/, axios.post("/add-users", { name: name, password: password })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-users')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    users = data.users;
                    console.log(users);
                    users.forEach(function (user) {
                        console.log("the name of user is " + user.username + " and the password " + user.password);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
