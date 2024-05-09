const User = require('../models/user');  
const login = (req, res) => {  
    const { username, password } = req.body;  
    const user = new User(username, password);  
   
    if (user.validate()) {  
            res.redirect('/welcome');  
        } else {  
        res.redirect('/error');  
        }  
};  
module.exports = {  
 login,  
};  
//Aqui começa requerindo o arquivo user
//O new user cria uma nova instancia pra classe User
//Com o sendFile é enviado como resposta um arquivo e com o redirect é redirecionado para uma nova rota
//O user validate vai checar se o usuário que esta tendando entra e o mesmo que ja existe no sistema