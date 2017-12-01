var math = require('./math');

test('주어진 숫자의 총합을 구할 수 있다', function() {
  expect(math.sum([1,2,3,4,5,6,7,8,9,10])).toBe(55);
  expect(math.sum([2,3,4,5,6,7,8,9,10])).toBe(54);
  expect(math.sum([1,2,3,4])).toBe(10);
  expect(math.sum([1,2,3,4])).not.toBe(8);
});

test('주어진 숫자에서 최소값을 구할 수 있다', function() {
  expect(math.min(10, 30, 20, 15)).toBe(10);
  expect(math.min([10, -2, 20, 1])).toBe(-2);
  expect(math.min([15, 30, 0, 11, 54])).toBe(0);
});

test('주어진 숫자에서 최대값을 구할 수 있다', function() {
  expect(math.max(1, 5, 4)).toBe(5);
  expect(math.max(4, 2, 7)).toBe(7);
  expect(math.max([1, 5, 8, 3, 4])).toBe(8);
  expect(math.max([4, 2, 2, 4, 1])).toBe(4);
  expect(math.max([-5, -2])).toBe(-2);
});

test('주어진 대상의 개수를 반환한다', function() {
  var target = ['남','여','남','여','여','여','남','여'];
  expect(math.countIf(target, '남')).toBe(3);
  expect(math.countIf(target, '여')).toBe(5);
});

describe('특정 범위 계산', function() {
  var target = [3,9,33,55,12];

  test('주어진 대상 이상의 합계를 계산 할 수 있다', function() {
    expect(math.sumIfOver(target, 10)).toBe(100);
    expect(math.sumIfOver(target, 30)).toBe(88);
  });
  test('주어진 대상 이하의 합계를 계산 할 수 있다', function() {
    expect(math.sumIfUnder(target, 30)).toBe(24);
    expect(math.sumIfUnder(target, 33)).toBe(57);
  });
});

