const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
  merger.add('./output/1.pdf');
  merger.add('./output/2.pdf');

  await merger.save('./pdf/book2.pdf');
})()
