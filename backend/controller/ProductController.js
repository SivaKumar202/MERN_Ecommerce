import Products from "../models/productModel.js";
import HandleError from "../utils/handleError.js";

//1️⃣Creating Products
export const createProducts = async (req, res) => {
  const product = await Products.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//2️⃣Get All Products
export const getAllProducts = async (req, res) => {
  const products = await Products.find();
  res.status(200).json({
    success: true,
    products,
  });
};

//3️⃣Update Product
export const updateProduct = async (req, res, next) => {
  const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return next(new HandleError("Product Not Found",404))
  }
  res.status(200).json({
    success: true,
    product,
  });
};

//4️⃣Delete Product

export const DeleteProduct = async (req, res, next) => {
  const product = await Products.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new HandleError("Product Not Found",404))
  }
  res.status(200).json({
    success: true,
    message: "Product is deleted successfully",
  });
};

//5️⃣ Accessing single Product
export const getSingleProduct = async (req, res, next) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    return next(new HandleError("Product Not Found",404))
  }
  res.status(200).json({
    success: true,
    product,
  });
};
