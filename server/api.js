const express = require("express");
const router = express.Router();
const db = require("./db.js");

router.get("/genres", (req, res) => {
    let sql = `SELECT * FROM genres`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

router.post("/new", (req, res) => {
    console.log(req.body);
    res.end("Hello, " + req.body.name);
})

module.exports = router;
