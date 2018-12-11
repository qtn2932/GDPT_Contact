const express= require('express'); // add express to use express router
const server= express(); // server uses express
const cors= require('cors');// cors is needed to access data across domain, needed for front end wiring up later
server.use(express.json());
server.use(cors());

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