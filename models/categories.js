'use strict';

const categoryModel = require('./categories-schema');

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

class Categories {

  constructor() {
  }

// Ask about this in class (Find vs. findbyID - if you use findById, you will get 0 or 1 documents back. If you use find you will get 0 - many documents back.
// ID's are always unique, so you can never get mroe than one document when using findById)

  get(_id) {
    // if(_id){
    //   return categoryModel.findById(_id, function (err, category){
    //     if(err){
    //       console.error(err)
    //       return
    //     }
    //     return category
    //   })
    // }

    if(_id){
      const mypromise = categoryModel.findById(_id, function (err, category){
        if(err){
          console.error(err)
          return
        }
        return category
      })
      return mypromise
    }
    //Should the array contain mongoose documents or JSON objects??
    return categoryModel.find({}, function (err, categories){
      if(err){
        console.error(err)
        return
      }
      return { count: categories.length, results: categories};
    });
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let category = new CategoryModel(record);
 
    // save model to database
    category.save(function (err, category) {
      if (err){
        return console.error(err);
      }
      return category
    });

  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    categoryModel.findByIdAndUpdate(_id, record, function (err, category){
      if(err){
        console.error(err)
        return
      }
      return category
    })
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    categoryModel.findByIdAndDelete(_id, function (err){
      if(err){
        console.error(err)
        return
      }
      return
    })
  }
}

module.exports = Categories;