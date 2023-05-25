const express = require('express');
const router = express.Router();
const ActivitiesService = require('./../services/activitiesService')
const service= new ActivitiesService();


router.get('/', (req, res) => {
  const activities = service.find();
  res.status(200).json(activities)
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filter')
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const activities = service.findOne(id);
  res.status(200).json(activities)
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
})

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update',
    data: body,
    id,
  });
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.status(200).json({
    message: 'deleted',
    id,
  });
})
module.exports = router;
