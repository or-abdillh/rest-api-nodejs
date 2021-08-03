'use strict';

module.exports = (app) => {
  var json = require('./controller.js');
  
  //Request GET
  app.route('/')
    .get(json.index);
  
  app.route('/view')
    .get(json.view);
    
  app.route('/view/id/:id')
    .get(json.orderByID);
  
  app.route('/view/job/:job')
    .get(json.orderByJob);
    
  //Request POST
  app.route('/add')
    .post(json.addNewRecord);
    
  //Request UPDATE
  app.route('/update')
    .post(json.updateRecord);
}