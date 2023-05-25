const boom = require('@hapi/boom');

function validatorHandler(dto, property){
  return(req,res,next) =>{
    const data = req[property];
    //si la informacion proviene de un post se toma del body
    //=>req.body
    //si la informacion proviene de un get se toma del params
    //=>req.params
    //otra opcion podria ser en el query
    //=>req.query
    const {error} = dto.validate(data, {abortEarly: false});
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
