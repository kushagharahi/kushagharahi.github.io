module kushame {
  "use strict";

  interface ContactControllerScope extends ng.IScope {
    message: string;
    formData: any;
    validation: string;
    messageColor: string;
    formDisabled: boolean;
    submit(validation: string): void;
  }

  class ContactController {
    public static $inject = ["$scope", "$http", "$httpParamSerializerJQLike"];
    constructor(protected $scope: ContactControllerScope, protected $http: ng.IHttpService,
      protected $httpParamSerializerJQLike: ng.IHttpParamSerializer) {
      $scope.message = "";
      $scope.validation = "";
      $scope.formData = {};
      $scope.formDisabled = false;
      $scope.submit = function (validation: string) {
        if (validation.toLowerCase() !== "blue") {
          $scope.messageColor = "errorText";
          $scope.message = "Invalid answer to spam question. Try again.";
        } else {
          let data = $httpParamSerializerJQLike({
            Email: $scope.formData._replyto,
            Message: $scope.formData.body,
            Name: $scope.formData.fName + " " + $scope.formData.lName,
          });

          let config = {
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          };

          $http.post("https://formspree.io/kushagharahi@gmail.com", data, config)
            .success(function (data) {
              $scope.messageColor = "validText";
              $scope.message = "Form submitted. I look forward to connecting with you!";
              $scope.formDisabled = true;
            }).error(function (data) {
              $scope.messageColor = "errorText";
              $scope.message = "There was an error processing the form, please try again \
                                or contact the webmaster @ kushagharahi(dot)gmail.com. Error: ";
              $scope.message += data.error;
            });
        }
      };
    }
  }
  app.controller("ContactController", ContactController);
}
