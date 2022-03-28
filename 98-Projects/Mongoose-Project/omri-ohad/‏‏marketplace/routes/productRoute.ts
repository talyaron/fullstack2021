import express from "express";
const router = express.Router();
import {getAllProducts, addProduct, updateproduct, deleteProduct} from '../controlers/productCont'

router
.get('/get-products',getAllProducts)
.post("/add-product",addProduct)
.patch("/update-product", updateproduct)
.delete("/delete-product", deleteProduct)

export default router;