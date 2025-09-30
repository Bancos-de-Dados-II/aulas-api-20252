import express from 'express';
const app = express();
const port = 3000;

import tarefasRouter from './routes/tarefas-router.js';

app.use('/', tarefasRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
