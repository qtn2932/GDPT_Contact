const express= require('express');
const server= express();
server.use(express.json());

const ht= require('../routes/huynhtruong.js');

//insanity check
server.get('/', (req,res)=>{
    res.json({message:'server is ready'})
})

server.use('/huynhtruong', ht);

module.exports= server;