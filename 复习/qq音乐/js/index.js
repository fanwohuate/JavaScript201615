// 计算main的高度
var $musicBox = $('.musicBox');
var $header = $musicBox.find('.header');
var header = document.getElementsByClassName('header')[0]; // dom
// header.offsetHeight
var $footer = $musicBox.find('.footer');
var $main = $musicBox.find('.main');
var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
var mainHeight = winHeight - $header.get(0)/*dom*/.offsetHeight - $footer[0].offsetHeight - 0.8*htmlFontSize;
$main.css('height',mainHeight);
//
