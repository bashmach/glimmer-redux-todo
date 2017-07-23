'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/todomvc-app-css'
      ]
    }
  });

  return app.toTree();
};
