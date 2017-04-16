const routes = require('express').Router();
const path = require('path');

routes.get('/', (req, res) => {
  res.send('index.html');
});

routes.get('/hero-panorama-image', (req, res) => {
  res.sendFile(path.resolve('static/images/360_0130_Stitch_YHC_scaledown.JPG'));
});

routes.get('/test', (req, res) => {
  res.sendFile(path.resolve('static/images/hero-panorama_scaledown.JPG'));
});

module.exports = routes;
