import Tarefa from "../models/tarefa.js";
import client from "../databases/redis.js";

export async function listarTarefas(req, res){
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
}

export async function criarTarefa(req, res){
    try{
        const tarefa = await Tarefa.create(req.body);
        res.status(201).json(tarefa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function buscarTarefa(req,res){

    const tarefaCache = await client.get(req.params.id);
    if(tarefaCache){
        return res.json(JSON.parse(tarefaCache));
    }

    const tarefa = await Tarefa.findByPk(req.params.id);
    if(tarefa){
        await client.set(req.params.id, 
            JSON.stringify(tarefa),{
                expiration: {
                    type: 'EX',
                    value: 3600
            }
        });
        res.json(tarefa);
    } else {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    }
}

export async function deletarTarefa(req,res){
    const tarefa = await Tarefa.findByPk(req.params.id);
    if(tarefa){
        await tarefa.destroy();
        res.json(tarefa);
    } else {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    }
}

export async function atualizarTarefa(req,res){
    const tarefa = await Tarefa.findByPk(req.params.id);
    if(tarefa){
        tarefa.set(req.body);
        await tarefa.save();
        res.json(tarefa);
    } else {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    }
}