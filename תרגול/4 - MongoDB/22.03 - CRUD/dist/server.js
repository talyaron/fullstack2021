"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
const app = express_1.default();
const PORT = process.env.PORT || 3535;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
try {
    mongoose_1.default.connect(`mongodb+srv://KaKa:WO3sm2Hl7eXTMN0Y@cluster0.mfqlq.mongodb.net/fullStackOct2021`, () => {
        console.log(colors_1.default.bgGreen.black(`DATA CONNECTED`));
    });
}
catch (err) {
    console.log(colors_1.default.bgRed.black(err));
}
const index = require('./routes/index');
app.use('/', index);
try {
    app.listen(PORT, () => {
        console.log(colors_1.default.bgBlue.black(`Server listen on http://localhost:${PORT}`));
    });
}
catch (err) {
    console.log(colors_1.default.bgRed.black(err));
}
