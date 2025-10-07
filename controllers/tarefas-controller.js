import Tarefa from "../models/tarefa.js";

export async function listarTarefas(req, res){
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
}