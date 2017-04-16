const routes = require('express').Router();
const path = require('path');

routes.get('/', (req, res) => {
  res.send('index.html');
});

routes.get('/hero-panorama-image', (req, res) => {
  res.sendFile('360_0130_Stitch_YHC_scaledown.JPG');
});

routes.get('/test', (req, res) => {
  res.send('it works');
});

module.exports = routes;
