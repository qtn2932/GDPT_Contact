const express= require('express');
const db= require('../data/db.js');
const router= express.Router();
const data= 'Thanh_Thieu_Nu';

router.get('/', (req, res)=>{
    db.find(data)
    .then(ht=>{
        res.status(201).json(ht)
    })
    .catch(error=>{
        res.status(500).json({message: 'fail to fetch list of ht'})
    })
})
router.post('/name', (req, res)=>{
    const params= req.body;
    db.findByName(data,params.FullName)
    .then(ht=>{
        res.status(201).json(ht)
    })
    .catch(error=>{
        res.status(500).json({message: `fail to fetch ${params.FullName}'s contact` })
    })
})

module.exports= router;