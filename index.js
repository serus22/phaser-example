'use strict';

const port = 8080;
const path = require('path');
const Express = require('express');
const livereload = require('livereload');
const opn = require('opn');

let app = new Express();

livereload
  .createServer()
  .watch(__dirname + '/game');

app.get('/', (req, res) => {
    res.redirect(`http://localhost:${port}/index.html`);
  })
  .use('/index.html', Express.static(__dirname + '/game/index.html'))
  .use('/game',   Express.static(path.join(__dirname + '/game')))
  .use('/assets', Express.static(path.join(__dirname + '/assets')))
  .use('/phaser', Express.static(path.join(__dirname + '/node_modules/phaser/build')))
  .use('/jquery', Express.static(path.join(__dirname + '/node_modules/jquery/dist')))
  .use('/bootstrap', Express.static(path.join(__dirname + '/node_modules/bootstrap/dist')))
  .use('/tether', Express.static(path.join(__dirname + '/node_modules/tether/dist')))
  .listen(port, () => {
    console.log(`Game server running on http://localhost:${port}`);
    opn(`http://localhost:${port}`);
  });



