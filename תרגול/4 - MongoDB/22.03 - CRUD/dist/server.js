"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const app = express_1.default();
const PORT = process.env.PORT || 3535;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
try {
    app.listen(PORT, () => {
        console.log(colors_1.default.bgBlue.black(`Server listen on http://localhost:${PORT}`));
    });
}
catch (err) {
    console.log(colors_1.default.bgRed.black(err));
}
