/**
@title : [문제4_1] 배열을 인자로 받아 합을 반환하는 sum함수만들기
@author : 김지영
@date : 2017-11-24
*/

function sum (array) {
  var addedNum = 0;
  for (i = 0; i < array.length; i++) {
      var num = array[i];
      var addedNum = addedNum + num;
  }
  return addedNum;
}

var array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array.length); //10
console.log(sum(array)); //55

var array2 = [ 22, 4, 56, 0];

console.log(array2.length);
console.log(sum(array2)); //55
