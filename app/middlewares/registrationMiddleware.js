const { check } = require('express-validator');

module.exports = [
  check('email', 'некорректный email').isEmail(),
  check('password', 'минимальная длинна пароля 6 символов').isLength({min: 6})
]