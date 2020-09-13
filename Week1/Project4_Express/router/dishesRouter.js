const express = require('express');
 
const dishesRouter = express.Router();


 

dishesRouter.get('/', (req, res) => {
   res.send('Will send all the dishes to you!');
});
dishesRouter.post('/', (req, res) => {
   res.send('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

dishesRouter.put('/', (req, res) => {
   res.statusCode = 403;
   res.send('PUT operation not supported on /dishes');
});

dishesRouter.delete('/', (req, res) => {
   res.send('Deleting all dishes');
});

dishesRouter.get('/:dishId', (req, res) => {
   res.send('Will send details of the dish: ' + req.params.dishId + ' to you!');
});

dishesRouter.post('/:dishId', (req, res) => {
   res.statusCode = 403;
   res.send('POST operation not supported on /dishes/' + req.params.dishId);
});

dishesRouter.put('/:dishId', (req, res) => {
   res.write('Updating the dish: ' + req.params.dishId + '\n');
   res.send('Will update the dish: ' + req.body.name +
      ' with details: ' + req.body.description);
});

dishesRouter.delete('/:dishId', (req, res) => {
   res.send('Deleting dish: ' + req.params.dishId);
});


module.exports = dishesRouter;