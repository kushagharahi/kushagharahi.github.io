module kushame {
    "use strict";

    function routes($routeProvider: ng.route.IRouteProvider) {

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

    app.config(routes);
}
