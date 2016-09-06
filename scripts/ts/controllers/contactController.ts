module kushame {
    "use strict";

    interface ContactControllerScope extends ng.IScope {
    }

  class ContactController {
        public static $inject = ["$scope"];
        constructor(protected $scope: ContactControllerScope) {
    }
    
  private submit() {

    }
  }
    app.controller("ContactController", ContactController);
}
