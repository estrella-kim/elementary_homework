var _ = require('./_');

describe('객체 테스트', function() {
  var target = [
    {name: '김수호', age: 33, money: 5000},
    {name: '김태희', age: 40, money: 2000},
    {name: '송혜교', age: 45, money: 3500}
  ];
  test('가장 나이가 많은 사람을 찾을 수 있다', function() {
    expect(_.find(target, 'age')).toEqual(target[2]);
    expect(_.find(target, 'age')).not.toEqual(target[1]);
  });
  test('가장 돈이 많은 사람을 찾을 수 있다', function() {
    expect(_.find(target, 'money')).toEqual(target[0]);
    expect(_.find(target, 'money')).not.toEqual(target[2]);
  })
});