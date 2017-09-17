# phaser-example

example phaser project build based on nodejs 

file struct:
- assets/       static assets like images, sprites, meshes, background, etc.
- game/         game functionality
  - index.html  must exists 
- index.js      server runscript

usage: 
$npm install 
and:
$node index.js
or:
$npm start
and:
open http://localhost:8080 in browser

script starts nodejs server on port 8080
with included: 
  - jquery
  - bootstrap 4
  - phaser
  
server watching file changes in game folder and reload page after each change 
