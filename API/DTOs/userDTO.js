const joi  = require('joi');


const id = joi.string().uuid();
const name = joi.string().alphanum().min(3).max(30);
const lastName = joi.string().alphanum().min(3).max(30);
const email= joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });

const createUserDTO = joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
})

const updateUserDTO = joi.object({
  name: name,
  lastName: lastName,
  email: email,
})

const getUserDTO = joi.object({
  id: id.required(),
})

module.exports = {createUserDTO, updateUserDTO, getUserDTO }
