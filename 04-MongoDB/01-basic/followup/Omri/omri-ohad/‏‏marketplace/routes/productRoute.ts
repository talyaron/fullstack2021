import express from "express";
const router = express.Router();
import {
    getProductsMain,
    getAllProducts,
    addProduct,
    updatePic,
    updateTitle,
    updatePrice,
    deleteProduct,
    filterByCategory,
    sortAscending,
    sortDescending,
    register,
    login
} from '../controlers/productCont'

router
    .get('/get-products', getAllProducts)
    .get('/get-products-to-main', getProductsMain)
    .get("/login", login)
    .post('/get-by-category', filterByCategory)
    .post("/add-product", addProduct)
    .post("/register", register)
    .post('/sort-by-Ascending', sortAscending)
    .post('/sort-by-Descending', sortDescending)
    .patch("/update-picture", updatePic)
    .patch("/update-title", updateTitle)
    .patch("/update-price", updatePrice)
    .delete("/delete-product", deleteProduct)

export default router;