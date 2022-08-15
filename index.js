const express = require('express');

const app = express();

//const porta = process.env.PORT || 3333;
const porta = 3333;

//Define a porta do servidor - definir de acordo com o oferecida pelo serviço de hospedagem
app.listen(porta, () =>{
  console.log(`Servidor iniciado na porta: ${porta}`);
});