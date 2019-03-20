let express = require("express");
let router = express.Router();
let db = require("../models");


router.get("/items", (req, res) => {
  db.purchasedItems.findAll({}).then(results => {
     res.json(results);
     console.log(results)
  })
});


router.post("/items", (req, res) => {
  let newItem = req.body;
  db.purchasedItems.create(newItem).then(purchasedItems => {
    console.log(newItem);
    res.json(newItem);
  }).catch(error => {
    console.log(error);
    res.status(404).send(error);
  })

});

router.put("/items/:id", (req, res) => {
  db.purchasedItems.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results);
  })
});

router.delete("/items/:id", (req, res) => {
  db.purchasedItems.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (results) {
    res.json(results);
  });
});


module.exports = router;








