angular.module('filters').filter("locationFilter", function() {
    return function(array, propertyName) {
        var result = "";
        for (var i = 0 ; i < array.length ; i++) {
            if (propertyName) {
                result = result + array[i][propertyName];
            } else {
                result = result + array[i];
            }
            if (i < array.length - 1) {
                result += ", ";
            }
        }
        return result;
    }
});