const path = require("path");
const fs = require("fs");
const PDFMerger = require('pdf-merger-js');
const CONST = require('./const');

const pdfPath = path.join(CONST.PDF_PATH);
const coveredPdfPath = path.join(CONST.COVERED_PDF_PATH);

var merger = new PDFMerger();

const outputPdfs = fs.readdirSync(pdfPath)
  .filter(file => {
    return fs.statSync(path.join(pdfPath, file)).isFile()
      && /.*\.pdf$/.test(file)
  })
  .map(fileName => {
    return path.join(pdfPath, fileName)
  });

const mergerAdd = () => {
  outputPdfs.map(filePath => { merger.add(filePath) });
};

(async () => {
  mergerAdd();

  await merger.save(coveredPdfPath);
})()
