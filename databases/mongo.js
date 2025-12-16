import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

conectar();
async function conectar(){
    await mongoose
        .connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB");
}

export default mongoose;