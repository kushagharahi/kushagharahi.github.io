module kushame {
  "use strict";

  interface ContactControllerScope extends ng.IScope {
    validation: string;
    message: string;
    submit: any;
  }

  class ContactController {
    public static $inject = ["$scope"];
    constructor(protected $scope: ContactControllerScope) {
            $scope.validation = "";
      $scope.submit = this.submit();
    }

    private submit() {
      if (this.$scope.validation.toLowerCase() != 'blue') {
        this.$scope.message = 'Invalid answer to spam question. Try again.';
        return false;
      }
      return true;
    }

  }
  app.controller("ContactController", ContactController);
}
