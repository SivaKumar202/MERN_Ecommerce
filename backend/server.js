import app from "./app.js";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";
dotenv.config({ path: "backend/config/config.env" });
connectionDB();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});

process.on('unhandledRejection', (err)=>{
  console.log(`Error : ${err.message}`)
  console.log(`server is shutting down, due to unhandled promise rejection`)
  server.close(()=>{
    process.exit(1)
  })
})