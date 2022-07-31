const router = require("express").Router();

//our artist model
const artist = require("../models/artists");

router.post("/save", async (req, res) => {
  const newArtist = artist({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
  });

  try {
    const savedArtist = await newArtist.save();
    return res.status(200).send({
      sucess: true,
      artist: savedArtist,
    });
  } catch (err) {
    res.status(400).send({
      sucess: false,
      msg: err,
    });
  }
});

router.get("/getOne/:id", async (req, res) => {
  const filter = { _id: req.params.id };

  const data = await artist.findOne(filter);

  if (data) {
    res.status(200).send({
      sucess: true,
      artist: data,
    });
  } else {
    res.status(400).send({
      sucess: false,
      msg: "Data not found",
    });
  }
});

router.get("/getAll", async (req, res) => {
  const options = {
    sort: {
      createdAt: 1,
    },
  };
  const data = await artist.find(options);

  if (data) {
    res.status(200).send({
      sucess: true,
      artist: data,
    });
  } else {
    res.status(400).send({
      sucess: false,
      msg: "Data not found",
    });
  }
});

router.put("/update/:updateId", async (req, res) => {
    const filter = { _id: req.params.updateId };
    const options = {
      upsert: true,
      new: true,
    };
    try {
      const result = await artist.findOneAndUpdate(
        filter,
        {
          name: req.body.name,
          imageURL: req.body.imageURL,
          twitter: req.body.twitter,
          instagram: req.body.instagram,
        },
        options
      );
      res.status(200).send({ artist: result });
    } catch (error) {
      res.status(400).send({ success: false, msg: error });
    }
  });
  
  router.delete("/delete/:deleteId", async (req, res) => {
    const filter = { _id: req.params.deleteId };
  
    const result = await artist.deleteOne(filter);
    if (result.deletedCount === 1) {
      res.status(200).send({ success: true, msg: "Data Deleted" });
    } else {
      res.status(200).send({ success: false, msg: "Data Not Found" });
    }
  });
  


module.exports = router;
