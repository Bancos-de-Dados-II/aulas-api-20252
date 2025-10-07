import Tarefa from "../models/tarefa.js";

export async function listarTarefas(req, res){
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
}

export async function criarTarefa(req, res){
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
}