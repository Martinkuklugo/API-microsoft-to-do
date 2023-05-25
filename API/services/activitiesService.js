const {faker} = require('@faker-js/faker');
class ActivitiesService{

  constructor(){
    this.activities=[];
    this.generate();
  }

  generate(){
    const limit = 10;
  for (let index = 0; index < limit; index++){
    this.activities.push({
      id: faker.datatype.uuid(),
      name:faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      Image: faker.image.imageUrl(),
    });
  }
  }
  create(){


  }

  find(){
    return this.activities;

  }

  findOne(id){
    return this.activities.find(item => item.id === id);
  }

  delete(){


  }

}

module.exports = ActivitiesService
