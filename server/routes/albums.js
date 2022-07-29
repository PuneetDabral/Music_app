const router = require("express").Router();
const album = require("../models/album");

router.post("/save", async (req, res) => {
  const newAlbum = album({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
  });

  try {
    const savedAlbum = await newAlbum.save();
    return res.status(200).send({
      sucess: true,
      album: savedAlbum,
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

  const data = await album.findOne(filter);

  if (data) {
    res.status(200).send({
      sucess: true,
      album: data,
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
  const data = await album.find(options);

  if (data) {
    res.status(200).send({
      sucess: true,
      album: data,
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
      const result = await album.findOneAndUpdate(
        filter,
        {
          name: req.body.name,
          imageURL: req.body.imageURL,
        },
        options
      );
      res.status(200).send({ album: result });
    } catch (error) {
      res.status(400).send({ success: false, msg: error });
    }
  });


  router.delete("/delete/:deleteId", async (req, res) => {
    const filter = { _id: req.params.deleteId };
  
    const result = await album.deleteOne(filter);
    if (result.deletedCount === 1) {
      res.status(200).send({ success: true, msg: "Data Deleted" });
    } else {
      res.status(200).send({ success: false, msg: "Data Not Found" });
    }
  });
  





module.exports = router;
