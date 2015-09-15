angular.module('filters').filter("join", function() {
   return function(array) {
        var result = "";
        for (var i = 0 ; i < array.length ; i++) {
            result = result + array[i];

            if (i < array.length - 1) {
                result += ", ";
            }
        }
        return result;
    }
});