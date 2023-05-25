const express = require('express');
const activitiesRouter = require('./activitiesRouter');
const usersRouter = require('./usersRouter');

function routerAPI(app){
  const router = express.Router();
  app.use('/api/v1',router);
router.use('/activities', activitiesRouter),
router.use('/users', usersRouter)
}

module.exports = routerAPI;
