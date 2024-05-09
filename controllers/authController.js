const path = require('path');  

function authenticate(req, res){  
 const { username, password } = req.body; 

    if (username === 'Admin' && password === '123456') {  
        res.sendFile(path.join(__dirname, '..' ,'public', 'views', 'welcome.html')); 

    } else {  
        setTimeout(() => {res.redirect('/login');}, 5000); 
        res.sendFile(path.join(__dirname, '..','public', 'views', 'error.html'));}  
}  


module.exports = {  
 authenticate 
};  

//Esse path e do node.js e fornece utilitários para trabalhar com caminhos de arquivos
//e com ele é possivel usar o path.join() que une pedaços de caminhos para formar um caminho completo
//por exemplo o caminho normal seria piblic/view/inicio mas com o join se escreve do jeito que está ali
//facilitando que a sintaxe do caminho funcione mesmo em diferentes sistemas operacionais.

//O res.sendFile é usado para enviar um arquivo como resposta da solicitação HTTP

//O _dirname oferece o caminho absoluto diretorio em que o arquivo esta localizado, é util pois vai sempre mostrar
//o local exato em que o arquivo está.

//O req é a requisição e por ela e possivel saber o que o usuário enviou
//e res é a resposta que é enviada pelo servidor para o cliente.

//O req.body é o corpo da requisição que vai conter os dados enviados pelo usuário,e na linha em que ele está, ocorre a desestruração dos dados
//para acessar o nome e senha separadamente

//O setTimeout é uma função usada para redirecionar o usuário para o login após 5 segundos
//talvez o uso do redirect não mude a URL porque so é usado o Login o tempo todo, a rota  "/" é usado pra outra coisa