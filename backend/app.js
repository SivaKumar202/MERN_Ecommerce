import express from "express";
const app = express();
import product from "./routes/productRoutes.js";

app.use(express.json())
app.use("/api/v1", product);

export default app;
