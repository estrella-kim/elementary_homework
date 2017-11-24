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
