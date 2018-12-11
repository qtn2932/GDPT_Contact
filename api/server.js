const express= require('express');
const server= express();
server.use(express.json());

const ht= require('../routes/huynhtruong.js');
const thieuNam= require('../routes/thieunam.js')
const thieuNu= require('../routes/thieunu');
const ovNam= require('../routes/oanhvunam');
const ovNu= require('../routes/oanhvunu');
const vietNgu= require('../routes/vietngu');
const db=require('../data/db.js');

//insanity check
server.get('/', (req,res)=>{
    res.json({message:'server is ready'})
})


server.use('/huynhtruong', ht);
server.use('/thieunam', thieuNam);
server.use('/thieunu',thieuNu);
server.use('/ovnam',ovNam);
server.use('/ovnu',ovNu);
server.use('/vietngu', vietNgu);

module.exports= server;