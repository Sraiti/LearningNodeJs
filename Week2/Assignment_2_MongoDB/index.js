const express = require('express');
const leaderRouter = require('./routes/leaderRouter');
const promotionRouter = require('./routes/promotionRouter');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use('/leaders', leaderRouter);
app.use('/promotions', promotionRouter);


mongoose.connect('mongodb+srv://Sraiti:cqDTcyC2DLqngzK@cluster0.u0vyr.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  })
  .then(() => {
    console.log('connection to database established');
  }).catch(err => {
    console.log('db error ${err.message}');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});