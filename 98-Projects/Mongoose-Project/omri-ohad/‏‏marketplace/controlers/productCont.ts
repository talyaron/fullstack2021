import ProductUser from "../model/productModel";
import ProductMain from "../model/productMain";

export async function getAllProducts  (req, res)  {
    try {
  
      const products = await ProductUser.find({})
      res.send({products});
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }

  export async function addProduct (req, res){
    try {
      let { pic, title,description,price,category } = req.body;
      const newProduct = new ProductUser({pic, title,description, price,category})
      const result = await newProduct.save()
      res.send({ result });
      
    } catch (error) {
      console.error(error);
      res.send({ error: error.message });
    }
  }

  export async function updateproduct (req, res){
    try {
        const productId = req.body.gameId;
        const newImg = req.body.newImg;
        const newTitle= req.body.newTitle;
        if({productId}){
            const result = await ProductUser.updateOne({_id:productId},{pic:newImg},{title:newTitle})
            const products = await ProductUser.find({});
            res.send({ok: true, result, products});
        } else{
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
}

export async function deleteProduct (req,res) {
    try {
     const {productId} = req.body;
     if(productId){
         const result = await ProductUser.deleteOne({_id:productId});
         const products = await ProductUser.find({});
         res.send({ok:true,result,products})
     } else{
         throw new Error('product ID is missing')
     }
    } catch (error) {
        console.error(error);
        res.send({error: error.message})
    }
 }