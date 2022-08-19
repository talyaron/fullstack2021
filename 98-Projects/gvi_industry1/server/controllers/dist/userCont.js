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
exports.getUsersAns = exports.answers_users_req = exports.requestAnsUser = exports.getRequestUsers = exports.mentee_mentor_users_req = exports.getAnsReqUser = exports.getRequestedUser = exports.requestUser = exports.getLoggedInProfile = exports.addFlags = exports.adminGetAllUsers = exports.updateUserDetails = exports.getUserProfile = exports.addUser = exports.login = exports.getAllRecipients = exports.getSelectedUser = exports.getSelectingUser = exports.selectUser = exports.getSearch = exports.getFilter = exports.getUsers = exports.getUser = void 0;
var secret = process.env.JWT_SECRET;
var userModel_1 = require("../models/userModel");
var selectedUsers_1 = require("../models/selectedUsers");
var initiativeModel_1 = require("../models/initiativeModel");
var countryFlagModel_1 = require("../models/countryFlagModel");
var jwt_simple_1 = require("jwt-simple");
var requestedModel_1 = require("../models/requestedModel");
var ansUsers_1 = require("../models/ansUsers");
var requestedModel_2 = require("../models/requestedModel");
var cloudinary = require('./uploads/cloudinary');
exports.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, payload, id, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userInfo = req.cookies.userInfo;
                payload = jwt_simple_1["default"].decode(userInfo, secret);
                id = payload.id;
                return [4 /*yield*/, userModel_1["default"].findOne({ _id: id })];
            case 1:
                user = _a.sent();
                res.send({ user: user });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1.error);
                res.send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentUser_1, users, filterUsers, users, filterUsers, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                currentUser_1 = req.body.currentUser;
                if (Object.keys(currentUser_1).length === 0)
                    throw new Error("no user connected");
                if (!(currentUser_1.type === "mentee")) return [3 /*break*/, 2];
                return [4 /*yield*/, userModel_1["default"].find({ type: "mentor" })];
            case 1:
                users = _a.sent();
                filterUsers = users.filter(function (mentor) { return mentor.sector === currentUser_1.sector; });
                res.send({ filterUsers: filterUsers, ok: true });
                return [3 /*break*/, 4];
            case 2:
                if (!(currentUser_1.type === "mentor")) return [3 /*break*/, 4];
                return [4 /*yield*/, userModel_1["default"].find({ type: "mentee" })];
            case 3:
                users = _a.sent();
                filterUsers = users.filter(function (mentee) { return mentee.sector === currentUser_1.sector; });
                res.send({ filterUsers: filterUsers, ok: true });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                console.log(error_2.error);
                res.send({ error: error_2.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getFilter = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allFiltered, filterArray_1, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1["default"].find({}).select('sector')];
            case 1:
                allFiltered = _a.sent();
                filterArray_1 = new Set();
                result = allFiltered.filter(function (item) {
                    var isDuplicate = filterArray_1.has(item.sector);
                    filterArray_1.add(item.sector);
                    if (!isDuplicate) {
                        return true;
                    }
                    return false;
                });
                // console.log("server:" + result)
                res.json({ result: result });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3.error);
                res.send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// export const getChecked = async (req, res) => {
