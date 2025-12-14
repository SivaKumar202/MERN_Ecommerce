import Products from "../models/productModel.js"

//Creating Products
export const createProducts = async(req,res)=>{
  const product = await Products.create(req.body)
  res.status(201).json({
    success:true,
    product
  })
}

//Get All Products
export const getAllProducts = async(req, res) => {
  const product = await
  res.status(200).json({ message: "Get All Products" });
};


export const sivakumar = (req,res)=>{
    res.status(200).json({message:"HELLO this is SIVA KUMAR"})
}