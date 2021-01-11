const { Router } = require('express');
const router = Router();

const registrationMiddleware = require('./middlewares/registrationMiddleware');
const authenticationMiddleware = require('./middlewares/authenticationMiddleware');
const jwtMiddleware = require('./middlewares/jwtMiddleware');

const UserController = require('./controllers/UserController');

router.post('/registration', registrationMiddleware, UserController.registration);
router.post('/authentication', authenticationMiddleware, UserController.authentication);

// router.post('/logout', async (request, response) => {
    
// });

module.exports = router;