var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var flickity = require('./flickity.pkgd');

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});