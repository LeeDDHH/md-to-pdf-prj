const fs = require("fs");
const path = require("path");
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const pdfpath = path.join('./pdf/book.pdf');
const outputpath = path.join('./pdf/output.pdf');

(async () => {
  const content = await PDFDocument.load(fs.readFileSync(pdfpath));
  const pages = await content.getPages();
  for (const [i, page] of Object.entries(pages)) {
    page.drawText(`${+i + 1}`, {
      x: page.getWidth() / 2,
      y: 10,
      size: 15,
      color: rgb(0, 0, 0)
    });
  }
  fs.writeFileSync(outputpath, await content.save());

})()
