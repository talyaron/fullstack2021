
import express from 'express';
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

let stock = {
  items: [{ name: 'DOUGLAS DAY 41', price: 45, img: `https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp`, group: "AUTOMATIC WATCHES", Collection: "BRISTOL", function: "Chronograph", movement: "Quartz", case: "Gold PVD", diameter: "42 mm", dial: "Ivory", bracelet: "Leather", id:'0'}]
}

app.get("/get-stock", (req, res) => {
  const stock = getStock()
  res.send(stock);
});

app.post("/add-stock", (req, res) => {
  const newItem = req.body.newItem
  const stock = addItem(newItem)
  res.send(stock);
})

app.post("/delete-stock", (req, res) => {
  const id = req.body.id
  const stock = deleteItem(id)
  res.send(stock);
})


function getStock() {
  return stock;
}

function addItem(newItem) {
  // const uid = function () {
  //   return Date.now().toString(36) + Math.random().toString(36).substr(2);
  // }

  // newItem.id = uid();
  
  stock.items = stock.items.push(newItem);
  console.log(this.items);
  return stock.items;
}

function deleteItem(id) {
  console.log(id);

  stock.items = stock.items.filter((item) => item.id !== id);
  return stock.items;
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
