var express=require('express');
var app=express();
app.use(express.static('./public'));
app.get('/',function (req,res) {
    res.send('hello');
  })
app.listen(8000,function () {
    console.log('server is running at localhost:8000');
  })