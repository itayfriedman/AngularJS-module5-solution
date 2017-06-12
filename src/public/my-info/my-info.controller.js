(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService'];
  function MyInfoController(UserService) {
    var user = UserService.getUser ();
    console.log(user);
    


  }


})();
