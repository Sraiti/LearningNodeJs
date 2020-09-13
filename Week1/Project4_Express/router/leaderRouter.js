const express = require('express');
 
const leaderRouter = express.Router();


 

leaderRouter.get('/', (req, res) => {
   res.send('Will send all the leaders to you!');
});
leaderRouter.post('/', (req, res) => {
   res.send('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

leaderRouter.put('/', (req, res) => {
   res.statusCode = 403;
   res.send('PUT operation not supported on /leaders');
});

leaderRouter.delete('/', (req, res) => {
   res.send('Deleting all leaders');
});

leaderRouter.get('/:leaderId', (req, res) => {
   res.send('Will send details of the leader: ' + req.params.leaderId + ' to you!');
});

leaderRouter.post('/:leaderId', (req, res) => {
   res.statusCode = 403;
   res.send('POST operation not supported on /leaders/' + req.params.leaderId);
});

leaderRouter.put('/:leaderId', (req, res) => {
   res.write('Updating the leader: ' + req.params.leaderId + '\n');
   res.send('Will update the leader: ' + req.body.name +
      ' with details: ' + req.body.description);
});

leaderRouter.delete('/:leaderId', (req, res) => {
   res.send('Deleting leader: ' + req.params.leaderId);
});


module.exports = leaderRouter;