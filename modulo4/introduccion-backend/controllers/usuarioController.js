const bcryptjs = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).send({ msg: errores.array() });
    }

    const { email, password } = req.body;
    try {
        const usuarioEncontrado = await Usuario.findOne({ email });
        if (usuarioEncontrado) {
            return res.status(400).send('El correo ya está en uso.');
        }

        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        const encryptedPass = await bcryptjs.hash(password, salt);

        const usuario = new Usuario({ ...req.body, createdAt: Date.now(), password: encryptedPass });
        await usuario.save();

        // Crear y firmar jwt
        const payload = {
            usuario: {
                id: usuario.id,
            },
        };
        jwt.sign(payload, process.env.SECRETA, { expiresIn: 3600 }, (error, token) => {
            if (error) {
                throw error;
            }
            res.send(token);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error al crear usuario.');
    }
};

exports.obtenerUsuarios = (req, res) => {
    console.log('funcion obtener usuarios');
};

exports.actualizarUsuario = (req, res) => {
    console.log('funcion actualizar usuario');
};

exports.eliminarUsuario = (req, res) => {
    console.log('funcion eliminar usuarios');
};
