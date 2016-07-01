module kushame {
    "use strict";

    export interface Scope {
        helloWorld: string;
        resumeUrl: string;
    }

    export class MainController {
        public static $inject = ["$scope", "$sce"];
        constructor($scope: Scope, $sce: ng.ISCEService) {
          $scope.helloWorld = "NG1 + TypeScript";
          $scope.resumeUrl =
            $sce.trustAsResourceUrl("https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true");
        }
    }
    app.controller("MainController", MainController);
}
