let express = require("express");

let router = express.Router();



let Items = require("../models/items");


router.get("/items", (req, res) => {
  Items.findAll({}).then(results => {
    console.log("Hey there");
    res.json(results);
  })
});


router.post("/items", (req, res) => {
  let newItem = req.body;

  Items.create(newItem).then(Items => {
    console.log(Items);
    res.json(Items);
  }).catch(error => {
    console.log(error);
    res.status(404).send(error);
  })

});

router.put("/items", (req, res) => {
  res.send("You have hit the put route.")
  Items.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(results => {
    res.json(results);
  })
});

router.delete("/items", (req, res) => {
  Items.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (results) {
    res.json(results);
  });
});


module.exports = router;








