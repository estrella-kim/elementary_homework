module.exports = function sum(array) {
    var length = array.length;

    return (array[0]+array[length-1])*(length/2);
}
function max() {

}

function min() {

}

function countIf(array, target) {
    var number = 0;

    for( i=0; i < array.length; i++) {
        if( array[i] == target){
            number++;
        }
    }
    return number;
}

function sumIfOver(array, criteria) {
    for( i=0; i < array.length; i++){
        if(array[i] < criteria){
            array.pop();
        }
    }
    return sum(array);
}

function sumIfUnder(array, criteria) {
    for(i = 0; i < array.length; i++){
        if(array[i] > criteria){
            array.pop();
        }
    }
    return sum(array);
}
module.exports = sum;
module.exports = max;
module.exports = min;
module.exports = countIf;
module.exports = sumIfOver;
module.exports = sumIfUnder;
