// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Crear un usuario
// api/usuarios
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuarios);
router.put('/', usuarioController.actualizarUsuario);
router.delete('/', usuarioController.eliminarUsuario);

module.exports = router;
