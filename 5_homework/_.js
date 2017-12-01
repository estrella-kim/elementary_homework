module.exports = {
  find : function (array, criteria) {
    var max = array[0];

    for(i = 0; i < array.length; i++) {
        if( max[criteria] > array[i][criteria]){
            return max;
        }
        max = array[i];
    }
    return max;
  }
}