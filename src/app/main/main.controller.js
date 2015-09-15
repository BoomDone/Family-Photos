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
    // vm.openPhotoSwipe=openPhotoSwipe; TODO: add in photoswipe to view larger images

      activate();

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      vm.photos = webDevTec.getTec();
    }

// function openPhotoSwipe() {
//     var pswpElement = document.querySelectorAll('.pswp')[0];

//     // build items array
//     var items = [];
//     vm.photos.forEach(function(photo){
//       items.push({src: 'assets/images/'+ photo.imgSrc,
//                   w: photo.width,
//                   h: photo.height})
//     });
    
//     // define options (if needed)
//     var options = {
        
//     };
    
//     var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
//     gallery.init();
// };


  }
})();
