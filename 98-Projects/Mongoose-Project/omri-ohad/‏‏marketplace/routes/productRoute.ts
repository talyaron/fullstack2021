import express from "express";
const router = express.Router();
import {getProductsMain,getAllProducts, addProduct, updatePic,updateTitle,updatePrice, deleteProduct, filterByCategory,sortAscending,sortDescending} from '../controlers/productCont'

router
.get('/get-products',getAllProducts)
.get('/get-products-to-main',getProductsMain)
.post('/get-by-category',filterByCategory)
.post("/add-product",addProduct)
.patch("/update-picture", updatePic)
.patch("/update-title", updateTitle)
.patch("/update-price", updatePrice)
.delete("/delete-product", deleteProduct)
.post('/sort-by-Ascending',sortAscending)
.post('/sort-by-Descending',sortDescending)

export default router;