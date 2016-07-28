module kushame {
    "use strict";

    interface SocialIconScope extends ng.IScope {
        SocialIconName: string;
        Link: string;
        ImgLink: string;
        SetHover: any;
    }

    interface SocialIconAttrs extends ng.IAttributes {
        socialIconName: string;
        link: string;
    }

    class SocialIconDirective implements ng.IDirective {
        public static Factory() {
            return new SocialIconDirective();
        };

        public template = '<a href="{{Link}}"><img ng-src="{{ImgLink}}"\
                            ng-mouseover="SetHover(true)" ng-mouseleave="SetHover(false)" class="socialIcon"/></a>';
        public restrict = 'E';
        public scope = {
            socialIconName: '@',
            link: '@'
        };
        public link: (scope: SocialIconScope, element: ng.IAugmentedJQuery, attrs: SocialIconAttrs) => void;

        constructor() {
            SocialIconDirective.prototype.link = (scope: SocialIconScope, element: ng.IAugmentedJQuery, attrs: SocialIconAttrs) => {
                let ImgLinkPrefix = "./res/img/social/" + attrs.socialIconName;
                scope.ImgLink = ImgLinkPrefix + ".png";
                scope.Link = attrs.link;
                scope.SetHover = function (Hover: boolean) {
                    if (Hover === true){
                        scope.ImgLink = ImgLinkPrefix + "-hover" + ".png";
                    } else {
                        scope.ImgLink = ImgLinkPrefix + ".png";
                    }
                };
            };
        }
    };
    angular.module("app")
        .directive("socialIcon", SocialIconDirective.Factory);
}
