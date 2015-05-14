
// Per http://babeljs.io/docs/usage/require/
// We need to add this dependency to get polyfills for generators for use with Async
require('babel/register');

// Load our actual test file
let promiseTest = require('./promise');
let asyncTest   = require('./async');

// Do it promise based
promiseTest().then(
  function(results) {
    console.log('Promise based:');
    console.log(results);
  },
  function(err) {
    console.log(err);
  }
);


asyncTest().then(
  function(results) {
    console.log('Async based:');
    console.log(results);
  }, 
  function(err) {
    console.log(err);
  }
);

