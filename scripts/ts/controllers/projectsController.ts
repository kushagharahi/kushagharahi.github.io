module kushame {
    "use strict";

    interface ProjectScope extends ng.IScope {
        projects: any;
        errMessage: any;
    }

    class ProjectsController {
        public static $inject = ["$scope", "$http", "$location"];
        constructor($scope: ProjectScope, $http: ng.IHttpService, $location: ng.ILocationService) {
            //let webRoot = $location.
            $http.get("/models/projects.json").then(
                (data) => {
                    $scope.projects = data.data;
                },
                (err) => {
                    $scope.errMessage = err;
                });
        }

    }
    app.controller("ProjectsController", ProjectsController);
}
