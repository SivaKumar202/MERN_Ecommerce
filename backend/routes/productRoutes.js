import express from "express"
const Router = express.Router()
import { createProducts, DeleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controller/ProductController.js";

//Routes
Router.route("/Products").get(getAllProducts).post(createProducts)
Router.route("/product/:id").put(updateProduct).delete(DeleteProduct).get(getSingleProduct)

export default Router;