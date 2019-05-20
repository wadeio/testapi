const express=require('express');
const app=express();
const path = require('path');
const port=3000;

//提供靜態檔案
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(80,function(){
    console.log('server start on http://localhost');
})
