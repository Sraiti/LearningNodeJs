 const express = require('express');
const dishRouter =require('./router/dishesRouter');
const leaderRouter =require('./router/leaderRouter');
const promotionRouter =require('./router/promotionRouter');


const app =express();
app.use(express.json());
app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promotions',promotionRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});