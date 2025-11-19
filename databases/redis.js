import { createClient } from "redis";
const client = createClient();

conectar();
async function conectar(){
    await client.connect();
    await client.auth({
        password: 'mypassword'
    });
    console.log("Conectado ao Redis");
}

export default client;