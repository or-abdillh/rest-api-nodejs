'use strict';

module.exports = (app) => {
  var json = require('./controller.js');
  
  app.route('/404')
    .get(json.notFound);
  
  app.route('/')
    .get(json.index);
  
  app.route('/view')
    .get(json.view);
    
  app.route('/view/:id')
    .get(json.orderByID);
}