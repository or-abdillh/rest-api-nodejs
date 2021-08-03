'use strict';

module.exports.success = (values, res) => {
  const data = {
    'code': 200,
    'message': 'Success',
    'valuesco': values
  };
  
  res.json(data);
  res.end();
}

module.exports.notFound = (values, res) => {
  const data = {
    'code': 404,
    'message': 'not found',
    'description': values
  }
  
  res.json(data);
  res.end();
}