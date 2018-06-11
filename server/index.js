const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const { saveImages, findImages } = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/savepics', async (req, res) => {
	console.log('CHEK it before you req it', req.body);
	try {
		const title = req.body.title;
	  const url = req.body.url;
	  const caption = req.body.caption;
	  const savedImages = await saveImages(title, url, caption);
	  if (savedImages === 'Success') {
	    res.sendStatus(201);
	  } else {
	  	res.sendStatus(400);
	  }
	}
	catch(error) {
	  console.error(error);
	}
})

app.get('/artpics', async (req, res) => {
  const foundImages = await findImages();
  res.send(foundImages);
});

app.listen(3000, () => {
  console.log('Express has started');
});
