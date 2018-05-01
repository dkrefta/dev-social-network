const express = require('express');

const router = express.Router();


// @route  GET api/posts/test
// @desc   Tests post routes
// @acess  Public
router.get('/ok', (req, res) => res.json({ msg: "Users Works"
}));

module.exports = router;
