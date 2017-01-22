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
                templateUrl: "views/resume.html",
            })
            .when("/projects", <IRouteName>{
                controller: "ProjectsController",
                routeName: "Projects",
                templateUrl: "views/projects.html",
            })
            .when("/contact", <IRouteName>{
                controller: "ContactController",
                routeName: "Contact",
                templateUrl: "views/contact.html",
            })
            .otherwise({
                    redirectTo: "/",
                });
          $locationProvider.html5Mode(true);
    }
    
    routes.$inject = ["$routeProvider", "$locationProvider"];

    app.config(routes);
}
