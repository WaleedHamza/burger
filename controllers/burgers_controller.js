var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    if (!req.body.burger_name || !req.body.devoured) {
        return res
            .status(400)
            .send("burger name and devoured status required")
            .end();
    }

    if (!burger.validateName(req.body.name)) {
        return res
            .status(500)
            .send('name contained invalid characters')
            .end();
    }

    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], (result) => {
        res.redirect('/')
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log('@router.put', condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        // error handler
        if (result.changedRows == 0) {
            return res
                .status(403)
                .end();
        } else {
            res
                .status(200)
                .end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    var condition = req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res
                .status(400)
                .end();
        } else {
            res
                .send(200)
                .end();
        }
    })
})
module.exports = router;