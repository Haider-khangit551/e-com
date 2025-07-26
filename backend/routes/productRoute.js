const ensureAuthenticated = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res)=>{
    res.status(200).json([
        {
            name: "fridge",
            price: "$200"
        },

        {
            name: "washing Machine",
            price: "$100"
        }
    ])
})

module.exports = router