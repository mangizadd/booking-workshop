const { create } = require("../services/datatService");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("create");
});

router.post('/', (req, res) => {

    create(req.body.name, req.body.lastName, req.body.age, req.body.city, req.body.country)

    res.redirect('/catalog')
})

module.exports = router;
