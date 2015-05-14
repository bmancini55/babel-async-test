/* jshint es5:false */
/* jshint ignore:start */
let fs        = require('fs');
let path      = require('path');
let Q         = require('q');
let datapath  = path.join(__dirname, '/../data/');    

function readDir(path) {  
  return Q.nfcall(fs.readdir, datapath);
}

function readFile(file) {  
  return Q.nfcall(fs.readFile, path.join(datapath, file), 'utf8');
}

function read() {  
  // read the directory
  return readDir(path).then(function(files) {
    
    // start reading file contents
    let promises = files.map((file) => readFile(file));        

    // wait for file contents
    return Q.all(promises)        

    // then create results object
    .then(function(contents) {          
      return files.map(function(file, idx) {
        return { file: file, contents: contents[idx] };
      });
    });
  });
}

module.exports = read;