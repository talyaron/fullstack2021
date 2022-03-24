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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3058;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const mongoose_1 = __importDefault(require("mongoose"));
//connects to my database which i just created called DunderMifflin
mongoose_1.default.connect('mongodb+srv://ShaniRom:ynbUaPL3oHZKGl8a@cluster0.vh1hg.mongodb.net/DunderMifflin?retryWrites=true&w=majority');
const EmployeeSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    imgUrl: String,
    role: String
});
//'DunderMifflinEmployee', is my collection and it will work by the EmployeeSchema template 
const Employee = mongoose_1.default.model('DunderMifflinEmployee', EmployeeSchema);
//start with add so you can see if it shows on the page or add from the mongodb
app.post("/add-employee", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, imgUrl, role } = req.body;
        const newEmployee = new Employee({ firstName, lastName, imgUrl, role });
        const data = yield newEmployee.save();
        //.save saves it to the mongoDB
        console.log(data);
        res.send(data);
        if (!firstName || !lastName || !imgUrl || !role)
            throw new Error("no values in app.post(add-employee)");
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}));
app.get("/get-employee", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Employee holds the info. when the{} are empty it means it shows everything
    const employees = yield Employee.find({});
    res.send({ theEmployees: employees });
}));
app.get("/get-salesman", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Employee holds the info. it is finding here everything with the role of salesman
    const salesman = yield Employee.find({ role: "Salesman" });
    res.send({ theEmployees: salesman });
}));
app.get("/get-useless", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Employee holds the info. here is finding here everything with the name toby
    const useless = yield Employee.find({ firstName: "Toby" });
    res.send({ theEmployees: useless });
}));
app.patch("/update-role", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { employeeId, role } = req.body;
        if (employeeId && role) {
            //we found the user by its id and then we update the role
            const employees = yield Employee.updateOne({ _id: employeeId }, { role: role });
            res.send({ theEmployees: employees });
        }
        else {
            throw new Error("employeeId or role is missing");
        }
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.delete("/delete-employee", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { employeeId } = req.body;
        if (employeeId) {
            //deletes by the id 
            const deletedEmployee = yield Employee.deleteOne({ _id: employeeId });
            res.send({ theDeletedEmployee: deletedEmployee });
        }
        else {
            throw new Error("employeeId is missing");
        }
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
