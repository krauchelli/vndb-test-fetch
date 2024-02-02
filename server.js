const express = require('express');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuid } = require('uuid');
// eslint-disable-next-line import/no-extraneous-dependencies
const methodOverride = require('method-override');
const { router } = require('./src/routes');

const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // jika mengirimkan data dalam bentuk form
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);

// listen
app.listen(port, () => {
  console.log(`Started with http://localhost:${port}`);
});
