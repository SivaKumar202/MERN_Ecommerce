import app from "./app.js";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";
dotenv.config({ path: "backend/config/config.env" });
connectionDB();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
