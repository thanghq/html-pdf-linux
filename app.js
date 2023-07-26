const express = require('express');
const pdf = require('html-pdf');
const path = require('path');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', async (req, res) => {
  const html = '<h1> Hello world!! </h1>'
  const genPdf = new Promise((resolve, reject) => {
    pdf
      .create(html, {
        type: 'pdf',
        height: '5.7in', // allowed units: mm, cm, in, px
        width: '4in', // allowed units: mm, cm, in, px
        // "format":"Letter",
        orientation: 'portrait',
        timeout: '360000',
        phantomPath: path.resolve('/usr/local/bin/phantomjs')
      })
      .toBuffer((err, buffer) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(buffer);
        }
      });
  });
  const result = await genPdf;
  res.setHeader('Content-Type', 'application/pdf');
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

