angular.module('filters').filter("dropdownFilter", function($filter) {
    return function(photos, filterOn) {
        var returnArray = [];
        photos.forEach(function(photo) {
            photo[filterOn].forEach(function(item){
                 if(returnArray.indexOf(item) === -1) //add if it is not currently in the list
                      returnArray.push(item);
            })
        })
       return returnArray;
    }
});