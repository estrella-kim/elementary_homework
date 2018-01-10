import randomNum from './randomNum';
export default function randomColor () {
    var randomColor = 'rgb('+ randomNum(0, 255) +',' + randomNum(0, 255) +','+ randomNum(0, 255) +')';
    return randomColor;
}
