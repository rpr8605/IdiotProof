let express = require("express");
let router = express.Router();
let db = require("../models");


router.get("/items", (req, res) => {
  db.purchaseditems.findAll({}).then(results => {
    console.log("Hey there");
    res.json(results);
  })
});


router.post("/items", (req, res) => {
  let newItem = req.body;

  db.purchaseditems.create(newItem).then(purchaseditems_db => {
    console.log(newItem);
    res.json(newItem);
  }).catch(error => {
    console.log(error);
    res.status(404).send(error);
  })

});

router.put("/items/:id", (req, res) => {
  db.purchaseditems.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results);
  })
});

router.delete("/items", (req, res) => {
  db.purchaseditems.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (results) {
    res.json(results);
  });
});


module.exports = router;








