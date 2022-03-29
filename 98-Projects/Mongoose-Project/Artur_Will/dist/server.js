"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
try {
    mongoose_1.default.connect(`mongodb+srv://artur121255:Ay211296@cluster0.vbho2.mongodb.net/test`, () => {
        console.log((`DATA CONNECTED`));
    });
}
catch (err) {
    console.log(err);
}
const index = require('./routes/index');
app.use('/', index);
try {
    app.listen(PORT, () => {
        console.log((`Server listen on http://localhost:${PORT}`));
    });
}
catch (err) {
    console.log(err);
}
