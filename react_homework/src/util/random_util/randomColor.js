var randomNum = require('./randomNum');

module.exports= function randomColor () {
    var randomColor = 'rgb('+ randomNum(0, 255) +',' + randomNum(0, 255) +','+ randomNum(0, 255) +')';
    return randomColor;
}
