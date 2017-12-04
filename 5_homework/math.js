/**
 @title : [문제5_2]
 @author : 김지영
 @date : 2017-12-02
 */
module.exports = {
    sum : function(numbers){
        array = numbers instanceof Array ? numbers : arguments;
        var sum = array[0];
        for(var i = 1; i < array.length; i++ ) {
            sum += array[i];
         }
        return sum;
    },
    max : function(numbers){
        var array = numbers instanceof Array ? numbers : arguments;
        var max = array[0];

        for(var i= 1; i < array.length; i++) {
            if (max <= array[i]) {
                max = array[i];
            }
        }
        return max;
    },
    min : function(numbers){
        var array = numbers instanceof Array ? numbers : arguments;
        var min = array[0];

        for(var i= 1; i < array.length; i++) {
            if(min >= array[i]){
                min = array[i];
            }
        }
        return min;
    },
    countIf : function(arr, target) {
        //function(arr: array, target: string)
        //타입스크릡트를 다룰 때 array인지 string인지 명시하는 게 중요하다.
        var number = 0;

        for(var i=0; i < arr.length; i++) {
            if( arr[i] == target){
                number++;
            }
        }
        return number;
    },
    sumIfOver : function (arr, criteria) {
        var total = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] >= criteria){
                total += arr[i];
            }
        }
        return total;
        // var newArray = arr.slice();
        //
        // for(var i = 0; i < newArray.length; i++ ) {
        //     newArray[i] = newArray[i] < criteria ? 0 : newArray[i];
        // }
        // return this.sum(newArray);
    },
    sumIfUnder : function(numbers, criteria) {
        var criteria = 0;
        for(var i = 0;  i++; )
    }
}