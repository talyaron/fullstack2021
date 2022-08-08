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
var react_1 = require("react");
var material_1 = require("@mui/material");
var axios_1 = require("axios");
var FilterMenu = function (props) {
    var checked = props.checked, setChecked = props.setChecked, filterOptions = props.filterOptions, setFilterOptions = props.setFilterOptions, setUsersList = props.setUsersList, setCurrentUser = props.setCurrentUser, currentUser = props.currentUser;
    var _a = react_1.useState([]), fieldsOptions = _a[0], setFieldsOptions = _a[1];
    ////////////// sector filter options
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/api/users/get-sector")];
                    case 1:
                        data = (_a.sent()).data;
                        result = data.result;
                        setFilterOptions(result);
                        console.log(result);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    /////////// fieldOfKnowledge filter options
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/api/users/get-field")];
                    case 1:
                        data = (_a.sent()).data;
                        result = data.result;
                        setFieldsOptions(result);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    ////////////////////////////////////////the click gets the info about the current users and activates a function that brings all the matchings for the user (default page)
    function handleClick() {
        return __awaiter(this, void 0, void 0, function () {
            var data, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get("/api/users/get-user")];
                    case 1:
                        data = (_a.sent()).data;
                        user = data.user;
                        setCurrentUser(user);
                        handleGetUsers(currentUser);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    ////////////////////// brings all of the user best matching (default page)
    function handleGetUsers(currentUser) {
        return __awaiter(this, void 0, void 0, function () {
            var data, filterUsers, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].post("/api/users/get-users", {
                                currentUser: currentUser
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        filterUsers = data.filterUsers;
                        console.log(filterUsers);
                        setUsersList(filterUsers);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /////////// brings the filtered array of users
    function handleOnChangeSector(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var checkedField, data, allChecked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkedField = ev.target.id;
                        return [4 /*yield*/, axios_1["default"].post("/api/users/get-checked-sector", {
                                checkedField: checkedField
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        allChecked = data.allChecked;
                        setUsersList(allChecked);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleOnChangeField(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var checkedField, data, allChecked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkedField = ev.target.id;
                        return [4 /*yield*/, axios_1["default"].post("/api/users/get-checked-field", {
                                checkedField: checkedField
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        allChecked = data.allChecked;
                        setUsersList(allChecked);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { className: "matching__filter-menu" },
        React.createElement("div", { className: "_section" },
            React.createElement("div", { className: "_title" }),
            React.createElement("div", { className: "_more" },
                React.createElement(material_1.Accordion, null,
                    React.createElement(material_1.AccordionSummary, null,
                        React.createElement(material_1.Typography, null, "Sector")),
                    React.createElement(material_1.AccordionDetails, null,
                        React.createElement(material_1.List, { sx: {
                                width: "100%",
                                maxWidth: 360
                            } }, filterOptions.map(function (option, i) { return (React.createElement(material_1.ListItemButton, { disableGutters: true, key: "listItemButton-" + i },
                            React.createElement(material_1.Checkbox, null),
                            " ",
                            React.createElement("button", { id: option.sector, key: i, onClick: handleOnChangeSector }, option.sector))); })))),
                React.createElement(material_1.Accordion, null,
                    React.createElement(material_1.AccordionSummary, null,
                        React.createElement(material_1.Typography, null, "Country")),
                    React.createElement(material_1.AccordionDetails, null,
                        React.createElement(material_1.List, { sx: {
                                width: "100%",
                                maxWidth: 360
                            } }, fieldsOptions.map(function (option, i) { return (React.createElement(material_1.ListItemButton, { disableGutters: true, key: "list2-" + i + "-2" },
                            React.createElement(material_1.Checkbox, null),
                            React.createElement("button", { id: option.fieldsOfKnowledge, key: i, onClick: handleOnChangeField }, option.fieldsOfKnowledge))); })))))),
        React.createElement("button", { className: "matching__filter-menu_clear", onClick: handleClick }, "clear selection")));
};
exports["default"] = FilterMenu;
