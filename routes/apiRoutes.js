let express = require("express");
let router = express.Router();
let db = require("../models");


router.get("/items", (req, res) => {
  db.Items.findAll({}).then(results => {
    console.log("Hey there");
    res.json(results);
  })
});


router.post("/items", (req, res) => {
  let newItem = req.body;

  db.Items.create(newItem).then(Items => {
    console.log(Items);
    res.json(Items);
  }).catch(error => {
    console.log(error);
    res.status(404).send(error);
  })

});

router.put("/items/:id", (req, res) => {
  db.Items.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results);
  })
});

router.delete("/items", (req, res) => {
  db.Items.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (results) {
    res.json(results);
  });
});


module.exports = router;








