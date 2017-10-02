'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'glimmer-todo',
    environment: environment
  };

  ENV.API_BASE_URL = 'http://localhost:4000/api/';

  return ENV;
};
