module.exports.jogo = function(application, req, res){

    if(req.session.autoriazado !== true){
        res.send('Usuário precisa fazer login');
        return;
    }

    

    res.render("jogo", {img_casa: req.session.casa});
}

module.exports.sair = function(application, req, res){
   req.session.destroy( function(err){
       res.render("index", {validacao: {}});
   })
}