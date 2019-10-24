'use strict'
const express = require('express');
const router = express.Router();
const categories = require('../models/categories')

// Routes
/**
 * @route GET /categories
 * @returns 200 - [{name}, {description}]
 * @return 500 - server error
 * @return 404 - category not found
 */

router.get('/api/v1/categories', getCategories);

/**
 * @route POST /categories
 * @returns 200 - [{name}, {description}]
 * @return 500 - server error 
 * @return 404 - category not found
 */

router.post('/api/v1/categories', postCategories);

/**
 * @route GET /categoriesById
 * @returns 200 - [{_id}, {name}, {description}]
 * @return 500 - server error
 * @return 404 - category not found
 */

router.get('/api/v1/categories/:id', getCategory);

/**
 * @route PUT /categories
 * @returns 200 - [{_id}, {name}, {description}]
 * @return 500 - server error
 * @return 404 - category not found
 */

router.put('/api/v1/categories/:id', putCategories);

/**
 * @route DELETE /categories
 * @returns 200 - [{_id}, {name}, {description}]
 * @return 500 - server error
 * @return 404 - category not found
 */

router.delete('/api/v1/categories/:id', deleteCategories);


// ROUTE HANDLER FUNCTIONS
function getCategories(request,response,next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function getCategory(request,response,next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function postCategories(request,response,next) {
  // expects the record that was just added to the database
  categories.create(request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}


function putCategories(request,response,next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function deleteCategories(request,response,next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;