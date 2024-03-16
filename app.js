const tesseract = require('node-tesseract-ocr');
const config = {
    lang: 'eng',
    oem: 1,
    psm: 3
};

const img = "supermarket-receipt-bill-2AD7TYG.jpg"

tesseract.recognize(img, config)
    .then(text => {
        console.log(text)
    })
    .catch(error => {
        console.log(error.message)
    });