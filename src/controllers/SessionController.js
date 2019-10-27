//Index, Show, Sotore, Update, Destroy
const User = require('../models/User');
const md5 =  require('md5');

module.exports= {
    async store(req,res){
        const {email}  = req.body;
        let {senha} =  req.body;
        
        let user = await User.findOne({email});       
        let senhamd5 = md5(senha)
        //senha Forte Letras Maiusca, Minuscula, Numeros, e caracter especial
        //No minimo 8 Digitos
        let senhaForte = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        
        //Letras M m e Numeros no minimo 6 digitos
        let senhaMedium = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if(user)
        {
            return res.status(400).json({status: "Usuario ja cadastrado"});
        }
        else if(!senhaForte.test(senha))
        {  

            return res.status(400).json({erro:"senha deve conter Letra Maiuscula numero e caracter especial"})
        }
    
        else if (!user ){
            senha = senhamd5
            user = await User.create({
                email,
                senha
            });
        }
        
        return res.json(user);
    }
    

}