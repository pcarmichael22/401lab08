'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

// Models
// TODO: Pull these in (or create them)!
// const Products = require('./models/products.js');
// const products = new Products();

const Categories = require('./models/categories.js');
const categories = new Categories();
const categoryRouter = require('./routes/categories-route');

// Prepare the express app
const app = express();

mongoose.connect('mongodb://localhost:27017/class08', { useNewUrlParser: true, useUnifiedTopology: true });

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Catchalls
app.use(notFound);
app.use(errorHandler);
app.use(categoryRouter)


// app.listen(3000, () => console.log(`Server up on port 3000`) )

module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};