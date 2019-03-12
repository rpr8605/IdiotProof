

let Items = require("../models/items");

module.exports = function (app) {
  app.get("/api/all", function (req, res) { //uncertain if this should be /
    Items.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/:id", function (req, res) {
    if (req.params.id) {
      Items.findAll({
        where: {
          id: req.params.id
        }
      }).then(function (results) {
        res.json(results);
      });
    }
  });

  app.post("/api/new", function (req, res) {
    Items.create({
      item_name: req.body.name,
      category: req.body.category,
      expiration_date: req.body.expiration_date,
      notes: req.body.notes,
      warranty_valid: req.body.warranty_valid
    });
  });

  app.delete("/api/items/:id", function (req, res) {
    Items.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  app.put("/api/update", function (req, res) {
    Items.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (results) {
        res.json(results);
      });
  });
};




