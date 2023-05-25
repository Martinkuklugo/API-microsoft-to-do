const express = require('express');
const router = express.Router();
const UsersService= require('./../services/usersService')
const service = new UsersService();
const validatorHandler = require('./../middlewares/validatorHandler')
const {createUserDTO, updateUserDTO, getUserDTO } = require('./../DTOs/userDTO')

router.get('/',async (req, res) => {
  const users =await service.find();
  res.json(users)
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter')
})

router.get('/:id',
validatorHandler(getUserDTO, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const users= await service.findOne(id);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
})

router.post('/',
    validatorHandler(createUserDTO, 'body'),
    async (req, res) => {
      const body = req.body;
      const newUser= await service.create(body);
      res.status(201).json(newUser);
})

router.patch('/:id',
  validatorHandler(getUserDTO, 'params'),
  validatorHandler(updateUserDTO, 'body'),
  async (req, res) => {
    try {
      const {id} = req.params;
      const body = req.body
      const user =await service.update(id, body);
      res.status(200).json(user);
    }   catch (error) {
        res.status(404).json({
        message: error.message
        });
  }

})

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const response =await service.delete(id);
  res.status(200).json(response);
})
module.exports = router;
