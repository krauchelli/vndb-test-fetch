const express = require('express');
const { searchVn } = require('./controller');

const router = express.Router();

// routing

// exports
module.exports = { router };

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.get('/lookvn', (req, res) => {
  res.render('lookvn.ejs');
});

// logika untuk POST
router.post('/lookvn', searchVn);
