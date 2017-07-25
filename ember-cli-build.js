'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const resolve = require('rollup-plugin-node-resolve');
const globals = require('rollup-plugin-node-globals');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/todomvc-app-css'
      ]
    },
    rollup: {
      plugins: [
        resolve({ jsnext: true, module: true, main: true }),
        commonjs(),
        globals(),
        replace({
          'process.env.NODE_ENV': JSON.stringify( 'production' )
        })
      ]
    }
  });

  return app.toTree();
};
