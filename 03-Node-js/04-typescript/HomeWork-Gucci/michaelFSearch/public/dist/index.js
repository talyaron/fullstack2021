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
function handleSearch(ev) {
    try {
        var search = ev.target.value;
        if (!search)
            throw new Error("search in handleSearch");
        axios.get("/googleSearch?search=" + search)
            .then(function (_a) {
            var data = _a.data;
            var root = document.querySelector('#root');
            renderArticles(root, data);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleDelete() {
    var remove = document.querySelector('#remove');
    var array = [];
    remove.onclick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var markedCheckbox, _i, markedCheckbox_1, checkbox, data, root;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
                        for (_i = 0, markedCheckbox_1 = markedCheckbox; _i < markedCheckbox_1.length; _i++) {
                            checkbox = markedCheckbox_1[_i];
                            array.push(checkbox.id);
                        }
                        return [4 /*yield*/, axios.post('/deleteArticle', { array: array })];
                    case 1:
                        data = (_a.sent()).data;
                        root = document.querySelector('#root');
                        renderArticles(root, data);
                        return [2 /*return*/];
                }
            });
        });
    };
}
function handleAdd(e) {
    var rootAdd = document.querySelector('#rootAdd');
    renderForm(rootAdd);
}
function handleForm(e) {
    e.preventDefault();
    try {
        var titleForm = e.target.elements.title.value;
        var textForm = e.target.elements.text.value;
        var root = document.querySelector('#root');
        if (!titleForm || !textForm || !root)
            throw new Error("handleAdd");
        var data = axios.post('/addArticle', { title: titleForm, text: textForm }).data;
        renderArticles(root, data);
    }
    catch (error) {
        console.error(error);
    }
    e.target.reset();
}
function renderForm(rootAdd) {
    var html = "<form id=\"form\" onsubmit=\"handleForm(event)\">\n  <input type=\"text\" name=\"title\" placeholder=\"Title\">\n  <input type=\"text\" name=\"text\" placeholder=\"Abstract\">\n  <input type=\"submit\" name=\"submit\" value=\"Add\" style=\"border: 2px solid #20558a; background: transparent; color: #20558a; width: 100px; border-radius: 5px;\">\n  </form>\n  ";
    rootAdd.innerHTML = html;
}
function renderArticles(root, data) {
    try {
        var indexRoot = document.querySelector('#index');
        if (!root)
            throw new Error("root in renderArticles");
        if (!data)
            throw new Error("data in renderArticles");
        var html = '';
        for (var index = 0; index <= data.length; index++) {
            html += "<div class=\"container\">\n      <div class=\"index\">\n      <input type=\"checkbox\" class=\"delete\" id=\"" + data[index].id + "\" onchange=\"handleDelete()\"><span>" + (index + 1) + "</span> \n      </div>\n      <div class=\"card\">\n      <h2>" + data[index].title + "</h2>\n      <p>" + data[index].text + "</p>\n      <p>N Engl J Med. " + data[index].year + ";380(26):2518-2528. doi: 10.1056/NEJMoa1903076. Epub 2019 May 20.\n      PMID: 31112379</p>\n      </div>\n      </div>\n      ";
            root.innerHTML = html;
            indexRoot.innerHTML = data.length + '  results';
        }
    }
    catch (error) {
        console.error(error);
    }
}
