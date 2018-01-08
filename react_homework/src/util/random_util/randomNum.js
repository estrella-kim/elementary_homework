// a 와 같거나 큰 수 부터 b보다 같거나 작은 수 사이의 랜덤한 정수를 구한다.
module.exports = function extractRandomNumber (a,b) {
    let randomInterger =  Math.floor(Math.random() * (b - a + 1)) + a;
    return randomInterger;
}
