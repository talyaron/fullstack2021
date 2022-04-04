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
exports.getUrgencies = exports.getTask = exports.deleteTask = exports.checkTask = exports.updateTask = exports.addNewTask = exports.getUsersTasks = void 0;
var taskModel_1 = require("../model/taskModel");
exports.getUsersTasks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ownerId, currentUsersTasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ownerId = req.query.ownerId;
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: ownerId })];
            case 1:
                currentUsersTasks = _a.sent();
                res.send(currentUsersTasks);
                return [2 /*return*/];
        }
    });
}); };
exports.addNewTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, color, title, description, urgency, location, date, userId, newTask, _b, _c, _d, error_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 4, , 5]);
                _a = req.body, color = _a.color, title = _a.title, description = _a.description, urgency = _a.urgency, location = _a.location, date = _a.date, userId = _a.userId;
                if (!(userId &&
                    color &&
                    title &&
                    description &&
                    urgency &&
                    location &&
                    date)) return [3 /*break*/, 3];
                newTask = new taskModel_1["default"]({
                    color: color,
                    title: title,
                    description: description,
                    urgency: urgency,
                    location: location,
                    date: date,
                    ownerId: userId
                });
                return [4 /*yield*/, newTask.save()];
            case 1:
                _e.sent();
                _c = (_b = res).send;
                _d = {};
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: userId })];
            case 2:
                _c.apply(_b, [(_d.currentUsersTasks = _e.sent(), _d)]);
                _e.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _e.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, ownerId, color, title, urgency, description, location, date, updatedTask, currentUsersTasks, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, _id = _a._id, ownerId = _a.ownerId, color = _a.color, title = _a.title, urgency = _a.urgency, description = _a.description, location = _a.location, date = _a.date;
                if (!(_id && ownerId)) return [3 /*break*/, 3];
                return [4 /*yield*/, taskModel_1["default"].findOneAndUpdate({ _id: _id, ownerId: ownerId }, {
                        color: color,
                        title: title,
                        urgency: urgency,
                        description: description,
                        location: location,
                        date: date
                    })];
            case 1:
                updatedTask = _b.sent();
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: ownerId })];
            case 2:
                currentUsersTasks = _b.sent();
                res.send({ updatedTask: updatedTask, currentUsersTasks: currentUsersTasks });
                _b.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error(error_2);
                res.send({ error: error_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.checkTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _id, ownerId, timeChecked, taskCheck, currentUsersTasks_1, checkTask_1, currentUsersTasks, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                _a = req.body, _id = _a._id, ownerId = _a.ownerId, timeChecked = _a.timeChecked;
                return [4 /*yield*/, taskModel_1["default"].findOne({ _id: _id, ownerId: ownerId })];
            case 1:
                taskCheck = _b.sent();
                console.log(taskCheck);
                if (!((taskCheck === null || taskCheck === void 0 ? void 0 : taskCheck.checked) === true)) return [3 /*break*/, 4];
                console.log('ho');
                return [4 /*yield*/, taskModel_1["default"].updateOne({ _id: _id, ownerId: ownerId }, { timeChecked: timeChecked, checked: false })];
            case 2:
                _b.sent();
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: ownerId })];
            case 3:
                currentUsersTasks_1 = _b.sent();
                res.send({ currentUsersTasks: currentUsersTasks_1 });
                return [2 /*return*/];
            case 4:
                console.log('wo');
                return [4 /*yield*/, taskModel_1["default"].findOneAndUpdate({ _id: _id, ownerId: ownerId }, { timeChecked: timeChecked, checked: true })];
            case 5:
                checkTask_1 = _b.sent();
                console.log(_id, ownerId);
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: ownerId })];
            case 6:
                currentUsersTasks = _b.sent();
                res.send({ currentUsersTasks: currentUsersTasks });
                return [3 /*break*/, 8];
            case 7:
                error_3 = _b.sent();
                console.log(error_3);
                console.log(error_3.message);
                res.send({ error: error_3.message });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.deleteTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, taskId, userURL, userId, currentPage, currentUsersTasks, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, taskId = _a.taskId, userURL = _a.userURL;
                userId = userURL.split("=")[1];
                currentPage = userURL.split("/")[3].split(".")[0];
                return [4 /*yield*/, taskModel_1["default"].findOneAndDelete({ _id: taskId, ownerId: userId })];
            case 1:
                _b.sent();
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: userId })];
            case 2:
                currentUsersTasks = _b.sent();
                res.send({ currentUsersTasks: currentUsersTasks, currentPage: currentPage });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                console.error(error_4);
                res.send({ error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId, currentTask, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                taskId = req.body.taskId;
                return [4 /*yield*/, taskModel_1["default"].findOne({ _id: taskId })];
            case 1:
                currentTask = _a.sent();
                res.send(currentTask);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.send({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUrgencies = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, lowUrgency, mediumUrgency, highUrgency;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.query.userId;
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: userId, urgency: 'low' })];
            case 1:
                lowUrgency = _a.sent();
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: userId, urgency: 'medium' })];
            case 2:
                mediumUrgency = _a.sent();
                return [4 /*yield*/, taskModel_1["default"].find({ ownerId: userId, urgency: 'high' })];
            case 3:
                highUrgency = _a.sent();
                res.send({ lowUrgency: lowUrgency, mediumUrgency: mediumUrgency, highUrgency: highUrgency });
                return [2 /*return*/];
        }
    });
}); };
