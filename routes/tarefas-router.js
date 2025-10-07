import express from 'express';
import {listarTarefas, criarTarefa, buscarTarefa} from 
  '../controllers/tarefas-controller.js';
const tarefasRouter = express.Router();

tarefasRouter.get('', listarTarefas);

tarefasRouter.get('/:id', buscarTarefa);

tarefasRouter.post('', criarTarefa);

tarefasRouter.delete('/:id', (req,res)=>{
  res.send('Deletando a tarefa '+req.params.id);
});

tarefasRouter.patch('/:id', (req,res)=>{
  res.send('Atualizando a tarefa' +req.params.id);
});

export default tarefasRouter;