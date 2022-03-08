import express from "express";
const app = express();
const port: number = 3000;
app.use(express.json());

app.use(express.static("public"));

const products = [
  { title: "aaa", id: "dsdfsdfsdgrt" },
  { title: "bbb", id: "dfsdggd" },
];

app.get("/get-products", (req: any, res: any) => {
  try {
    res.send(products);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.patch("/update-product", (req: any, res: any) => {
  try {
    const { title, id } = req.body;
    console.log(title, id);
    //update array
    const index = products.findIndex((product) => product.id === id);
    if (index > -1) {
      products[index].title = title;
      
      res.send({ ok: true, products });
    } else {
      throw new Error(`Couldn't find product with id ${id}`);
    }
  } catch (err) {
    console.error(err.message);
    res.send({ error: err.message, ok: false });
  }
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

const games={
  uid:[cards...],
  uid2:[cards...]
}
