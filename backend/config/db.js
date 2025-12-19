import mongoose from "mongoose";

const connectionDB = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`DB is connected to the server`);
  });
};
export default connectionDB;
