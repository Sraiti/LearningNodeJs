
const express = require('express');
 
const promotionRouter = express.Router();

promotionRouter.get('/', (req, res) => {
   res.send('Will send all the promotions to you!');
});
promotionRouter.post('/', (req, res) => {
   res.send('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
});

promotionRouter.put('/', (req, res) => {
   res.statusCode = 403;
   res.send('PUT operation not supported on /promotions');
});

promotionRouter.delete('/', (req, res) => {
   res.send('Deleting all promotions');
});

promotionRouter.get('/:promotionId', (req, res) => {
   res.send('Will send details of the promotion: ' + req.params.promotionId + ' to you!');
});

promotionRouter.post('/:promotionId', (req, res) => {
   res.statusCode = 403;
   res.send('POST operation not supported on /promotions/' + req.params.promotionId);
});

promotionRouter.put('/:promotionId', (req, res) => {
   res.write('Updating the promotion: ' + req.params.promotionId + '\n');
   res.send('Will update the promotion: ' + req.body.name +
      ' with details: ' + req.body.description);
});

promotionRouter.delete('/:promotionId', (req, res) => {
   res.send('Deleting promotion: ' + req.params.promotionId);
});


module.exports = promotionRouter;