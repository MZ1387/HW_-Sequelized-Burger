var express = require('express');
var router = express.Router();
var db = require('../models');

// on page load get DATA ARRAY from DATABASE
router.get("/", function(req, res) {
    // send DATABASE DATA ARRAY into HANDLEBAR INDEX
    db.burger.findAll({}).then(function(results) {
      // console.log(results);
      var handlebarsObject = {
              burgers: results
          };
          res.render("index", handlebarsObject);
        })
});

// on user input insert value into DATABASE
router.post("/", function(req, res) {

    db.burger.create({
      burger_name: req.body.burgerInput,
    }).then(function(data){
      res.redirect("/");
    });

});

// on user input UPDATE DEVOURED COL in DATABASE for ID
router.put("/:id", function(req, res) {

    db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.redirect("/");
    });

});

// Export routes for server.js to use.
module.exports = router;
