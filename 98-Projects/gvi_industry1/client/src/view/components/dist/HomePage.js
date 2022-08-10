"use strict";
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
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var RegisterMentee_1 = require("../Components/RegisterMentee");
var RegisterMentor_1 = require("../Components/RegisterMentor");
var UserSelection_1 = require("../Components/UserSelection");
var Login_1 = require("../Components/Login");
var HomePage = function (props) {
    var setloggedInUser = props.setloggedInUser, setCurrentUserType = props.setCurrentUserType;
    var _a = react_1.useState(false), loginWindow = _a[0], setLoginWindow = _a[1];
    var _b = react_1.useState(false), registerWindow = _b[0], setRegisterWindow = _b[1];
    var _c = react_1.useState([]), countryArray = _c[0], setCountryArray = _c[1];
    var _d = react_1.useState(false), menteeWindow = _d[0], setMenteeWindow = _d[1];
    var _e = react_1.useState(false), mentorWindow = _e[0], setMentorWindow = _e[1];
    var _f = react_1.useState('showThirdSection-none'), thirdSection = _f[0], setThirdSection = _f[1];
    var _g = react_1.useState('showSecondSection-none'), secondSection = _g[0], setSecondSection = _g[1];
    var _h = react_1.useState(''), firstSection = _h[0], setFirstSection = _h[1];
    var _j = react_1.useState(''), showProgressBar = _j[0], setShowProgressBar = _j[1];
    var _k = react_1.useState(''), closeForm = _k[0], setCloseForm = _k[1];
    function handleToggleShowSections() {
        setSecondSection('showSecondSection-block');
        setFirstSection('showFirstSectionSection-none');
    }
    function handleToggleShowThirdSection() {
        setSecondSection('showSecondSection-none');
        setThirdSection('showThirdSection-block');
    }
    function handleBackToggleShowSections() {
        setSecondSection('showSecondSection-none');
        setFirstSection('showFirstSectionSection-block');
    }
    function handleBackToggleShowThirdSection() {
        setThirdSection('showThirdSection-none');
        setSecondSection('showSecondSection-block');
    }
    function handleBackToSelection() {
        setRegisterWindow(true);
        setMentorWindow(false);
        setMenteeWindow(false);
    }
    react_1.useEffect(function () {
        getCountries();
    }, []);
    function getCountries() {
        return __awaiter(this, void 0, void 0, function () {
            var data, countries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get('https://restcountries.com/v3.1/all')];
                    case 1:
                        data = (_a.sent()).data;
                        countries = data.sort(function (a, b) { return a.name.common.localeCompare(b.name.common); });
                        console.log(countries);
                        setCountryArray(data);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleCloseRegisterWindow() {
        setMenteeWindow(false);
        setMentorWindow(false);
    }
    return (react_1["default"].createElement("div", { className: 'homeContainer' },
        react_1["default"].createElement("div", { className: 'welcomeText' },
            react_1["default"].createElement("div", { className: 'logo' },
                react_1["default"].createElement("img", { src: "./gvi-logo.png", alt: "logo" })),
            react_1["default"].createElement("div", { className: 'text-btn-wrapper' },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h1", null, "Welcome to GVI"),
                    react_1["default"].createElement("h3", null, "Global Accelerator"),
                    react_1["default"].createElement("p", null, "The GVI Global Accelerator would assist startups from  ideation to global expansion hand in hand with GVI global partners across borders")),
                react_1["default"].createElement("div", { className: 'loginBtns' },
                    react_1["default"].createElement("button", { className: 'button-login', onClick: function () { setLoginWindow(!loginWindow); } }, "Login "),
                    react_1["default"].createElement("button", { className: 'button-request', onClick: function () { setRegisterWindow(!registerWindow); } }, "Request Access")))),
        react_1["default"].createElement("div", { className: 'videoWindow' },
            react_1["default"].createElement("img", { src: "./video.png", alt: "" })),
        react_1["default"].createElement(Login_1["default"], { loginWindow: loginWindow, setLoginWindow: setLoginWindow, setCurrentUserType: setCurrentUserType, setloggedInUser: setloggedInUser }),
        react_1["default"].createElement(UserSelection_1["default"], { registerWindow: registerWindow, setRegisterWindow: setRegisterWindow, menteeWindow: menteeWindow, setMenteeWindow: setMenteeWindow, mentorWindow: mentorWindow, setMentorWindow: setMentorWindow }),
        react_1["default"].createElement(RegisterMentee_1["default"], { setCurrentUserType: setCurrentUserType, registerWindow: registerWindow, setRegisterWindow: setRegisterWindow, menteeWindow: menteeWindow, setMenteeWindow: setMenteeWindow, countryArray: countryArray, handleCloseRegisterWindow: handleCloseRegisterWindow, secondSection: secondSection, firstSection: firstSection, thirdSection: thirdSection, showProgressBar: showProgressBar, handleToggleShowSections: handleToggleShowSections, handleBackToggleShowSections: handleBackToggleShowSections, handleBackToSelection: handleBackToSelection, handleToggleShowThirdSection: handleToggleShowThirdSection, handleBackToggleShowThirdSection: handleBackToggleShowThirdSection }),
        react_1["default"].createElement(RegisterMentor_1["default"], { setCurrentUserType: setCurrentUserType, countryArray: countryArray, registerWindow: registerWindow, setRegisterWindow: setRegisterWindow, mentorWindow: mentorWindow, setMenteeWindow: setMenteeWindow, handleCloseRegisterWindow: handleCloseRegisterWindow, secondSection: secondSection, firstSection: firstSection, thirdSection: thirdSection, showProgressBar: showProgressBar, handleToggleShowSections: handleToggleShowSections, handleBackToggleShowSections: handleBackToggleShowSections, handleBackToSelection: handleBackToSelection, handleToggleShowThirdSection: handleToggleShowThirdSection, handleBackToggleShowThirdSection: handleBackToggleShowThirdSection })));
};
exports["default"] = HomePage;
