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
        });
    }
    routes.$inject = ["$routeProvider"];
    kushame.app.config(routes);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    var MainController = (function () {
        function MainController($scope) {
            $scope.helloWorld = "NG1 + TypeScript";
        }
        MainController.$inject = ["$scope"];
        return MainController;
    }());
    kushame.MainController = MainController;
    kushame.app.controller("MainController", MainController);
})(kushame || (kushame = {}));
//# sourceMappingURL=app.js.map