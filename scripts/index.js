const path = require("path");
const fs = require("fs");
const PDFMerger = require('pdf-merger-js');
const CONST = require('./const');

const outputPath = path.join(CONST.OUTPUT_PATH);
const bookOutputpath = path.join(CONST.BOOK_PDF_PATH);

var merger = new PDFMerger();

const outputPdfs = fs.readdirSync(outputPath)
  .filter(file => {
    return fs.statSync(path.join(outputPath, file)).isFile()
      && /.*\.pdf$/.test(file)
  })
  .map(fileName => {
    return path.join(outputPath, fileName)
  });

const mergerAdd = () => {
  outputPdfs.map(filePath => { merger.add(filePath) });
};

(async () => {
  mergerAdd();

  await merger.save(bookOutputpath);
})()
