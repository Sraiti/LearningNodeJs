const express = require('express');
const Leader = require('../model/Leader');
const leaderRouter = express.Router();



leaderRouter.get('/', async (req, res) => {
   try {
      const leader = await Leader.find({});
      res.status(200);
      res.json(leader);
   } catch (error) {
      res.status(400).send("Something went Wrong " + error);

   }
});
leaderRouter.post('/', async (req, res) => {
   const leader = new Leader({
      name: req.body.name,
      image: req.body.image,
      designation: req.body.designation,
      abbr: req.body.abbr,
      description: req.body.description,
      featured: req.body.featured
   });
   try {
      const saveLeader = await leader.save();
      res.status(200).send("Leader added \n " + saveLeader);
      console.log("Leader added \n " + saveLeader);
   } catch (error) {
      res.status(400).send(error);
   }

});

leaderRouter.put('/', (req, res) => {
   res.statusCode = 403;
   res.send('PUT operation not supported on /leaders');
});

leaderRouter.delete('/', async (req, res) => {
   try {
      await Leader.remove({});
      res.status(200).send("All Leaders are deleted ");
   } catch (error) {
      res.status(400).send("Something went Wrong " + error);
   }

});

leaderRouter.get('/:name', async (req, res) => {
   try {
      const leader = await Leader.findOne({
         name: req.params.name
      });
      res.status(200).send('Leader ' + leader._id + ' is Found');

   } catch (error) {
      res.status(400).send('Leader  NOt Found ' + error);

   }
});

leaderRouter.post('/:leaderId', (req, res) => {
   res.statusCode = 403;
   res.send('POST operation not supported on /leaders/' + req.params.leaderId);
});

leaderRouter.put('/:id', async (req, res) => {
       Leader.findByIdAndUpdate(req.params.id,req.body,function (err,doc) {
            if (!err) {
               res.status(200).send("Leader Updated")
            }else{
               res.status(400).send("Something went wrong "+ err)
            }
      });
});

leaderRouter.delete('/:name', async (req, res) => {
   try {
      const leader = await Leader.findOneAndRemove(req.params.name);
      res.status(200).send("All Leaders are deleted ");
   } catch (error) {
      res.status(400).send("Something went Wrong " + error);
   }
});


module.exports = leaderRouter;