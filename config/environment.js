'use strict';

const fs = require('fs');
const defaultModuleConfigurationPath = __dirname + '/../node_modules/@glimmer/application-pipeline/lib/broccoli/default-module-configuration.ts';
const defaultModuleConfigurationString = fs.readFileSync(defaultModuleConfigurationPath, 'utf-8');

const moduleConfiguration = eval('(' + defaultModuleConfigurationString.replace('export default', '').replace(';', '') + ')');

moduleConfiguration['types']['reducer'] = {
  definitiveCollection: 'reducers'
};
moduleConfiguration['collections']['reducer'] = {
  types: ['reducers/index'],
  defaultType: 'reducer'
};

moduleConfiguration['types']['action'] = {
  definitiveCollection: 'actions'
};
moduleConfiguration['collections']['action'] = {
  types: ['actions/index'],
  defaultType: 'action'
};

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'glimmer-todo',
    environment: environment,
    moduleConfiguration
  };

  ENV.API_BASE_URL = 'http://localhost:4000/api/';

  return ENV;
};
