import mongoose from "mongoose";

conectar();
async function conectar(){
    await mongoose
        .connect('mongodb://localhost:27017/aula');
    console.log("Conectado ao MongoDB");
}

export default mongoose;