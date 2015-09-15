
(function() {
  'use strict';

  angular
    .module('photoTestApp')
    .controller('pictureModalInstanceController', pictureModalInstanceController);

  /** @ngInject */
  function pictureModalInstanceController( $modalInstance, items) {
    var vm = this;

    vm.items = items;
    vm.close=close;
 
    function close(){
      $modalInstance.dismiss('close');
    }
  }
})();
