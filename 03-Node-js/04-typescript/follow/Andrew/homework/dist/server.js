"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
let stock = {
    items: [],
    addItem(newItem) {
        try {
            newItem.id = uid();
            this.items.push(newItem);
            // console.log(this.items);
            // this.renderStock(this.items);
            if (!uid)
                throw new Error("no id");
        }
        catch (error) {
            console.error(error);
        }
    },
    deleteItem(id) {
        console.log(id);
        try {
            if (!id)
                throw new Error("no id");
            this.items = this.items.filter((item) => item.id !== id);
        }
        catch (error) {
            console.error(error);
        }
    },
    updateItem(updatedItem) {
        //find index
        const index = this.items.findIndex((item) => item.id === updatedItem.id);
        //update the spesific item's name
        if (index >= 0) {
            this.items[index] = updatedItem;
        }
    },
};
stock.addItem({ name: 'DOUGLAS DAY 41', price: 45, img: `https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp`, group: "AUTOMATIC WATCHES", Collection: "BRISTOL", function: "Chronograph", movement: "Quartz", case: "Gold PVD", diameter: "42 mm", dial: "Ivory", bracelet: "Leather", id: 0 });
stock.addItem({ name: 'DOUGLAS DC-3', price: 35, img: `https://aviatorwatch.swiss/assets/catalog/douglas-dc-3/AVIATOR-WATCH--DOUGLAS-DC-3--V.3.32.0.232.4.webp`, group: "CLASSIC WATCHES", Collection: "MOONFLIGHT", function: "Chronograph", movement: "Automatic", case: "Black PVD", diameter: "36 mm", dial: "Black", bracelet: "Leather", id: 0 });
stock.addItem({ name: 'AIRACOBRA P42', price: 60, img: `https://aviatorwatch.swiss/assets/catalog/airacobra-p42/AVIATOR-WATCH--AIRACOBRA-P42--V.1.22.0.190.5.webp`, group: "NEW RELEASES", Collection: "AIRCOBRA", function: "Day / Date", movement: "Quartz", case: "Stainless Steel", diameter: "42 mm", dial: "Ivory", bracelet: "Steel", id: 0 });
stock.addItem({ name: 'MIG-29 SMT', price: 90, img: `https://aviatorwatch.swiss/assets/catalog/mig-29-smt/AVIATOR-WATCH--MIG-29-SMT--M.2.30.5.215.6.webp`, group: "SPORT WATCHES", Collection: "MIG", function: "Chronograph", movement: "Quartz", case: "Black PVD", diameter: "47 mm", dial: "Red", bracelet: "Rubber", id: 0 });
stock.addItem({ name: 'DOUGLAS MOONFLIGHT', price: 75, img: `https://aviatorwatch.swiss/assets/catalog/douglas-moonflight/AVIATOR-WATCH--DOUGLAS-MOONFLIGHT--V.1.33.0.261.4.webp`, group: "LADIES WATCHES", Collection: "MOONFLIGHT", function: "Moonphase", movement: "Quartz", case: "Stainless Steel", diameter: "36 mm", dial: "Green", bracelet: "Leather", id: 0 });
stock.addItem({ name: 'BRISTOL SCOUT', price: 125, img: `https://aviatorwatch.swiss/assets/catalog/bristol-scout/AVIATOR-WATCH--BRISTOL-SCOUT--V.3.18.8.162.4.webp`, group: "MILITRY WATCHES", Collection: "BRISTOL", function: "Small Second", movement: "Automatic", case: "Brown PVD", diameter: "46 mm", dial: "Black", bracelet: "Leather", id: 0 });
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/getItems', (req, res) => {
    res.send(stock.items);
});
app.delete('/deleteStock', (req, res) => {
    stock.deleteItem(req.body.id);
    res.send(stock.items);
});
app.post('/addItem', (req, res) => {
    stock.addItem(req.body.newItem);
    res.send(stock.items);
});
app.post('/updateItem', (req, res) => {
    stock.updateItem(req.body.updateItem);
    res.send(stock.items);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
