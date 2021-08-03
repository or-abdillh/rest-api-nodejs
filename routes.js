'use strict';

module.exports = (app) => {
  var json = require('./controller.js');
  
  //Index
  app.route('/')
    .get(json.index);
  
  //Shows all data
  app.route('/view')
    .get(json.view);
  
  //Order by id  
  app.route('/view/id/:id')
    .get(json.orderByID);
  
  //Order by job
  app.route('/view/job/:job')
    .get(json.orderByJob);
    
  //Create
  app.route('/add')
    .post(json.addNewRecord);
    
  //Update by ID
  app.route('/update')
    .post(json.updateRecord);
    
  //Delete by ID
  app.route('/delete')
    .delete(json.deleteRecord);
}