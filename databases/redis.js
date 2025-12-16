import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

conectar();
async function conectar(){
    await client.connect();
    // await client.auth({
    //     password: 'mypassword'
    // });
    console.log("Conectado ao Redis");
}

export default client;