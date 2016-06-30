module kushame {
    "use strict";

    export interface Scope {
        helloWorld: string;
    }

    export class MainController {
        static $inject = ["$scope"];
        constructor($scope: Scope) {
          $scope.helloWorld = "NG1 + TypeScript";
        }
    }
    app.controller("MainController", MainController);
}
