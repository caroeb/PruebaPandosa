const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(getHtml('calculadora'));
});

app.get('/suma', (req, res) => {
  const { a, b } = req.query; // deconstruir variables

  if (!a || !b) return res.send(getHtml('suma', 'faltan argumentos', true));
  res.send(getHtml('suma', `resultado de la suma: ${parseFloat(a) + parseFloat(b)}`));
});

app.get('/resta', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.send(getHtml('resta', 'faltan argumentos', true));
  res.send(getHtml('resta', `resultado de la resta: ${parseFloat(a) - parseFloat(b)}`));
});

app.get('/multiplicacion', (req,
  res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.send(getHtml('multiplicación', 'faltan argumentos', true));
  res.send(getHtml('multiplicación', `resultado de la multiplicación: ${parseFloat(a) * parseFloat(b)}`));
});

app.get('/division', (req,
  res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.send(getHtml('división', 'faltan argumentos', true));
  res.send(getHtml('división', `resultado de la división: ${parseFloat(a) / parseFloat(b)}`));
});

app.get('*', (req, res) => {
  res.send(getHtml('calculadora', 'ruta no existente'));
});

app.listen(3000, () => console.log('listening on port 3000 '));

var getHtml = function (titulo, texto, error) {
  return `
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      html, body, div { box-sizing: border-box; }
      .wrapper {
        font-family: Arial, sans-serif;
        width: 300;
        margin: 1rem auto;
        background: lightgray;
        border: 1px solid ${error ? 'red' : 'gray'};
        padding: 1.5rem 2rem;
      }
      h1 { border-bottom: 1px solid gray; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <h1>${titulo}</h1>
      <p>${texto || ''}</p>
    </div>
  </body>
  </html>
  `;
}