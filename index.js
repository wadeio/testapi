const express=require('express');
const app=express();

const port=3000;

app.get('/',(req,res)=>{
    //res.write(__dirname);
    //res.render('index');
    res.sendFile(__dirname+'/index.html');
});

app.listen(80,function(){
    console.log('server start on http://localhost');
})
