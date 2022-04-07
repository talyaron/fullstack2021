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
function handleGetSearch(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var searchTerm, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    searchTerm = ev.target.value;
                    return [4 /*yield*/, axios.get("/sounds/search?searchTerm=" + searchTerm)];
                case 1:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetCatagories(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var categorySearch, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    categorySearch = ev.target.value;
                    return [4 /*yield*/, axios.get("/sounds/category?searchTerm=" + categorySearch)];
                case 1:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpload(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, type, location, description, duration, file, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, title = _a.title, type = _a.type, location = _a.location, description = _a.description, duration = _a.duration, file = _a.file;
                    console.log(title, type, location, description, duration, file);
                    title = title.value;
                    type = type.value;
                    location = location.value;
                    description = description.value;
                    duration = duration.value;
                    console.log(title, type, location, description, duration, file);
                    return [4 /*yield*/, axios.post('/sounds/upload-sound', { title: title, type: type, location: location, description: description, duration: duration, file: file })
                        // const sounds = { data }
                    ];
                case 1:
                    data = (_b.sent()).data;
                    // const sounds = { data }
                    console.log({ data: data });
                    return [2 /*return*/];
            }
        });
    });
}
function handleRegistration(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, password, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, name = _a.name, password = _a.password;
                    console.log(name, password);
                    name = name.value;
                    password = password.value;
                    console.log(name, password);
                    return [4 /*yield*/, axios.post('/soundUser/reg-user', { name: name, password: password })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleLogIn(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, password, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, name = _a.name, password = _a.password;
                    name = name.value;
                    password = password.value;
                    console.log(name, password);
                    return [4 /*yield*/, axios.post('/soundUser/sign-user', { name: name, password: password })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/soundUser/get-users')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
// function renderSongs(songs) {
//     const root = document.querySelector('#likedSongs')
//     try {
//         const html = songs.map(song => {
//             console.log(song);
//             return `<div class="card"><h2>${song.song} :${song.picture} ,${song.genre} ,${song.youtube}</h2>
//             <div><input type='text' placeholder='type' value='${song.genre}' onblur='handleupdate(event,"${song._id}")'/></div>
//             <button onclick='handleDelete("${song._id}")'>Delete</button>
//             <div><img src="${song.img}" alt=""></div></div>`
//         }).join('')
//         console.log(html);
//         root.innerHTML = html;
//         if (!root) throw new Error("no root in rendersongs");
//     } catch (error) {
//         console.error(error.message);
//     }
// }
