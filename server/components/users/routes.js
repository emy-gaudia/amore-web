
module.exports = (app) => {
  const users = require('./controller');
  const router = require('express').Router();
  const auth = require('../../middlewares/validateToken.js');

  router.post('/login', users.login);
  router.post('/register', users.create);
  router.get('/findAll/:id', users.findAll);
  router.get('/findAllOnline', auth.validateToken, users.findAllOnline);
  router.get('/findUser/:id', users.findOne);
  router.put('/update/:id', users.update);
  router.delete('/delete/:id',auth.validateToken ,users.delete);
  router.post('/match/:id', users.matchWithUser);
  router.get('/viewMatches/:id', users.viewMatches);
  
  app.use('/api/users', router);
};
