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
