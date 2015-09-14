(function() {
  'use strict';

  angular
    .module('photoTestApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;

    vm.photos = [];
    vm.locations=[]
    // vm.filterSearch = filterSearch();

      activate();

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      vm.photos = webDevTec.getTec();
    }



    function filterSearch(photos){


    }
  }
})();
