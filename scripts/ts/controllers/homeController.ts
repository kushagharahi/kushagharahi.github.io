module kushame {
    "use strict";

    interface HomeControllerScope extends ng.IScope {
        pageTitle: any;
        isActive: any;
        mobileMenu: boolean;
    }

  class HomeController {
        public static $inject = ["$scope", "$route", "$location"];
        constructor(protected $scope: HomeControllerScope, private $route: ng.route.IRouteService,
        private $location: ng.ILocationService) {
            $scope.mobileMenu = false;
            $scope.pageTitle = $route.routes[$location.url()].routeName;
            $scope.$watch(() => $location.url(), () => {
                    $scope.pageTitle = $route.routes[$location.url()].routeName + " - Kusha.me";
                    if ($scope.mobileMenu) {
                        $scope.mobileMenu = !$scope.mobileMenu;
                    }
                });

            $scope.isActive = function (path: string) {
                return path === $location.url();
            };
    }
  }
    app.controller("HomeController", HomeController);
}
