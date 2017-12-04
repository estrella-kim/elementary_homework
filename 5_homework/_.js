/**
 @title : [문제5_1]
 @author : 김지영
 @date : 2017-12-02
 */
module.exports = {
// criteria는 number type이어야 하며, 가장 큰 수의 프로퍼티를 가진 객체를 찾는다.
 /* find : function (array, criteria) {
    var max = array[0];

        for(var i = 0; i < array.length; i++) {
            if( max[criteria] <= array[i][criteria] )
            max = array[i];
        }
        return max;
      }
}*/

 find : function(arr, target) {
    var max = arr[0];

    for( var i = 1; i < arr.length; i++){
        if(max[target] < arr[i][target]) {
            max = arr[i];
        }
    }
    return max;
 }
}