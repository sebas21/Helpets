'use strict';
const express = require('express'),
	  router = express.Router(),
	  User = require('./models').User;


router.route('/ingresar/')
	.get(function (req, res) {		
		res.render('users/login.html');
	});

router.route('/salir/')
	.get(function (req, res) {
		req.logout();
		res.redirect('/');
	});


router.get('/allusers',function(req,res){
		//usa el metodo static"user" "findi" para recuperar todos los usuarios
  User.find(function(err,users){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(users);
	});
});


router.post('/adduser',function(req,res){
	//creo una instancia del model mongoose User
	newUser = new userModel({
		username:req.body.username,
		password:req.body.password,
		Cedula: req.body.Cedula,
		Nombre: req.body.Nombre,
		Apellido: req.body.Apellido,
		Correo: req.body.Correo
	});
	//usar el metodo save de la instancia user para salvar un nuevo documento user
	newUser.save(function(err,user){
		if(err){
			//llama al framework con un error
			return res.status(500).send(err.message);
		}
		//usar el objeto response para enviar una respuesta json
		res.status(200).jsonp(user);
	});
});



module.exports = router;