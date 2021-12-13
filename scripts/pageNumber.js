const fs = require("fs");
const path = require("path");
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const CONST = require('./const');

const bookPdfPath = path.join(CONST.BOOK_PDF_PATH);
const outputPdfPath = path.join(CONST.OUTPUT_PDF_PATH);

(async () => {
  const content = await PDFDocument.load(fs.readFileSync(bookPdfPath));
  const pages = await content.getPages();
  for (const [i, page] of Object.entries(pages)) {
    page.drawText(`${+i + 1}`, {
      x: page.getWidth() / 2,
      y: 10,
      size: 15,
      color: rgb(0, 0, 0)
    });
  }
  fs.writeFileSync(outputPdfPath, await content.save());

})()
