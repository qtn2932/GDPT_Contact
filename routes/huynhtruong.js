const express= require('express');
const db= require('../data/db.js');
const router= express.Router();

router.get('/', (req, res)=>{
    db.find('HuynhTruong')
    .then(ht=>{
        res.status(201).json(ht)
    })
    .catch(error=>{
        res.status(500).json({message: 'fail to fetch list of ht'})
    })
})

module.exports= router;