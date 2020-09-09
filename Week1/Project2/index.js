var react = require("./rectangle");

react(5,8,(err,rectangle)=>{
    console.log( rectangle.area()+"\n");
    console.log( rectangle.peremiter());
});