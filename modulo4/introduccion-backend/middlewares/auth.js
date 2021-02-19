const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send({ msg: 'Fallo al autenticar' })
  }

  try {
    const cifrado = jwt.verify(token, process.env.SECRETA)
    req.usuario = cifrado.usuario;
  } catch (error) {
    
  }

  // console.log('token', token);
  next()
}