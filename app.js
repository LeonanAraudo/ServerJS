const express = require('express');  
/* import routes from "./routes"; */ 
/* const authRouter = require('routers'); */ 
const authController = require('./controllers/authController');  
const app = express();  
const port = 3000;  
app.use(express.urlencoded({ extended: true }));  
// Middleware para analisar o corpo da requisição (req.body) 
app.use(express.json());  


app.get('/', (req, res) => {  
 res.sendFile(__dirname + '/public/views/inicio.html');  
});  


app.get('/login', (req, res) => {  
 res.sendFile(__dirname + '/public/views/inicio.html');  
});  


app.post('/login', authController.authenticate);  


app.listen(port, () => {  
 console.log(`Servidor em execução na porta ${port}`);  
});  

//ali em cima ta pondo dentro da variavel authController o require que ta pegando o codigo do diretorio ali ta o caminho
//segundo a bruna a rota / fazer verificação se a pessoa tar logada ou não se tiver logada a pessoa e mandada
//pra welcome se
//o 3 app que tem o '/' direciona pro inicio.html que tem aquele form
//o 4