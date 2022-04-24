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
function initApp() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            getBooks();
            return [2 /*return*/];
        });
    });
}
// 
function getBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/book/get-books')];
                case 1:
                    data = (_a.sent()).data;
                    renderBooks(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    username = ev.target.elements.username.value;
                    password = ev.target.elements.password.value;
                    return [4 /*yield*/, axios.post('/user/add-user', { username: username, password: password })];
                case 1:
                    data = (_a.sent()).data;
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddBook(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, year, author, book, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    year = ev.target.elements.year.value;
                    author = ev.target.elements.author.value;
                    book = { name: name, year: year, author: author };
                    return [4 /*yield*/, axios.post('/book/add-book', { book: book })];
                case 1:
                    data = (_a.sent()).data;
                    renderBooks(data);
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdate(ev, bookId) {
    return __awaiter(this, void 0, void 0, function () {
        var name, year, author, book, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    year = ev.target.elements.year.value;
                    author = ev.target.elements.author.value;
                    book = { name: name, year: year, author: author };
                    return [4 /*yield*/, axios.patch('/book/update-book', { book: book, bookId: bookId })]; //with the update
                case 1:
                    data = (_a.sent()) //with the update
                    .data;
                    if (data.ok) {
                        renderBooks(data.books);
                    }
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleReg(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, regNSign, data, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    username = ev.target.elements.username.value;
                    password = ev.target.elements.password.value;
                    regNSign = document.getElementById('regNSign');
                    console.log(username, password);
                    return [4 /*yield*/, axios.post('/user/reg-user', { username: username, password: password })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.error) {
                        alert('this username is already existed , you need to sign in'); // not work
                        window.location.href = 'sign.html'; // not work
                    }
                    if (data.ok) {
                        html = "<div> welcome " + data.name.username + " </div>";
                        console.log(html);
                        regNSign.innerHTML = html;
                        window.location.href = 'index.html';
                    }
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleSign(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, data, html, regNSign;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    username = ev.target.elements.username.value;
                    password = ev.target.elements.password.value;
                    return [4 /*yield*/, axios.post('/user/sign-in', { username: username, password: password })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.ok) {
                        html = "" + data.user.username;
                        regNSign = document.getElementById('regNSign');
                        regNSign.innerHTML = html;
                        window.location.href = 'index.html';
                    }
                    if (data.error) {
                        alert(data.error);
                    }
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleSort(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var value, data, booksSite;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = ev.target.value;
                    return [4 /*yield*/, axios.post('/book/sort-books', { value: value })]; // I'm extracting the "data" out
                case 1:
                    data = (_a.sent()) // I'm extracting the "data" out
                    .data;
                    booksSite = data.booksSite;
                    renderBooks(booksSite);
                    return [2 /*return*/];
            }
        });
    });
}
function renderBooks(data) {
    return __awaiter(this, void 0, void 0, function () {
        var html_1, root;
        return __generator(this, function (_a) {
            try {
                if (data) {
                    html_1 = '<div class = "book">';
                    root = document.getElementById('root');
                    console.log('in the render ', data);
                    data.forEach(function (book) {
                        html_1 +=
                            "\n             <div class = \"book-text\">\n             <h1> the name of the book is " + book.name + " </h1> \n             <h2> published in year  " + book.year + " </h2>\n             <h3>the author is  " + book.author + " <h3>\n             </div>\n           <div>\n           <button onclick= 'handleDelete(\" " + book._id + "\")'>Delete</button>\n           <form onsubmit='handleUpdate(event, \"" + book._id + "\")'>\n           <input type=\"text\" name=\"name\" placeholder=\"write  name of the book\">\n           <br>\n           <input type=\"number\" name=\"year\" placeholder=\"write  Production year of the book\">\n           <br>\n           <input type=\"text\" name=\"author\" placeholder=\"write  author of the book\">\n           <br>\n           <input type=\"submit\" value=\"Update Book\">\n       </form>\n   \n</div>";
                        // <input type = "text" placeholder = "change the name" onblur = 'handleUpdate(event, "${book._id}")'
                    });
                    html_1 += "<div>";
                    root.innerHTML = html_1;
                }
                else {
                    throw new Error("the obj is und");
                }
            }
            catch (error) {
                console.error(error.message);
            }
            return [2 /*return*/];
        });
    });
}
function handleDelete(bookId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            data = axios["delete"]('/book/delete-book', { data: { bookId: bookId } }).data;
            console.log("We couldn't do that.");
            console.log(data);
            return [2 /*return*/];
        });
    });
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
