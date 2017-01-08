(function() {
    'use strict';

    var app = angular.module('store-products', [])

    // Element directive
    app.directive('productTitle', function() {
        // This is the directive definition object
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    // // Attribute directive
    // app.directive('productTitle', function(){
    //   // This is the directive definition object
    //   return{
    //     restrict: 'A',
    //     templateUrl: 'product-title.html'
    //   };
    // });

    app.directive('productPanels', function() {

        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function() {
                this.tab = 1;

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });

    app.directive("productSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "product-specs.html"
      };
    }); 

    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html'
        };
    });
})();
