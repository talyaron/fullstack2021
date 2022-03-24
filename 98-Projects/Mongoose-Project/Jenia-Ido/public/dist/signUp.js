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
var forms = {
    renderSignUpFormfirstPage: function (display) {
        display.innerHTML = "\n        <form id=\"firstPage\" class=\"main_display-signUpForm\" onsubmit=\"newUserDetails(event)\" style=\"animation: signUpAnimation 2s 1s forwards;\">\n<h1 class=\"main_display-signUpForm-header\">enter details and create account</h1>\n<label class=\"\" style=\"color:white;\">birthday: </label>\n<input type=\"date\" name=\"birthDay\" id=\"birthDay\" style=\"background-color:gray\";>\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"Enter first name\">\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Enter last name\">\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"country\" id=\"country\" placeholder=\"your country\">\n<select class=\"main_display-signUpForm-genderSelect\" name=\"gender\" id=\"gender\">\n        <option hidden>Gender</option>\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n        </select>  \n<input class=\"main_display-signUpForm-input\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"Create Password...\" >\n<input class=\"main_display-signUpForm-input\" type=\"password\" name=\"passwordConfirm\" id=\"passwordConfirm\" placeholder=\"confirm password...\" >\n<input class=\"main_display-signUpForm-input\" type=\"email\" name=\"email\" id=\"email\" placeholder=\" Enter email...\">\n<input class=\"main_display-signUpForm-submit\" name=\"submit\" type=\"submit\" value=\"Go to profile\" >\n</form>";
    }, renderSignIn: function (display) {
        display.innerHTML = "\n    <form class=\"main_display-signInForm\" style=\"animation: signInAnimation 1.5s 1s forwards;\">\n    <label class=\"main_display-signInForm-label\">enter your email : \n    <input class=\"main_display-signInForm-input\" type=\"email\" name=\"email\" id=\"email\">\n    </label> \n    <label class=\"main_display-signInForm-label\">enter password :\n    <input class=\"main_display-signInForm-input\" type=\"password\" name=\"password\" id=\"password\">\n    </label>\n    <button class=\"main_display-signInForm-submit\" type=\"submit\" name=\"logInSubmit\" id=\"logInSubmit\">log in</button>  \n    </form>";
    }
};
function showSignUpFrom(ev) {
    var display = document.querySelector('.main_display');
    console.dir(ev.target);
    var btnId = ev.target.id;
    if (btnId == 'signUp') {
        forms.renderSignUpFormfirstPage(display);
    }
    else if (btnId == 'signIn') {
        forms.renderSignIn(display);
    }
    console.log(btnId);
}
function newUserDetails(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var form, display, birthday, firstName, lastName, country, gender, password, email, _i, _a, field, newUser, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    form = ev.target;
                    display = document.querySelector('.main_display');
                    console.dir(form);
                    // var birthday = new Date(birthdayInput);
                    for (_i = 0, _a = ev.target; _i < _a.length; _i++) {
                        field = _a[_i];
                        if (field.name !== "submit") {
                            if (field.name == "birthDay") {
                                birthday = field.value;
                            }
                            else if (field.name == "firstName") {
                                firstName = field.value;
                            }
                            else if (field.name == "lastName") {
                                lastName = field.value;
                            }
                            else if (field.name == "country") {
                                country = field.value;
                            }
                            else if (field.name == "gender") {
                                gender = field.value;
                            }
                            else if (field.name == "password") {
                                password = field.value;
                            }
                            else if (field.name == "email") {
                                email = field.value;
                            }
                        }
                    }
                    console.log(birthday);
                    newUser = { firstName: firstName, lastName: lastName, birthday: birthday, country: country, password: password, email: email, gender: gender };
                    return [4 /*yield*/, axios.patch('/get-addNewUser', { newUser: newUser })];
                case 1:
                    data = (_b.sent()).data;
                    return [2 /*return*/];
            }
        });
    });
}
function creatNewUser(ev) {
    ev.preventDefault();
    var form = ev.target;
    console.dir(ev.target);
    console.log(ev.target.style[0]);
}
