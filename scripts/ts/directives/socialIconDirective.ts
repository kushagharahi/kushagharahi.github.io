module kushame {
    "use strict";

  interface SocialIconScope extends ng.IScope {
     SocialIconName: string;
     Link: string;
     ImgLink: string;
     Hover: string;
    }

    interface SocialIconAttrs extends ng.IAttributes {
        SocialIconName: string;
        Link: string;
    }

  class socialIconDirective implements ng.IDirective  {
    public template: '<a href="{{Link}}"><img ng-src="{{ImgLink}}"\
     ng-mouseover="Hover=true" ng-mouseleave="Hover=false" class="socialIcon"/></a>';
    public restrict: 'E';
    public scope: {
        SocialIconName: '@SocialIconName',
        Link: '@Link'
    };
    public link(scope: SocialIconScope, element: ng.IAugmentedJQuery, attrs: SocialIconAttrs): void {
        let ImgLinkPrefix = "./img/social/" + attrs.SocialIconName;
        scope.ImgLink = ImgLinkPrefix;
        scope.Link = attrs.Link;
        scope.$watch(scope.Hover, function () {
            if (scope.Hover === "true") {
                scope.ImgLink = ImgLinkPrefix + "-Hover";
            } else {
                scope.ImgLink = ImgLinkPrefix;
            }
        });
    };


    public static instance(): ng.IDirective {
        return new socialIconDirective();
    };
}

    app.directive("socialIconDirective", socialIconDirective.instance);
}
