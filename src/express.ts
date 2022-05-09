import { functionCommand } from './function';
const express = require('express');

const app = express();


app.get('/execmd', (req: any, res: any) => {
  if (!req.query.cmd || !req.query.args) {
    res.send('<h1>ERROR 404</h1>');
  } else {
    functionCommand(req.query.cmd as string, req.query.args as string, (err, data) => {
      if (err) {
        res.send('<h1>ERROR. No se ha podido realizar la acción</h1>');
      } else {
        res.send({
          result: data,
        });
      }
    });
  }
});

app.get('*', (_: any, res: any) => {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});