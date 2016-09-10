module kushame {
  "use strict";

  interface ContactControllerScope extends ng.IScope {
    validation: string;
    message: string;
    submit(): void;
  }

  class ContactController {
    public static $inject = ["$scope"];
    constructor(protected $scope: ContactControllerScope) {
      $scope.validation = "";
      $scope.message = "";
      $scope.submit = function () {
        this.sendForm();
      }
    }

    public sendForm(): void {
      if (this.$scope.validation.toLowerCase() != 'blue') {
        this.$scope.message = 'Invalid answer to spam question. Try again.';
      }
    }

  }
  app.controller("ContactController", ContactController);
}
