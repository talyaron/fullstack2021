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
                    return [4 /*yield*/, axios.get("/songs/search?searchTerm=" + searchTerm)];
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
                    return [4 /*yield*/, axios.get("/songs/category?searchTerm=" + categorySearch)];
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
        var _a, band, album, song, genre, image, data, songs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, band = _a.band, album = _a.album, song = _a.song, genre = _a.genre, image = _a.image;
                    console.log(band, album, song, genre, image);
                    band = band.value;
                    album = album.value;
                    song = song.value;
                    genre = genre.value;
                    image = genre.value;
                    console.log(band, album, song, genre, image);
                    return [4 /*yield*/, axios.post('/songs/upload-song', { band: band, album: album, song: song, genre: genre, image: image })];
                case 1:
                    data = (_b.sent()).data;
                    songs = { data: data };
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
                    return [4 /*yield*/, axios.post('/songsUser/reg-user', { name: name, password: password })];
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
                    return [4 /*yield*/, axios.post('/songsUser/sign-user', { name: name, password: password })];
                case 1:
                    data = (_b.sent()).data;
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
