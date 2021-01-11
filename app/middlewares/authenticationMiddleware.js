const { check } = require('express-validator');

module.exports = [
  check('email', 'введите корректный email').normalizeEmail().isEmail(),
  check('password', 'введите пароль').exists()
]