const { getList, getById } = require("../services/datatService");

const router = require("express").Router();

router.get("/", (req, res) => {
    const products = getList()
    res.render("catalog", {
        products
    });

});

router.get("/:id", (req, res) => {
    const id = req.params.id
    const product = getById(id)

    res.render("details", product);
});

module.exports = router;
