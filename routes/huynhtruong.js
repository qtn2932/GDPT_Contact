const express= require('express');
const db= require('../data/db.js');
const router= express.Router();
const ht= 'HuynhTruong';

router.get('/', (req, res)=>{
    db.find(ht)
    .then(ht=>{
        res.status(201).json(ht)
    })
    .catch(error=>{
        res.status(500).json({message: 'fail to fetch list of ht'})
    })
})
router.post('/name', (req, res)=>{
    const params= req.body;
    db.findByName(ht,params.FullName)
    .then(ht=>{
        res.status(201).json(ht)
    })
    .catch(error=>{
        res.status(500).json({message: `fail to fetch ${params.FullName}'s contact` })
    })
})

module.exports= router;