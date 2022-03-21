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
function handleLoadSongs() {
    return __awaiter(this, void 0, void 0, function () {
        var data, songs, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/getSong')];
                case 1:
                    data = (_a.sent()).data;
                    songs = data.songs;
                    console.log(songs);
                    renderUsers(songs);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddSong(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, song, singer, type, photo, year, data, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    _a = ev.target.elements, song = _a.song, singer = _a.singer, type = _a.type, photo = _a.photo, year = _a.year;
                    song = song.value;
                    singer = singer.value;
                    type = type.value;
                    photo = photo.value;
                    year = year.valueAsNumber;
                    return [4 /*yield*/, axios.post('/addSong', { song: song, singer: singer, type: type, photo: photo, year: year })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    renderUsers(data);
                    if (!song || !singer || !type || !photo || !year)
                        throw new Error("no song , singer, photo, year, type in adding");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 3];
                case 3:
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetByType() {
    return __awaiter(this, void 0, void 0, function () {
        var data, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/getSongByType')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    users = data.users;
                    console.log(users);
                    if (users) {
                        renderUsers(users);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function renderUsers(songs) {
    try {
        console.log(songs);
        var html = songs.map(function (user) {
            return "<div class = \"songs\">\n        <img src=\"" + user.photo + "\">\n        <div class=\"description\">\n        <h2>" + user.song + "</h2>\n        <h3>" + user.singer + "</h3>\n        <h4>" + user.type + "</h4>\n        <h5>" + user.year + "</h5></div>\n        <div class=\"change\">\n        <input type='text' placeholder='photo' value=\"" + user.photo + "\" onblur='handleUpdate(event, \"" + user._id + "\")'/>\n        <input type='text' placeholder='song title' value=\"" + user.song + "\" onblur='handleUpdate(event, \"" + user._id + "\")'/>\n        <input type='text' placeholder='singer' value=\"" + user.singer + "\" onblur='handleUpdate(event, \"" + user._id + "\")'/>\n        <input type='text' placeholder='type' value=\"" + user.type + "\" onblur='handleUpdate(event, \"" + user._id + "\")'/>\n        <input type='text' placeholder='year' value=\"" + user.year + "\" onblur='handleUpdate(event, \"" + user._id + "\")'/>\n            </div>\n        <button onclick='handleDelete(\"" + user._id + "\")'>DELETE</button>\n    </div>";
        }).join('');
        // console.log(html)
        document.querySelector('#song').innerHTML = html;
    }
    catch (error) {
        console.error(error.message);
    }
}
function handleUpdate(ev, songId) {
    return __awaiter(this, void 0, void 0, function () {
        var newsong, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newsong = ev.target.value;
                    return [4 /*yield*/, axios.patch('/updateSong', { songId: songId, newsong: newsong })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderUsers(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDelete(songId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/deleteSong', { data: { songId: songId } })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderUsers(data);
                    return [2 /*return*/];
            }
        });
    });
}
