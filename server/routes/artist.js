const router = require('express').Router();

//our artist model
const artist = require('../models/artists')

router.post('/save',async(req,res)=>{
    const newArtist = artist({
        name:req.body.name,
        imageUrl:req.body.imageUrl,
        twitter:req.body.twitter,
        instagram:req.body.instagram
    })

    try{
        const savedArtist=await newArtist.save();
       return res.status(200).send({
            sucess:true,
            artist:savedArtist
        })
    }catch(err){
        res.status(400).send({
            sucess:false,
            msg:err
         
        })
    }

})


router.get('/getOne/:id', async(req,res)=>{
return res.json(req.params.id);

})


module.exports = router;