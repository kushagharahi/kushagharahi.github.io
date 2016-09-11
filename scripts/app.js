var kushame;
(function (kushame) {
    "use strict";
    kushame.app = angular.module("app", ["ngRoute"]);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    function routes($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
            controller: "MainController",
            routeName: "Home",
            templateUrl: "views/home.html",
        })
            .when("/resume", {
            controller: "MainController",
            routeName: "Resume",
            templateUrl: "views/resume.html",
        })
            .when("/projects", {
            controller: "ProjectsController",
            routeName: "Projects",
            templateUrl: "views/projects.html",
        })
            .when("/contact", {
            controller: "ContactController",
            routeName: "Contact",
            templateUrl: "views/contact.html",
        })
            .otherwise({
            redirectTo: "/",
        });
    }
    routes.$inject = ["$routeProvider"];
    kushame.app.config(routes);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    var ContactController = (function () {
        function ContactController($scope, $http, $httpParamSerializerJQLike) {
            this.$scope = $scope;
            this.$http = $http;
            this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
            $scope.message = "";
            $scope.validation = "";
            $scope.formData = {};
            $scope.formDisabled = false;
            $scope.submit = function (validation) {
                if (validation.toLowerCase() !== "blue") {
                    $scope.messageColor = "errorText";
                    $scope.message = "Invalid answer to spam question. Try again.";
                }
                else {
                    var data = $httpParamSerializerJQLike({
                        Email: $scope.formData._replyto,
                        Message: $scope.formData.body,
                        Name: $scope.formData.fName + " " + $scope.formData.lName,
                    });
                    var config = {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    };
                    $http.post("https://formspree.io/kushagharahi@gmail.com", data, config)
                        .success(function (data) {
                        $scope.messageColor = "validText";
                        $scope.message = "Form submitted. I look forward to connecting with you!";
                        $scope.formDisabled = true;
                    }).error(function (data) {
                        $scope.messageColor = "errorText";
                        $scope.message = "There was an error processing the form, please try again \
                                or contact the webmaster @ kushagharahi(dot)gmail.com. Error: ";
                        $scope.message += data.error;
                    });
                }
            };
        }
        ContactController.$inject = ["$scope", "$http", "$httpParamSerializerJQLike"];
        return ContactController;
    }());
    kushame.app.controller("ContactController", ContactController);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    var HomeController = (function () {
        function HomeController($scope, $route, $location) {
            this.$scope = $scope;
            this.$route = $route;
            this.$location = $location;
            $scope.mobileMenu = false;
            $scope.pageTitle = $route.routes[$location.url()].routeName;
            $scope.$watch(function () { return $location.url(); }, function () {
                $scope.pageTitle = $route.routes[$location.url()].routeName;
                if ($scope.mobileMenu) {
                    $scope.mobileMenu = !$scope.mobileMenu;
                }
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
            var resumeUrl = "https://docs.google.com/document/d/1vnGrGLXtvXVZ9E_Ih02o7cxjp1oxX_wi3Vg2n-m7aXs/pub?embedded=true";
            $scope.resumeUrl =
                $sce.trustAsResourceUrl(resumeUrl);
        }
        MainController.$inject = ["$scope", "$sce"];
        return MainController;
    }());
    kushame.app.controller("MainController", MainController);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    var ProjectsController = (function () {
        function ProjectsController($scope, $http, $location) {
            $http.get("/models/projects.json").then(function (data) {
                $scope.projects = data.data;
            }, function (err) {
                $scope.errMessage = err;
            });
        }
        ProjectsController.$inject = ["$scope", "$http", "$location"];
        return ProjectsController;
    }());
    kushame.app.controller("ProjectsController", ProjectsController);
})(kushame || (kushame = {}));
var kushame;
(function (kushame) {
    "use strict";
    var SocialIconDirective = (function () {
        function SocialIconDirective() {
            this.template = '<a href="{{Link}}" target="_blank" rel="noopener"><img ng-src="{{ImgLink}}"\
                            ng-mouseover="SetHover(true)" ng-mouseleave="SetHover(false)" class="socialIcon"/></a>';
            this.restrict = 'E';
            this.scope = {
                socialIconName: '@',
                link: '@'
            };
            SocialIconDirective.prototype.link = function (scope, element, attrs) {
                var ImgLinkPrefix = "./res/img/social/" + attrs.socialIconName;
                scope.ImgLink = ImgLinkPrefix + ".png";
                scope.Link = attrs.link;
                scope.SetHover = function (Hover) {
                    if (Hover === true) {
                        scope.ImgLink = ImgLinkPrefix + "-hover" + ".png";
                    }
                    else {
                        scope.ImgLink = ImgLinkPrefix + ".png";
                    }
                };
            };
        }
        SocialIconDirective.Factory = function () {
            return new SocialIconDirective();
        };
        ;
        return SocialIconDirective;
    }());
    ;
    angular.module("app")
        .directive("socialIcon", SocialIconDirective.Factory);
})(kushame || (kushame = {}));
