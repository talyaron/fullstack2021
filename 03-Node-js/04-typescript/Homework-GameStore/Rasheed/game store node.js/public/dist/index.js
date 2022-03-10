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
var axios;
function getGames() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-games")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    if (Array.isArray(data))
                        return [2 /*return*/, data];
                    return [2 /*return*/];
            }
        });
    });
}
function handleStore() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getGames()];
                case 1:
                    data = _a.sent();
                    renderData(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleErp() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getGames()];
                case 1:
                    data = _a.sent();
                    renderErp(data);
                    return [2 /*return*/];
            }
        });
    });
}
function renderData(data) {
    var html = "";
    data.forEach(function (data) {
        html += "<div class=\"game\">\n            <div class=\"game__section-text\">\n        <h1>" + data.title + "</h1>\n        <h3>" + data.type + "</h3>\n        <p>" + data.description + "</p>\n        <h4>" + data.price + "</h4>\n        <button class=\"game__buy-btn\" >Buy now</button>\n        </div>\n        \n        <div class=\"game__section-img\">  \n        <img src=\"" + data.img + "\"  alt=\"\">\n        </div>\n        </div>";
    });
    var root = document.querySelector('#root');
    root.innerHTML = html;
}
function renderErp(data) {
    var html = "";
    data.forEach(function (data) {
        html +=
            "<div>" + data.title + "</div>  \n        <img src=\"" + data.img + "\">\n        <div>" + data.type + "</div>\n        <div>" + data.description + "</div>\n        <div>" + data.price + "</div>\n        <div class=\"wrapper\">\n        <form class=\"erpForm\" id=\"" + data.id + "\" onsubmit=\"handleUpdateGame(event)\">\n        \n        <input type=\"text\" value=\"" + data.title + "\" name=\"title\" placeholder=\"game title\">\n        \n        <input type=\"text\" value=\"" + data.price + "\" name=\"price\" placeholder=\"game price\">\n        \n        <input type=\"text\" value=\"" + data.description + "\" name=\"description\" placeholder=\"game description\">\n        \n        <input type=\"text\" value=\"" + data.img + "\" name=\"img\" placeholder=\"game img\">\n        \n        <select value=\"" + data.type + "\" name=\"selectType\" id=\"selectType\">\n            <option value=\"" + data.type + "\" value disabled selected>Choose type</option>\n            <option value=\"strategy\">Strategy</option>\n            <option value=\"shooter\">Shooter</option>\n            <option value=\"rpg\">RPG</option>\n            <option value=\"survival\">Survival</option>\n        </select>\n        \n        <input type=\"text\" value=\"" + data.id + "\" name=\"id\" placeholder=\"game id\">\n        <button class=\"btn\">UPDATE</button>\n        </div>\n        <div class=\"btnwrapper\">\n        <button class=\"btn\" onclick=\"handleDelete('" + data.id + "')\">Delete</button>\n        </div>\n        </form>\n        </div>";
    });
    var root = document.querySelector('#root');
    root.innerHTML = html;
}
function handleLoadErp() {
    handleErp();
}
function handleLoadStore() {
    handleStore();
}
function handleAddGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, price, description, img, type, id, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    title = ev.target.elements.title.value;
                    price = ev.target.elements.price.value;
                    description = ev.target.elements.description.value;
                    img = ev.target.elements.img.value;
                    type = ev.target.elements.selectType.value;
                    id = ev.target.elements.id.value;
                    return [4 /*yield*/, axios.post("/add-games", { title: title, price: price, description: description, img: img, type: type, id: id, ok: true })];
                case 1:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    renderErp(data);
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleDelete(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post("/delete-games", { id: id, ok: true })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderErp(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdateGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, price, description, img, type, id, data, ok, store;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    title = ev.target.elements.title.value;
                    price = ev.target.elements.price.value;
                    description = ev.target.elements.description.value;
                    img = ev.target.elements.img.value;
                    type = ev.target.elements.selectType.value;
                    id = ev.target.elements.id.value;
                    return [4 /*yield*/, axios.patch('/update-games', { title: title, price: price, description: description, img: img, type: type, id: id })];
                case 1:
                    data = (_a.sent()).data;
                    ok = data.ok, store = data.store;
                    if (ok) {
                        renderErp(store);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function setFormMessage(formElement, type, message) {
    var messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add("form__message--" + type);
}
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.querySelector("#login");
    var createAccountForm = document.querySelector("#createAccount");
    document.querySelector("#linkCreateAccount").addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
    document.querySelectorAll(".form__input").forEach(function (inputElement) {
        inputElement.addEventListener("blur", function (ev) {
            if (ev.target.id === "signupUsername" && ev.target.value.length > 0 && ev.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
        inputElement.addEventListener("input", function (e) {
            clearInputError(inputElement);
        });
    });
});
var modal = document.getElementById('singIN');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
