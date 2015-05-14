/* jshint es5:false */
/* jshint ignore:start */
let fs        = require('fs');
let path      = require('path');
let Q         = require('q');
let datapath  = path.join(__dirname, '/../data/');    

async function readDir(path) {
  return Q.nfcall(fs.readdir, datapath);
}

async function readFile(file) {  
  return Q.nfcall(fs.readFile, path.join(datapath, file), 'utf8');    
}

async function read() {
  // read the directory
  let files = await readDir(datapath);  

  // read each file's contents
  let contents = await Q.all(files.map((file) => readFile(file)));

  // construct results object  
  return files.map(function(file, idx) {
    return { file: file, contents: contents[idx] };
  });
}

module.exports = read;