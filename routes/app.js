var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login-inicio');
});

//post enviando nome de usuario inserido no formulario
router.post('/logado-inicio', function (req, res, next){
    var user = req.body.user;
 //verificacao de campo usuario vazio
    if (user == ""){
        res.redirect('/login-inicio');
    }
    res.redirect('/logado-inicio/' + user);
});

//rota get para logado inicio
router.get('/logado-inicio/:msgParam', function (req, res, next) {
    res.render('logado-inicio', {user: req.params.msgParam});
});

router.get('/message/:msgParam', function (req, res, next) {
    res.render('node', {mensagem: req.params.msgParam});
});

router.post('/message', function (req, res, next){
    var messageVar = req.body.messageBody;
    res.redirect('/message/' + messageVar);
});

module.exports = router;
