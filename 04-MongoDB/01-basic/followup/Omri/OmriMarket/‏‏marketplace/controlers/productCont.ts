import Market from "../model/marketModel";
import UserProducts from "../model/userProductsModel";

export async function getProductsMain(req, res) {
  try {
    const marketItems = await Market.find({});
    res.send({ ok: true, marketItems });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function getAllProducts(req, res) {
  try {

    const products = await UserProducts.find({})
    res.send({ products });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function addProduct(req, res) {
  try {
    let { pic, title, description, price, category } = req.body;
    const newProduct = new UserProducts({ pic, title, description, price, category })
    const result = await newProduct.save()
    const ownerId = newProduct._id
    const newProductMarket = new Market({ pic, title, description, price, category,ownerId})
    const resultMarket = await newProductMarket.save()
    res.send({ result });

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function updateproduct(req, res) {
  try {
    const productId = req.body.gameId;
    const newImg = req.body.newImg;
    const newTitle = req.body.newTitle;
    if ({ productId }) {
      const resultUserImg = await UserProducts.updateOne({ _id: productId }, { pic: newImg })
      const resultUserTitle = await UserProducts.updateOne({ _id: productId }, {title: newTitle}) 
      const products = await UserProducts.find({});
      res.send({ ok: true, products, });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { productId } = req.body;
    if (productId) {
      const result = await UserProducts.deleteOne({ _id: productId });
      const resultMarket = await Market.deleteOne({ ownerId: productId });
      const products = await UserProducts.find({});
      const productsMarket = await Market.find({});
      res.send({ ok: true, products, productsMarket })
    } else {
      throw new Error('product ID is missing')
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message })
  }
}

export async function filterByCategory(req, res) {
  try {
    const { chosenCategory } = req.body;
    if (chosenCategory) {
      const products = await Market.find({});
      if (chosenCategory === "Show All") {
        res.send({ products })
      } else {
        const filterd = products.filter(product => chosenCategory === product.category)
        res.send({ ok: true, filterd })
      }
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message })
  }
}