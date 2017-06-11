(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.menuItemFound = false;

$ctrl.submit = function () {
  console.log($ctrl);
  console.log($ctrl.user.favoritedish);
  $ctrl.favoriteDishExisis = MenuService.getFavoriteDish($ctrl.user.favoritedish);
  console.log($ctrl.favoriteDishExisis);
  // // $ctrl.completed = true;

};



}

})();
