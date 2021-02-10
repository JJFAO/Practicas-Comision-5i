const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) =>  {
  const usuario = new Usuario({ nombre: 'Rick', email: 'rick@gmail.com', password: 'asd', createdAt: Date.now() });
  await usuario.save();
  res.send(usuario);
};

exports.obtenerUsuarios = (req, res) => {
  console.log("funcion obtener usuarios");
};

exports.actualizarUsuario = (req, res) => {
  console.log("funcion actualizar usuario");
};

exports.eliminarUsuario = (req, res) => {
  console.log("funcion eliminar usuarios");
};
