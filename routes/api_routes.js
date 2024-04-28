const router = require('express').Router()
    const {Category} = require('../Models/index')
const {log}=console
router.get('/test',async (req,res)=>{
    log('reached test')
    try{
        const newCat = await Category.create({
            category_name:"testing1"
        })
        res.json({message:"test is reached"})

    }catch(err){
        log(err)
    }


})


module.exports = router