import client from "../databases/redis.js";

export async function controleAcesso(req,res,next){
    const acessos = await client.get(req.ip) || 0;
    if(acessos > 10){
        return res.status(429).json({
            error: 'Muitas requisições.'
        });
    }
    if(acessos === 0){
        await client.set(req.ip, 1,{
            expiration:{
                type: 'EX',
                value: 60
            }
        });
    }
    await client.incr(req.ip);    
    next();
}