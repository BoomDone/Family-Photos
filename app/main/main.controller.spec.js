(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    
    beforeEach(module('photoTestApp'));
    beforeEach(inject(function(_$controller_, _webDevTec_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('MainController');
    }));

    it('should define 5 photos', function() {
      expect(angular.isArray(vm.photos)).toBeTruthy();
      expect(vm.photos.length === 5).toBeTruthy();
    });
  });
})();
