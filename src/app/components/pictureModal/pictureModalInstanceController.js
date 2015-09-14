
  angular
    .module('photoTestApp')
.controller('pictureModalInstanceController', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

   $scope.close = function close(){
            $modalInstance.dismiss('close');
        }
});