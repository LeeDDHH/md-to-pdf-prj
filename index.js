const path = require("path");
const fs = require("fs");
const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const OUTPUT_PATH = './output';
const RESULT_PDF_PATH = './pdf/book.pdf';

const outputPdfs = fs.readdirSync(OUTPUT_PATH)
  .filter(file => {
    return fs.statSync(path.join(OUTPUT_PATH, file)).isFile()
      && /.*\.pdf$/.test(file)
  })
  .map(fileName => {
    return path.join(OUTPUT_PATH, fileName)
  });

const mergerAdd = () => {
  outputPdfs.map(filePath => { merger.add(filePath) });
};

(async () => {
  mergerAdd();

  await merger.save(RESULT_PDF_PATH);
})()
