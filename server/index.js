const express = require('express');
const app = express();
const { findImages } = require('../db/index.js');

app.get('/artpics', async (req, res) => {
  const foundImages = await findImages();
  res.send(foundImages);
});


app.listen(3000, () => {
  console.log('Express has started');
});
