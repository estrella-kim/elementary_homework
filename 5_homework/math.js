module.exports = {
    sum : function(array){
        var sum = 0;
        for(i = 0; i < array.length; i++ ) {
            sum += array[i];
        }
        return sum;
    },
    max : function(args){
        var max = args[0];
        if(typeof args[0] == array){
            var array = args[0];
            var max = array[0];
        }
        for(i= 0; i < args[i]; i++){
        }

    },
    min : function(){
    },
    countIf : function(array, target){
        var number = 0;

        for( i=0; i < array.length; i++) {
            if( array[i] == target){
                number++;
            }
        }
        return number;
    },
    sumIfOver : function (array, criteria) {
        var newArray = array.slice();
        for( i = 0; i < newArray.length; i++ ) {
            if( newArray[i] < criteria ) {
                newArray[i] = null;
            }
        }
        return this.sum(newArray);
    },
    sumIfUnder : function(array, criteria) {
        var newArray = array.slice();
        for(i = 0; i < newArray.length; i++){
            if(newArray[i] > criteria){
                newArray[i] = null;
            }
        }
        return this.sum(newArray);
    }
}