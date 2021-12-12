const path = require("path");
const fs = require("fs");

const OUTPUT_PATH = './output';

const result = fs.readdirSync(OUTPUT_PATH)
  .filter(file => {
    return fs.statSync(path.join(OUTPUT_PATH, file)).isFile()
      && /.*\.pdf$/.test(file)
  })
  .map(fileName => {return path.join(OUTPUT_PATH, fileName)});

console.log(result);
