const wrapper = require('./index.js');
const fs = require('fs');

wrapper(fs.readdir, './node_modules')
   .then((x) => { console.log("Cool", x) })
   .catch(() => { console.error("shit") });