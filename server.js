const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/home',(req,res)=>{
  res.render('index');
})

app.listen(3001, ()=>{
  console.log('the server is runnig on port 3001')
});