const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const UserController = {
  
  registration: async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации'
        })
      }
  
      const { email, password } = request.body;
      const candidate = await User.findOne({email});
      if (candidate) {
          return response.status(400).json({message: 'такой пользователь уже есть'})
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({email, password: hashedPassword});
      await user.save();
  
      return response.status(201).json({message: 'Пользователь создан'});
    } catch (e) {
      return response.status(500).json({message: "server error"})
    }
  },

  authentication: async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
          return response.status(400).json({
              errors: errors.array(),
              message: 'При входе в систему возникла ошибка'
          })
      }
    const {email, password} = request.body;
    const user = User.findOne({email});
    if (!user) {
      return response.status(400).json({message: 'Пользователь не найден'})
    }
  
    const isMatch = await bcript.compare(password, user.password);
  
    if (!isMatch) {
      return response.status(400).json({message: 'неверный пароль, попробуйте снова'});
    }
  
    const token = jwt.sign(
      { userId: user.id }, 
      config.get('jwt_access_secret'),
      { expiresIn: '1h', algorithm: config.get('jwt_algorithm') }
    );
  
    return response.status(200).json({ token: `Bearer ${token}`, userId: user.id })
    } catch (e) {
      return response(500).json({message: 'Что-то пошло не так'})
    }
  },

  protectAction: async (request, response) => {

  }
};

module.exports = UserController;