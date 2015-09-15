angular.module('filters').filter("locationFilter", function($filter) {
    return function(array, propertyName, searchText) {
        var returnArray = [];
        if(typeof searchText !== 'undefined' && searchText.length >0){
            for (var i = 0 ; i < array.length ; i++) {
                if(propertyName.toLowerCase() === 'people' && ($filter('filter')(array[i][propertyName.toLowerCase()],searchText)).length > 0){
                    returnArray.push(array[i]);
                }
                else if(propertyName.toLowerCase() !== 'people' && ((array[i][propertyName.toLowerCase()]).toLowerCase()).indexOf(searchText.toLowerCase()) !== -1){
                    returnArray.push(array[i]);

                }
            }
            return returnArray
        }
        return array;
    }
});