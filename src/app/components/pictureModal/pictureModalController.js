(function() {
  'use strict';

  angular
    .module('photoTestApp')
    .controller('pictureModalController', pictureModalController);

  /** @ngInject */
  function pictureModalController($scope, $modal, $log) {
  
  $scope.animationsEnabled = true;

  $scope.open = function (photo) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'app/components/pictureModal/pictureModal.html',
      controller: 'pictureModalInstanceController as vm',
      size:'lg',
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

  }
})();
