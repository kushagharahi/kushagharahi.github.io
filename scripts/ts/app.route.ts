module kushame {
    "use strict";

    export interface IRouteName extends ng.route.IRoute {
    routeName: string;
}

    function routes($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
        $routeProvider
            .when("/", <IRouteName>{
                controller: "MainController",
                routeName: "Home",
                templateUrl: "views/home.html",
            })
            .when("/resume", <IRouteName>{
                controller: "MainController",
                routeName: "Resume",
                templateUrl: "../views/resume.html",
            }).
                otherwise({
                    redirectTo: "/",
                });
    }

    routes.$inject = ["$routeProvider"];

    app.config(routes);
}
