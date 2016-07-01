var kushame;
(function (kushame) {
    "use strict";
    kushame.app = angular.module("app", ["ngMaterial", "ngRoute"]);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when("/", {
            controller: "MainController",
            templateUrl: "views/home.html",
        })
            .when("/resume", {
            controller: "MainController",
            templateUrl: "../views/resume.html",
        });
    }
    routes.$inject = ["$routeProvider"];
    kushame.app.config(routes);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    var MainController = (function () {
        function MainController($scope, $sce) {
            $scope.helloWorld = "NG1 + TypeScript";
            $scope.resumeUrl =
                $sce.trustAsResourceUrl("https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true");
        }
        MainController.$inject = ["$scope", "$sce"];
        return MainController;
    }());
    kushame.MainController = MainController;
    kushame.app.controller("MainController", MainController);
})(kushame || (kushame = {}));
//# sourceMappingURL=app.js.map