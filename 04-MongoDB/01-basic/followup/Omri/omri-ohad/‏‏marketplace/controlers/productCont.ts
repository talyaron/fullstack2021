import UserProducts from "../model/userProductsModel";
import Market from "../model/marketModel";
import User from "../model/usersModel";

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
    const { data } = req.cookies;
    const products = await UserProducts.find({})
    res.send({ products });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}

export async function addProduct(req, res) {
  try {
    const { data } = req.cookies;
    const ownerId = data.id;
    let { pic, title, description, price, category } = req.body;
    const newProduct = new UserProducts({ pic, title, description, price, category,ownerId })
    const result = await newProduct.save()
    //const ownerId = newProduct._id
    const newProductMarket = new Market({ pic, title, description, price, category, ownerId })
    const resultMarket = await newProductMarket.save()
    res.send({ result });

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function updatePic(req, res) {
  try {
    const productId = req.body.gameId;
    const newImg = req.body.newImg;
    if ({ productId }) {
      const result = await UserProducts.updateOne({ _id: productId }, { pic: newImg })
      const resultMarket = await Market.updateOne({ ownerId: productId }, { pic: newImg })
      const products = await UserProducts.find({});
      const productsMarket = await Market.find({});
      res.send({ ok: true, result, products });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function updateTitle(req, res) {
  try {
    const productId = req.body.gameId;
    const newTitle = req.body.newTitle;
    if ({ productId }) {
      const result = await UserProducts.updateOne({ _id: productId }, { title: newTitle })
      const resultMarket = await Market.updateOne({ ownerId: productId }, { title: newTitle })
      const products = await UserProducts.find({});
      const productsMarket = await Market.find({});
      res.send({ ok: true, result, products });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function updatePrice(req, res) {
  try {
    const productId = req.body.gameId;
    const newPrice = req.body.newPrice;
    if ({ productId }) {
      const result = await UserProducts.updateOne({ _id: productId }, { price: newPrice })
      const resultMarket = await Market.updateOne({ ownerId: productId }, { price: newPrice })
      const products = await UserProducts.find({});
      const productsMarket = await Market.find({});
      res.send({ ok: true, result, products });
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
      res.send({ ok: true, productsMarket, products })
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


export async function sortAscending(req, res) {
  try {
    const products = await Market.find({});
    const filterd = products.sort((a, b) => (a.price - b.price));
    res.send({ ok: true, filterd })

  } catch (error) {
    console.error(error);
    res.send({ error: error.message })
  }
}

export async function sortDescending(req, res) {
  try {
    const products = await Market.find({});
    const filterd = products.sort((a, b) => (b.price - a.price));
    res.send({ ok: true, filterd })

  } catch (error) {
    console.error(error);
    res.send({ error: error.message })
  }
}

export async function register(req, res) {
  try {
    let { email, password, userName } = req.body;
    const user = new User({ email, password, userName, login: false })
    const result = await user.save()
  } catch (error) {
    console.error(error);
    res.send({ error: error.message })
  }
}

export async function login(req, res) {
  try {

    let { email, password } = req.body;
    if (typeof email === 'string' && typeof password === 'string') {
      const user = await User.findOne({ email: email });
      const products = await Market.find({});

      if (user) {
        if (user.password === password) {
          res.cookie(
            "data",
            { id: user._id, userName: user.userName }
          );
          res.send({ ok: true, login: true, userName: user.userName, products });
          return;
        } else {
          res.send({ ok: false, products })
        }
      }
    } else {
      throw new Error("Email or password are missing");
    }
  } catch (error) {
    console.log(error.message);
    res.send({ error: error.message });
  }
}


