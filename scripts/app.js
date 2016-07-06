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
            routeName: "Home",
            templateUrl: "views/home.html",
        })
            .when("/resume", {
            controller: "MainController",
            routeName: "Resume",
            templateUrl: "../views/resume.html",
        }).
            otherwise({
            redirectTo: "/",
        });
    }
    routes.$inject = ["$routeProvider"];
    kushame.app.config(routes);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    var HomeController = (function () {
        function HomeController($scope, $route, $location) {
            this.$scope = $scope;
            this.$route = $route;
            this.$location = $location;
            $scope.pageTitle = $route.routes[$location.url()].routeName;
            $scope.$watch(function () { return $location.url(); }, function () {
                $scope.pageTitle = $route.routes[$location.url()].routeName;
            });
            $scope.isActive = function (path) {
                return path === $location.url();
            };
        }
        HomeController.$inject = ["$scope", "$route", "$location"];
        return HomeController;
    }());
    kushame.app.controller("HomeController", HomeController);
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
    kushame.app.controller("MainController", MainController);
})(kushame || (kushame = {}));
//# sourceMappingURL=app.js.map