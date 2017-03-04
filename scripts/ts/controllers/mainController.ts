module kushame {
    "use strict";

    interface MainControllerScope {
        resumeUrl: string;
    }

    class MainController {
        public static $inject = ["$scope", "$sce"];
        constructor($scope: MainControllerScope, $sce: ng.ISCEService) {
            let resumeUrl = "https://docs.google.com/document/preview?authuser=0&amp;hgd=1&amp;id=1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/";
            $scope.resumeUrl =
                $sce.trustAsResourceUrl(resumeUrl);
        }
    }
    app.controller("MainController", MainController);
}
