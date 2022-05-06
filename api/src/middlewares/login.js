const jwt = require('jsonwebtoken');
const { User } = require('../db');

const loginVerification = async (req, res, next) => {
  try {
    req.user = jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);

    const user = await await User.findByPk(req.user.id, { attributes: ['id'] });

    if (user) return next();
    res.status(500).send({ msg: 'Invalid login' });
  } catch (err) {
    res.status(401).send({
      type: 'unauthorized',
      msg: 'Acceso denegado.',
    });
  }
};

const rootVerification = async (req, res, next) => {
  try {
    req.user = jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);

    const user = await await User.findByPk(req.user.id, { attributes: ['roleId'] });
    if (user && user.roleId === 1) return next();
    res.status(401).send({ msg: 'Invalid login' });
  } catch (err) {
    res.status(401).send({
      type: 'unauthorized',
      msg: 'Acceso denegado.',
    });
  }
};

module.exports = { loginVerification, rootVerification };
