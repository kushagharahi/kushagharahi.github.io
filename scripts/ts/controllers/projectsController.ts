module kushame {
    "use strict";

    class ProjectController {
        public static $inject = ["$scope", "$sce"];
        constructor($scope: ng.IScope, $sce: ng.ISCEService) {
    }
    }
    app.controller("ProjectController", ProjectController);
}
