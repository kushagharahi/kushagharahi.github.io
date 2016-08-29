module kushame {
    "use strict";

    interface MainControllerScope {
        resumeUrl: string;
    }

    class MainController {
        public static $inject = ["$scope", "$sce"];
        constructor($scope: MainControllerScope, $sce: ng.ISCEService) {
            let resumeUrl = "https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true";
            $scope.resumeUrl =
                $sce.trustAsResourceUrl(resumeUrl);
        }
    }
    app.controller("MainController", MainController);
}
