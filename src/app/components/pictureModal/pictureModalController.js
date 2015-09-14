
  angular
    .module('photoTestApp')
    .controller('pictureModalController', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (photo) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'app/components/pictureModal/pictureModal.html',
      controller: 'pictureModalInstanceController',
      resolve: {
        items: function () {
          return photo;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});