//   try {
//     const allChecked = await UserModel.find({})
//     const checkedArray = new Set()
//     const result = allChecked.filter(item => {
//       const isChecked = checkedArray.has(item.sector);
//       checkedArray.add(item.sector)
//       if (!isChecked) {
//         return true
//       }
//       return false
//     })
//     res.json({ result });
//   } catch (err) {
//     console.error(err)
//   }
// }
exports.getSearch = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentSearch, regex, allSearches, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                currentSearch = req.body.currentSearch;
                if (!currentSearch)
                    throw new Error('No search term');
                console.log(currentSearch);
                regex = new RegExp(currentSearch, 'i');
                return [4 /*yield*/, userModel_1["default"].find({ country: regex })];
            case 1:
                allSearches = _a.sent();
                res.send({ allSearches: allSearches, ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                res.send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.selectUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, payload, currentUserId, selectedUserId, selectedUser, email, name, image, searchSelecting, selectingUser, newSelection, newSelectionDB, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 9, , 10]);
                userInfo = req.cookies.userInfo;
                payload = jwt_simple_1["default"].decode(userInfo, secret);
                currentUserId = payload.id;
                selectedUserId = req.body.selectedUserId;
                return [4 /*yield*/, userModel_1["default"].findById(selectedUserId)];
            case 1:
                selectedUser = _a.sent();
                if (!selectedUser)
                    throw new Error("couldnt find the user in the DB");
                email = selectedUser.email, name = selectedUser.name, image = selectedUser.image;
                searchSelecting = {
                    "selectedUser.email": selectedUser.email,
                    selectingUserId: currentUserId
                };
                return [4 /*yield*/, selectedUsers_1["default"].findOne(searchSelecting)];
            case 2:
                selectingUser = _a.sent();
                newSelection = void 0;
                if (!!selectingUser) return [3 /*break*/, 4];
                console.log("no record in DB - saving");
                newSelectionDB = new selectedUsers_1["default"]({
                    selectingUserId: currentUserId,
                    selectedUser: { email: email, name: name, image: image },
                    selected: true
                });
                return [4 /*yield*/, newSelectionDB.save()];
            case 3:
                newSelection = _a.sent();
                return [3 /*break*/, 8];
            case 4:
                if (!(selectingUser.selected === true)) return [3 /*break*/, 6];
                console.log("a record in DB - turning off");
                return [4 /*yield*/, selectedUsers_1["default"].findOneAndUpdate(searchSelecting, { selected: false })];
            case 5:
                newSelection = _a.sent();
                return [3 /*break*/, 8];
            case 6:
                console.log("a record in DB - turning on");
                return [4 /*yield*/, selectedUsers_1["default"].findOneAndUpdate(searchSelecting, { selected: true })];
            case 7:
                newSelection = _a.sent();
                _a.label = 8;
            case 8:
                res.send({ success: true, selection: newSelection });
                return [3 /*break*/, 10];
            case 9:
                error_5 = _a.sent();
                console.log(error_5.error);
                res.send({ error: error_5.message });
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
function getSelectingUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userInfo, payload, id, selectingUser, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userInfo = req.cookies.userInfo;
                    payload = jwt_simple_1["default"].decode(userInfo, secret);
                    id = payload.id;
                    if (!id)
                        throw new Error("id not found");
                    return [4 /*yield*/, userModel_1["default"].findById(id)];
                case 1:
                    selectingUser = _a.sent();
                    if (!selectingUser)
                        throw new Error("User not found");
                    res.send(selectingUser);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6.error);
                    res.send({ error: error_6.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getSelectingUser = getSelectingUser;
function getSelectedUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id_1, type, selected, selectedUsers, selectedUesrModel_1, selectedUserInitiatives_1, flags_1, chosen_1, chosen_2, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, _id_1 = _a._id, type = _a.type;
                    return [4 /*yield*/, selectedUsers_1["default"].find({})];
                case 1:
                    selected = _b.sent();
                    selectedUsers = selected.filter(function (user) { return user.selectingUserId === _id_1 && user.selected === true; });
                    return [4 /*yield*/, userModel_1["default"].find({})];
                case 2:
                    selectedUesrModel_1 = _b.sent();
                    return [4 /*yield*/, initiativeModel_1["default"].find({})];
                case 3:
                    selectedUserInitiatives_1 = _b.sent();
                    return [4 /*yield*/, countryFlagModel_1["default"].find({})];
                case 4:
                    flags_1 = _b.sent();
                    if (type === "mentee") {
                        chosen_1 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentor = selectedUesrModel_1.filter(function (selectedMentor) {
                                return selectedMentor.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentor[0];
                            var country = flags_1.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            chosen_1.push(user);
                        });
                        res.send({ ok: true, chosen: chosen_1 });
                    }
                    else if (type === "mentor") {
                        chosen_2 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentee = selectedUesrModel_1.filter(function (selectedMentee) {
                                return selectedMentee.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentee[0];
                            var country = flags_1.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            var menteeIntiative = selectedUserInitiatives_1.filter(function (selectedMentee) { return selectedMentee.ownerUserId === user.id; });
                            if (menteeIntiative.length > 0) {
                                user['fieldsOfKnowledge'] = "" + menteeIntiative[0].companyName;
                                user['sector'] = "" + menteeIntiative[0].stage;
                            }
                            console.log(menteeIntiative);
                            chosen_2.push(user);
                        });
                        res.send({ ok: true, chosen: chosen_2 });
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_7 = _b.sent();
                    console.log(error_7.error);
                    res.send({ error: error_7.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getSelectedUser = getSelectedUser;
function getAllRecipients(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userInfo, userDecodedInfo, id, currentUser, allRecipients, allRecipientsIds_1, localArr_1, getRecipientsList, error_8;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    userInfo = req.cookies.userInfo;
                    userDecodedInfo = jwt_simple_1["default"].decode(userInfo, secret);
                    id = userDecodedInfo.id;
                    return [4 /*yield*/, userModel_1["default"].findOne({ _id: id })];
                case 1:
                    currentUser = _a.sent();
                    allRecipients = [];
                    if (currentUser.type === 'mentee') {
                        res.send({ user: userDecodedInfo });
                        return [2 /*return*/];
                    }
                    if (!(currentUser.type === "mentor")) return [3 /*break*/, 3];
                    allRecipientsIds_1 = currentUser.mentees;
                    localArr_1 = [];
                    getRecipientsList = function () { return __awaiter(_this, void 0, void 0, function () {
                        var _i, allRecipientsIds_2, recipient, rec, readyRec;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _i = 0, allRecipientsIds_2 = allRecipientsIds_1;
                                    _a.label = 1;
                                case 1:
                                    if (!(_i < allRecipientsIds_2.length)) return [3 /*break*/, 4];
                                    recipient = allRecipientsIds_2[_i];
                                    console.log(recipient, 'mentor');
                                    return [4 /*yield*/, userModel_1["default"].findOne({ _id: recipient }, { password: 0 })];
                                case 2:
                                    rec = _a.sent();
                                    readyRec = { userId: rec._id, name: rec.name };
                                    localArr_1.push(readyRec);
                                    _a.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/, localArr_1];
                            }
                        });
                    }); };
                    return [4 /*yield*/, getRecipientsList()];
                case 2:
                    allRecipients = _a.sent();
                    _a.label = 3;
                case 3:
                    if (allRecipients === [])
                        throw new Error("no Users were found");
                    if (allRecipients.length > 0) {
                        res.send({ allRecipients: allRecipients, user: userDecodedInfo });
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_8 = _a.sent();
                    console.log(error_8.error);
                    res.send({ error: error_8.message });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getAllRecipients = getAllRecipients;
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, payload, token, error_9;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!(typeof email === "string" && typeof password === "string")) return [3 /*break*/, 2];
                return [4 /*yield*/, userModel_1["default"].findOne({ email: email }).collation({
                        locale: "en_US",
                        strength: 1
                    })];
            case 1:
                user = _b.sent();
                //collation strength 1 performs comparisons of the base characters only, ignoring other differences such as diacritics and case.
                // console.log(user);
                if (user) {
                    //checking if password is right for the email that was put
                    if (user.password === password) {
                        payload = {
                            email: email,
                            id: user._id,
                            loggedInUser: true,
                            type: user.type,
                            name: user.name
                        };
                        token = jwt_simple_1["default"].encode(payload, secret);
                        //made that the cookie is coded and cant be hacked into
                        //we put the secret in the .env so that cant be taken either
                        res.cookie("userInfo", token, { httpOnly: true });
                        res.send({ ok: true, login: true, user: user });
                        return [2 /*return*/];
                    }
                }
                throw new Error("email or password are incorrect");
            case 2: throw new Error("email or password is missing");
            case 3: return [3 /*break*/, 5];
            case 4:
                error_9 = _b.sent();
                console.error(error_9.message);
                res.send({ error: error_9.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userFound, newUser, result, payload, token, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                user = req.body.user;
                return [4 /*yield*/, userModel_1["default"].findOne({ email: user.email })];
            case 1:
                userFound = _a.sent();
                if (!userFound) return [3 /*break*/, 2];
                res.send("Already exists");
                return [3 /*break*/, 4];
            case 2:
                newUser = new userModel_1["default"](user);
                return [4 /*yield*/, newUser.save()];
            case 3:
                result = _a.sent();
                console.log(newUser);
                payload = {
                    email: newUser.email,
                    loggedInUser: true,
                    type: newUser.type,
                    id: newUser._id,
                    name: newUser.name
                };
                token = jwt_simple_1["default"].encode(payload, secret);
                res.cookie("userInfo", token, { httpOnly: true });
                res.send({ result: result, ok: true, login: true });
                return [2 /*return*/];
            case 4: return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                console.error(err_1);
                res.send({ error: err_1.message, ok: false });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getUserProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.body.userId;
                return [4 /*yield*/, userModel_1["default"].findOne({ _id: userId })];
            case 1:
                user = _a.sent();
                res.send({ user: user, ok: true });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error(err_2);
                res.send({ error: err_2.message, ok: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUserDetails = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, updatedDetails, userId, user, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, updatedDetails = _a.updatedDetails, userId = _a.userId;
                return [4 /*yield*/, userModel_1["default"].findOne({ _id: userId })];
            case 1:
                user = _b.sent();
                if (updatedDetails.country) {
                    user.country = updatedDetails.country;
                }
                else {
                    user.country = user.country;
                }
                if (updatedDetails.city) {
                    user.city = updatedDetails.city;
                }
                else {
                    user.city = user.city;
                }
                if (updatedDetails.address) {
                    user.address = updatedDetails.address;
                }
                else {
                    user.address = user.address;
                }
                if (updatedDetails.email) {
                    user.email = updatedDetails.email;
                }
                else {
                    user.email = user.email;
                }
                if (updatedDetails.phone) {
                    user.phone = updatedDetails.phone;
                }
                else {
                    user.phone = user.phone;
                }
                if (updatedDetails.linkedInProfile) {
                    user.linkedInProfile = updatedDetails.linkedInProfile;
                }
                else {
                    user.linkedInProfile = user.linkedInProfile;
                }
                return [4 /*yield*/, userModel_1["default"].updateOne({ _id: userId }, user)];
            case 2:
                _b.sent();
                res.send({ user: user, ok: true });
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                console.error(err_3);
                res.send({ error: err_3.message, ok: false });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.adminGetAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1["default"].find({})];
            case 1:
                allUsers = _a.sent();
                res.send({ allUsers: allUsers });
                console.log(allUsers);
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                console.log(error_10.error);
                res.send({ error: error_10.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function addFlags(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, countryName, countryFlag, newCountry, error_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, countryName = _a.countryName, countryFlag = _a.countryFlag;
                    newCountry = new countryFlagModel_1["default"]({ countryName: countryName, countryFlag: countryFlag });
                    return [4 /*yield*/, newCountry.save()];
                case 1:
                    _b.sent();
                    res.send({ ok: true, newCountry: newCountry });
                    return [3 /*break*/, 3];
                case 2:
                    error_11 = _b.sent();
                    console.log(error_11.error);
                    res.send({ error: error_11.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addFlags = addFlags;
function getLoggedInProfile(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userInfo, userDecodedInfo, id, theCurrentUser, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("hi im server start");
                    userInfo = req.cookies.userInfo;
                    console.log(req.cookies);
                    console.log(userInfo + "cookies check");
                    userDecodedInfo = jwt_simple_1["default"].decode(userInfo, secret);
                    console.log(userDecodedInfo);
                    id = userDecodedInfo.id;
                    return [4 /*yield*/, userModel_1["default"].findOne({ _id: id })];
                case 1:
                    theCurrentUser = _a.sent();
                    console.log(theCurrentUser);
                    if (theCurrentUser === null)
                        throw new Error("no Users were found");
                    res.send({ theCurrentUser: theCurrentUser, ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_12 = _a.sent();
                    console.log(error_12.error);
                    res.send({ error: error_12.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getLoggedInProfile = getLoggedInProfile;
//======================================================================================
exports.requestUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, payload, currentUserId, selectedUserId, selectedUser, email, name, image, searchSelecting, selectingUser, newSelectionDB, newSelection, error_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                userInfo = req.cookies.userInfo;
                payload = jwt_simple_1["default"].decode(userInfo, secret);
                currentUserId = payload.id;
                console.log(req.body);
                selectedUserId = req.body.selectedUserId;
                return [4 /*yield*/, userModel_1["default"].findById(selectedUserId)];
            case 1:
                selectedUser = _a.sent();
                if (!selectedUser)
                    throw new Error("couldnt find the user in the DB");
                email = selectedUser.email, name = selectedUser.name, image = selectedUser.image;
                searchSelecting = {
                    "selectedUser.email": selectedUser.email,
                    selectingUserId: currentUserId
                };
                return [4 /*yield*/, requestedModel_1["default"].findOne(searchSelecting)];
            case 2:
                selectingUser = _a.sent();
                if (!!selectingUser) return [3 /*break*/, 4];
                console.log("no record in DB - saving");
                newSelectionDB = new requestedModel_1["default"]({
                    selectingUserId: currentUserId,
                    selectedUser: { email: email, name: name, image: image },
                    selected: true
                });
                return [4 /*yield*/, newSelectionDB.save()];
            case 3:
                newSelection = _a.sent();
                // } else {
                //   if (selectingUser.selected === true) {
                //     console.log("a record in DB - turning off");
                //     newSelection = await requestsUsersModel.findOneAndUpdate(
                //       searchSelecting,
                //       { selected: false }
                //     );
                //   } else {
                //     console.log("a record in DB - turning on");
                //     newSelection = await requestsUsersModel.findOneAndUpdate(
                //       searchSelecting,
                //       { selected: true }
                //     );
                //   }
                res.send({ success: true, selection: newSelection });
                return [3 /*break*/, 5];
            case 4:
                console.log("user already exists in DB");
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_13 = _a.sent();
                console.log(error_13.error);
                res.send({ error: error_13.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
//======================================================================================//
//======================================================================================
//======================================================================================//
function getRequestedUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id_2, type, selected, selectedUsers, selectedUesrModel_2, selectedUserInitiatives_2, flags_2, chosen_3, chosen_4, error_14;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, _id_2 = _a._id, type = _a.type;
                    return [4 /*yield*/, requestedModel_1["default"].find({})];
                case 1:
                    selected = _b.sent();
                    selectedUsers = selected.filter(function (user) { return user.selectingUserId === _id_2 && user.selected === true; });
                    return [4 /*yield*/, userModel_1["default"].find({})];
                case 2:
                    selectedUesrModel_2 = _b.sent();
                    return [4 /*yield*/, initiativeModel_1["default"].find({})];
                case 3:
                    selectedUserInitiatives_2 = _b.sent();
                    return [4 /*yield*/, countryFlagModel_1["default"].find({})];
                case 4:
                    flags_2 = _b.sent();
                    if (type === "mentee") {
                        chosen_3 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentor = selectedUesrModel_2.filter(function (selectedMentor) {
                                return selectedMentor.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentor[0];
                            var country = flags_2.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            chosen_3.push(user);
                        });
                        res.send({ ok: true, chosen: chosen_3 });
                    }
                    else if (type === "mentor") {
                        chosen_4 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentee = selectedUesrModel_2.filter(function (selectedMentee) {
                                return selectedMentee.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentee[0];
                            var country = flags_2.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            var menteeIntiative = selectedUserInitiatives_2.filter(function (selectedMentee) { return selectedMentee.ownerUserId === user.id; });
                            if (menteeIntiative.length > 0) {
                                user['fieldsOfKnowledge'] = "" + menteeIntiative[0].companyName;
                                user['sector'] = "" + menteeIntiative[0].stage;
                            }
                            console.log(menteeIntiative);
                            chosen_4.push(user);
                        });
                        res.send({ ok: true, chosen: chosen_4 });
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_14 = _b.sent();
                    console.log(error_14.error);
                    res.send({ error: error_14.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getRequestedUser = getRequestedUser;
//=========================================================================================//
function getAnsReqUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id_3, type, selected, selectedUsers, selectedUesrModel_3, selectedUserInitiatives_3, flags_3, chosen_5, chosen_6, error_15;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    console.log(req.body);
                    _a = req.body, _id_3 = _a._id, type = _a.type;
                    return [4 /*yield*/, ansUsers_1["default"].find({})];
                case 1:
                    selected = _b.sent();
                    console.log(selected);
                    selectedUsers = selected.filter(function (user) { return user.selectingUserId === _id_3 && user.selected === true; });
                    return [4 /*yield*/, userModel_1["default"].find({})];
                case 2:
                    selectedUesrModel_3 = _b.sent();
                    return [4 /*yield*/, initiativeModel_1["default"].find({})];
                case 3:
                    selectedUserInitiatives_3 = _b.sent();
                    return [4 /*yield*/, countryFlagModel_1["default"].find({})];
                case 4:
                    flags_3 = _b.sent();
                    if (type === "mentee") {
                        chosen_5 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentor = selectedUesrModel_3.filter(function (selectedMentor) {
                                return selectedMentor.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentor[0];
                            var country = flags_3.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            chosen_5.push(user);
                        });
                        res.send({ ok: true, chosen: chosen_5 });
                    }
                    else if (type === "mentor") {
                        chosen_6 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentee = selectedUesrModel_3.filter(function (selectedMentee) {
                                return selectedMentee.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentee[0];
                            var country = flags_3.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            var menteeIntiative = selectedUserInitiatives_3.filter(function (selectedMentee) { return selectedMentee.ownerUserId === user.id; });
                            if (menteeIntiative.length > 0) {
                                user['fieldsOfKnowledge'] = "" + menteeIntiative[0].companyName;
                                user['sector'] = "" + menteeIntiative[0].stage;
                            }
                            console.log(menteeIntiative);
                            chosen_6.push(user);
                        });
                        res.send({ ok: true, chosen: chosen_6 });
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_15 = _b.sent();
                    console.log(error_15.error);
                    res.send({ error: error_15.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getAnsReqUser = getAnsReqUser;
//==========================================================================================
function mentee_mentor_users_req(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id_4, type, requested, selectedUsers, selectedUesrModel_4, selectedUserInitiatives_4, flags_4, chosenMentors_1, chosenMentees_1, error_16;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, _id_4 = _a._id, type = _a.type;
                    return [4 /*yield*/, requestedModel_1["default"].find({})];
                case 1:
                    requested = _b.sent();
                    selectedUsers = requested.filter(function (user) { return user.selectingUserId === _id_4; });
                    return [4 /*yield*/, userModel_1["default"].find({})];
                case 2:
                    selectedUesrModel_4 = _b.sent();
                    return [4 /*yield*/, initiativeModel_1["default"].find({})];
                case 3:
                    selectedUserInitiatives_4 = _b.sent();
                    return [4 /*yield*/, countryFlagModel_1["default"].find({})];
                case 4:
                    flags_4 = _b.sent();
                    if (type === "mentee") {
                        chosenMentors_1 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentor = selectedUesrModel_4.filter(function (selectedMentor) {
                                return selectedMentor.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentor[0];
                            var country = flags_4.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            chosenMentors_1.push(user);
                        });
                        res.send({ ok: true, chosenMentors: chosenMentors_1 });
                    }
                    else if (type === "mentor") {
                        chosenMentees_1 = [];
                        selectedUsers.forEach(function (selectedUser, i) {
                            var mentee = selectedUesrModel_4.filter(function (selectedMentee) {
                                return selectedMentee.email === selectedUser.selectedUser["email"];
                            });
                            var user = mentee[0];
                            var country = flags_4.filter(function (country) { return country.countryName === user.country; });
                            if (country.length > 0) {
                                user['country'] = "" + country[0].countryFlag;
                            }
                            ;
                            var menteeIntiative = selectedUserInitiatives_4.filter(function (selectedMentee) { return selectedMentee.ownerUserId === user.id; });
                            if (menteeIntiative.length > 0) {
                                user['fieldsOfKnowledge'] = "" + menteeIntiative[0].companyName;
                                user['sector'] = "" + menteeIntiative[0].stage;
                            }
                            console.log(menteeIntiative);
                            chosenMentees_1.push(user);
                        });
                        res.send({ ok: true, chosenMentees: chosenMentees_1 });
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_16 = _b.sent();
                    console.log(error_16.error);
                    res.send({ error: error_16.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.mentee_mentor_users_req = mentee_mentor_users_req;
//=================================================================================//
exports.getRequestUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, type, currentUserID, requested, menteeRequests, mentorRequests, error_17;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, _id = _a._id, type = _a.type;
                currentUserID = _id;
                return [4 /*yield*/, requestedModel_1["default"].find({})];
            case 1:
                requested = _b.sent();
                if (!(type === "mentee")) return [3 /*break*/, 3];
                return [4 /*yield*/, requestedModel_1["default"].find({ type: "mentor" })];
            case 2:
                menteeRequests = _b.sent();
                res.send({ menteeRequests: menteeRequests, ok: true });
                return [3 /*break*/, 5];
            case 3:
                if (!(type === "mentor")) return [3 /*break*/, 5];
                return [4 /*yield*/, requestedModel_1["default"].find({ type: "mentee" })];
            case 4:
                mentorRequests = _b.sent();
                res.send({ mentorRequests: mentorRequests, ok: true });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_17 = _b.sent();
                console.log(error_17.error);
                res.send({ error: error_17.message });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
//============================================================================================
exports.requestAnsUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, selectedUser, email, name, image, searchSelecting, selectingUser, deleteddUser, MongoClient, database, pending, del, newAnsDB, newSelection, error_18;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                // const { userInfo } = req.cookies;
                // const payload = JWT.decode(userInfo, secret);
                // const currentUserId = payload.id;
                console.log(req.body);
                userId = req.body.userId;
                console.log(userId);
                return [4 /*yield*/, userModel_1["default"].findById(userId)];
            case 1:
                selectedUser = _a.sent();
                if (!selectedUser)
                    throw new Error("couldnt find the user in the DB");
                email = selectedUser.email, name = selectedUser.name, image = selectedUser.image;
                searchSelecting = {
                    "selectedUser.email": selectedUser.email,
                    selectingUserId: selectedUser._id
                };
                return [4 /*yield*/, ansUsers_1["default"].findOne(searchSelecting)];
            case 2:
                selectingUser = _a.sent();
                return [4 /*yield*/, requestedModel_2["default"].findById(userId)];
            case 3:
                deleteddUser = _a.sent();
                MongoClient = require('mongodb').MongoClient;
                database = MongoClient.db("gvi");
                pending = database.collection("requested-users");
                return [4 /*yield*/, database.pending.deleteOne({ "_id": userId })];
            case 4:
                del = _a.sent();
                if (!del) {
                    console.log("not deleted succefully");
                }
                else {
                    console.log("deleted succefully");
                }
                console.log(deleteddUser);
                if (!!selectingUser) return [3 /*break*/, 6];
                console.log("no record in DB - saving");
                newAnsDB = new ansUsers_1["default"]({
                    selectingUserId: selectedUser._id,
                    selectedUser: { email: email, name: name, image: image },
                    selected: true
                });
                return [4 /*yield*/, newAnsDB.save()];
            case 5:
                newSelection = _a.sent();
                // } else {
                //   if (selectingUser.selected === true) {
                //     console.log("a record in DB - turning off");
                //     newSelection = await requestsUsersModel.findOneAndUpdate(
                //       searchSelecting,
                //       { selected: false }
                //     );
                //   } else {
                //     console.log("a record in DB - turning on");
                //     newSelection = await requestsUsersModel.findOneAndUpdate(
                //       searchSelecting,
                //       { selected: true }
                //     );
                //   }
                res.send({ success: true, selection: newSelection });
                return [3 /*break*/, 7];
            case 6:
                console.log("user already exists in DB");
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                error_18 = _a.sent();
                console.log(error_18.error);
                res.send({ error: error_18.message });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
//=========================================================================================
function answers_users_req(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id, type, ans, error_19;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, _id = _a._id, type = _a.type;
                    return [4 /*yield*/, ansUsers_1["default"].find({})];
                case 1:
                    ans = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_19 = _b.sent();
                    console.log(error_19.error);
                    res.send({ error: error_19.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.answers_users_req = answers_users_req;
//================================================================
exports.getUsersAns = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
