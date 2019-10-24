'check source code and bring app.js into here'

// use express router

// grabbing models from getCategories
 

// get post put delete on getcategories

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

