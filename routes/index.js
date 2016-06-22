var express = require('express');
var router = express.Router();
var contacto = require('../controllers/contacto')

/* GET home page. */
router.get('/',contacto.index);

router.get('/RegistrarContacto', contacto.RegistroContacto);
router.get('/RespuestaContacto', contacto.RespuestaContacto);
router.get('/guardarContacto', contacto.guardarContacto);

module.exports = router;
