(function() {
  'use strict';

  angular
    .module('photoTestApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, $filter) {
    var vm = this;
    vm.onItemClick = onItemClick;

    vm.photos = [];
    vm.locations=[]
    vm.openPhotoSwipe=openPhotoSwipe; 
    vm.selectedItem="People"
    activate();
   

    function onItemClick(item) {
            vm.selectedItem = item;
        }

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      vm.photos = webDevTec.getTec();
    }

    function openPhotoSwipe(index, searchText) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [];
        var photosToShow =  $filter('filter')(vm.photos, searchText);
        photosToShow.forEach(function(photo){
          items.push({src: 'assets/images/'+ photo.imgSrc,
                      w: photo.width,
                      h: photo.height})
        });
        
        // define options (if needed)
        var options = {
            index:index
        };
        
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };


  }
})();
