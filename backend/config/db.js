import mongoose from "mongoose";

const connectionDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`DB is connected to the server`);
    })
    .catch((error) => {
      console.log(`error ${error}`);
    });
};
export default connectionDB;
