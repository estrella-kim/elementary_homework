/**
 @title : [문제5_1 test]
 @author : 김지영
 @date : 2017-12-02
 */
var _ = require('./_');

describe('객체 테스트', function() {
  var target = [
    {name: '김수호', age: 33, money: 5000},
    {name: '김태희', age: 40, money: 2000},
    {name: '송혜교', age: 45, money: 3500}
  ];
  var target2 = [
    {food: '라면', price: 3000},
    {food: '떡볶이', price: 3500},
    {food: '김밥', price: 2000}
  ];
  test('가장 나이가 많은 사람을 찾을 수 있다', function() {
    expect(_.find(target, 'age')).toEqual(target[2]);
    expect(_.find(target, 'age')).not.toEqual(target[1]);
  });
  test('가장 돈이 많은 사람을 찾을 수 있다', function() {
    expect(_.find(target, 'money')).toEqual(target[0]);
    expect(_.find(target, 'money')).not.toEqual(target[2]);
  });
  test('가장 비싼 가격의 음식을 찾을 수 있다', function() {
      expect(_.find(target2, 'price')).toEqual(target2[1]);
      expect(_.find(target2, 'price')).not.toEqual(target2[2]);
  });
});