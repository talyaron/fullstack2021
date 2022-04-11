import ProductUser from "../model/productModel";
import Market from "../model/productMain";
import User from "../model/userModel";

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
    const ownerId = data.id;
    const products = await ProductUser.find({});
    const filterdProducts = products.filter(product => product.ownerId === ownerId);
    res.send({ filterdProducts });
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
    const newProduct = new ProductUser({ pic, title, description, price, category, ownerId })
    const result = await newProduct.save()
    // const ownerId = newProduct._id
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
      const result = await ProductUser.updateOne({ _id: productId }, { pic: newImg })
      const resultMarket = await Market.updateOne({ ownerId: productId }, { pic: newImg })
      const products = await ProductUser.find({});
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
      const result = await ProductUser.updateOne({ _id: productId }, { title: newTitle })
      const resultMarket = await Market.updateOne({ ownerId: productId }, { title: newTitle })
      const products = await ProductUser.find({});
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
      const result = await ProductUser.updateOne({ _id: productId }, { price: newPrice })
      const resultMarket = await Market.updateOne({ ownerId: productId }, { price: newPrice })
      const products = await ProductUser.find({});
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
    const { data } = req.cookies;
    const ownerId = data.id;
    if (ownerId) {
      const result = await ProductUser.deleteOne({ ownerId: ownerId });
      const resultMarket = await Market.deleteOne({ ownerId: ownerId });
      const products = await ProductUser.find({});
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
  let { email, password } = req.body;
  const user = await User.findOne({ email,password });
  const items = await Market.find({}); 
  if(user){
  const userName= user.userName;
  const id = user._id;

    if (user.password === password) {
      res.cookie("data",{ userName ,id });
      res.send({ ok: true, items,userName});
      return;
    }
  }
  else{
    res.send({ ok: false,items })
    return
  }

}


