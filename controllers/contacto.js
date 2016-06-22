//Registro de Contacto
//verificar si es un contacto correcto
//req = peticion
//res = respuesta
var models = require('../models/model.js');

exports.RegistroContacto = function (req, res){
	var agenda = models.Contacto.build({ nombres: "Nombre",
									apellidoPaterno: "Paterno",
									apellidoMaterno: "Materno",
									telefonoPersonal: 0,
									telefonoDomicilio: 0,
									cumpleanos: new Date()});

	res.render('RegistroContacto', {titulo:'Registro de Contacto', agenda: agenda});
}

exports.RespuestaContacto = function (req, res){
	res.render('RespuestaContacto', {mensaje:'Se registro el contacto'});
}
exports.guardarContacto = function(req, res){
	console.log("ingresa a guardar");
	var contacto = models.Contacto.build (req.body.contacto);
    //a continuacion guardamos los campos que recibimos del formulario
contacto.save	({fields:["nombres",
					  "apellidoPaterno",
					  "apellidoMaterno",
					  "telefonoPersonal",
					  "telefonoDomicilio",
					  "cumpleanos"
					  ]
			 }).then(function(){
				console.log("ingresa a redirecr");
				res.render('respuestaContacto', {mensaje:'Se registro el contacto con exito'});
			 });  	
}
exports.index = function (req, res, next){
	models.Contacto.findAll().then(function(contactos){
		res.render('index',{title: 'Avances en computacion',contactos: contactos});
	})
}




