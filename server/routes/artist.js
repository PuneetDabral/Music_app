const router = require('express').Router();

router.get('/getAll',async(req,res)=>{
    return res.json("getting all artist")
})


module.exports = router;