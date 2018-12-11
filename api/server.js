const express= require('express');
const server= express();
server.use(express.json());

const knex= require('knex');
const knexConfig= require('../knexfile');
const db= knex(knexConfig.development);

//insanity check
server.get('/', (req,res)=>{
    res.json({message:'server is ready'})
})

module.exports= server;