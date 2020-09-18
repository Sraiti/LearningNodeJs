const express = require('express');
const Promotion = require('../model/Promotion');
  
const promotionRouter = express.Router();

promotionRouter.get('/',async (req, res) => {
   try {
      const promotion = await Promotion.find({});
      res.status(200);
      res.json(promotion);
   } catch (error) {
      res.status(400).send("Something went Wrong " + error);

   }
});
promotionRouter.post('/', async (req, res) => {
   const promotion = new Promotion({
      name: req.body.name,
      image: req.body.image,
      label: req.body.label,
      price: req.body.price,
      description: req.body.description,
      featured: req.body.featured
   });
   try {
      const savePromotion = await promotion.save();
      res.status(200).send("Promotion added \n " + savePromotion);
      console.log("Promotion added \n " + savePromotion);
   } catch (error) {
      res.status(400).send(error);
   }

});

promotionRouter.put('/', (req, res) => {
   res.statusCode = 403;
   res.send('PUT operation not supported on /Promotions');
});

promotionRouter.delete('/', async (req, res) => {
   try {
      await Promotion.remove({});
      res.status(200).send("All Promotions are deleted ");
   } catch (error) {
      res.status(400).send("Something went Wrong " + error);
   }

});

promotionRouter.get('/:name', async (req, res) => {
   try {
      const promotion = await Promotion.findOne({
         name: req.params.name
      });
      res.status(200).send('Promotion ' + promotion._id + ' is Found');

   } catch (error) {
      res.status(400).send('Promotion  NOt Found ' + error);

   }
});

promotionRouter.post('/:PromotionId', (req, res) => {
   res.statusCode = 403;
   res.send('POST operation not supported on /Promotions/' + req.params.PromotionId);
});

promotionRouter.put('/:id', async (req, res) => {
       Promotion.findByIdAndUpdate(req.params.id,req.body,function (err,doc) {
            if (!err) {
               res.status(200).send("Promotion Updated")
            }else{
               res.status(400).send("Something went wrong "+ err)
            }
      });
});

promotionRouter.delete('/:name', async (req, res) => {
   try {
      const promotion = await Promotion.findOneAndRemove(req.params.name);
      res.status(200).send("All Promotions are deleted ");
   } catch (error) {
      res.status(400).send("Something went Wrong " + error);
   }
});


 

module.exports = promotionRouter;