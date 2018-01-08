var randomNum = require('./randomNum');

module.exports= function randomColor (a, b) {
    var randomColor = 'rgb('+ randomNum(a, b) +',' + randomNum(a, b) +','+ randomNum(a, b) +')';
    return randomColor;
}
