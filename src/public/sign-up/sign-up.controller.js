(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var $ctrl = this;
    $ctrl.menuItemFound = false;
    $ctrl.submitsucess = false;

    $ctrl.submit = function () {
      MenuService.getFavoriteDish($ctrl.user.favoritedish).then(function success(response) {
        $ctrl.submitsucess = true;
        $ctrl.menuItemFound = true;
        $ctrl.user.favoritedishitem = response;
        UserService.setUser($ctrl.user)
      }, function error( response) {
        $ctrl.submitsucess = true;
        $ctrl.menuItemFound = false;
      }
    );

  };



}

})();
