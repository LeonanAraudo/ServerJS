const express = require('express');  
const router = express.Router();  


router.get('/', (req, res) => {  
  res.sendFile(__dirname + '/public/views/inicio.html');  
   });  



router.post('/', (req, res) => {  
const { username, password } = req.body;  
  
    if (username === 'Admin' && password === '123456') {  
        res.sendFile(__dirname + '/public/views/welcome.html');  
    } else {  
        setTimeout(() => {res.redirect('/');}, 5000);  
        res.sendFile(__dirname + '/public/views/error.html');  
    }  
}); 

 //Aqui é feito a criação de um roteador usando o modulo express, e o que permite fazer isso é o metodo express.Router()
 //O primeiro router faz com que quando alguem acessar a raiz do servidor no navegador seja enviado a tela de inicio
 //Ja o segundo faz uma verificação se a pessoa vai estar com os dados de login ja inseridos ou não
 //O metodo get é usado para requisitar dados enquanto o post e usado para enviar