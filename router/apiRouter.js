const express = require('express')
const router = express.Router();
const apiController = require('./../controller/apiController')

router.get('/',(req,res)=>{
    res.send('Hello World!')
})

router.get('/calculate/:value1/:value2',(req,res)=>{
    const a = parseInt(req.params.value1);
    const b = parseInt(req.params.value2);

    const result = apiController.calculate2values(a,b)

    res.send(`${a} + ${b} = ${result}`)
})

module.exports = router;