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


/**
* @title : [문제4_2] 2, 3개의 숫자를 인자로 받아 가장 큰 숫자를 반환하는 max함수 만들기
* @author : 김지영
* @date : 2017-11-24
*/

function max (num1, num2, num3) {
  var maxNum = num1;
  if (maxNum < num2) {
    maxNum = num2;
  }
  if (maxNum > num3) {
    return maxNum;
  }
  maxNum = num3;

  return maxNum;
}

console.log(max(1, 5, 4)); //5
console.log(max(4, 2, 7)); //7
console.log(max(5, 1, 5)); //5


/**
* @title : [문제4_3] 숫자로 이루어진 배열 하나를 인자로 받아 가장 큰 숫자를 반환하는 max함수 만들기
* @author : 김지영
* @date : 2017-11-24
*/

function max (array) {
  var maxNum = array[0];
  for(i = 0; i < array.length; ++i) {
    if(maxNum < array[i]) {
      maxNum = array[i];
    }
  }
  return maxNum;
}

console.log(max([1, 5, 8, 3, 4])); //8
console.log(max([4, 2, 2, 4, 1])); //4

var lists = [100, 74, 1, 800];
console.log(max(lists));
