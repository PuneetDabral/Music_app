const express = require('express');

const app = express();

const cors = require('cors');

app.get('/', (req,res)=>{
    return res.json("hii")
})

app.listen(4000, ()=>{
    console.log('lisining to port :4000');
})