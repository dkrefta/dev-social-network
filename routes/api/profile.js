const express = require('express');

const router = express.Router();


// @route  GET api/profile/test
// @desc   Tests post routes
// @acess  Public

router.get('/test', (req, res) => res.json({ msg: 'Works'})
);

module.exports = router;
