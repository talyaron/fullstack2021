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
exports.Chat = void 0;
var react_1 = require("react");
var hooks_1 = require("../../app/hooks");
var chatSlice_1 = require("../../features/reducers/chatSlice");
var axios_1 = require("axios");
var chatApi_1 = require("../../features/reducers/chatApi");
exports.Chat = function () {
    var messages = hooks_1.useAppSelector(chatSlice_1.selectMessage);
    var dispatch = hooks_1.useAppDispatch();
    //useSelector hook is used to get the state from the redux store
    var messageStatus = hooks_1.useAppSelector(chatSlice_1.selectMessageStatus);
    function handleAddMessage(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var text, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.preventDefault();
                        text = ev.target.newMessage.value;
                        dispatch(chatSlice_1.addText(text));
                        return [4 /*yield*/, axios_1["default"].post("/chat/add-message", { text: text })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleDeleteMessage(id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id + " deleted text id");
                        dispatch(chatSlice_1.deleteText(id));
                        return [4 /*yield*/, axios_1["default"]["delete"]("/chat/delete-message", {
                                data: { id: id }
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleEditMessage(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedText, id;
            return __generator(this, function (_a) {
                ev.preventDefault();
                updatedText = ev.target.elements.edittedText.value;
                id = ev.target.id;
                // console.log(id);
                // const { data } = await axios.patch("/chat/edit-message", {
                //   id,
                //   updatedText,
                // });
                dispatch(chatApi_1.editMessage({ id: id, updatedText: updatedText }));
                return [2 /*return*/];
            });
        });
    }
    react_1.useEffect(function () {
        //handleGetMessages();
        dispatch(chatApi_1.getMessages());
    }, [dispatch]);
    function handleFileInputChange(ev) {
        var file = ev.target.files[0];
        var image = ev.target.elements.image.value;
        console.log(image);
    }
    function handleAddImg(ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ev.preventDefault();
                return [2 /*return*/];
            });
        });
    }
    return (react_1["default"].createElement("div", { className: "chat" },
        react_1["default"].createElement("div", { className: "chat__messages" }, messages.map(function (message) {
            return (react_1["default"].createElement("div", { className: 'chat__messages__message', key: message._id },
                react_1["default"].createElement("h3", { className: 'chat__messages__message--text', onClick: function () {
                        handleDeleteMessage(message._id);
                    } }, message.text),
                react_1["default"].createElement("form", { className: "chat__messages__message--text--update", onSubmit: function (ev) {
                        handleEditMessage(ev);
                    }, id: message._id },
                    react_1["default"].createElement("input", { type: "text", placeholder: "edit text", name: "edittedText" }),
                    react_1["default"].createElement("button", null, "update"))));
        })),
        react_1["default"].createElement("div", { className: "chat__input" },
            react_1["default"].createElement("form", { onSubmit: handleAddMessage, className: "chat__input--addText" },
                react_1["default"].createElement("input", { type: "text", placeholder: "write message..", name: "newMessage", onChange: handleFileInputChange }),
                react_1["default"].createElement("button", null, "send")))));
};
