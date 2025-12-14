import express from "express"
const Router = express.Router()
import { createProducts, getAllProducts } from "../controller/ProductController.js";

//Routes
Router.route("/Products").get(getAllProducts).post(createProducts)

export default Router;