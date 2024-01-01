var express = require('express');
var router = express.Router();
// const data = require('../views/treeflex.ejs');

/* GET users listing. */
// Endpoint to fetch users data
router.get('/users', (req, res) => {
  res.render('treeflex', { title: 'Treeflex' });
});

module.exports = router;
