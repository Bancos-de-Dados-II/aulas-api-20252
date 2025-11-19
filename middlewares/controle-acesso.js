import client from "../databases/redis.js";

export async function controleAcesso(req,res,next){
        console.log(req.ip);
        next();
}