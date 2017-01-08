(function() {
    'use strict';

    var app = angular.module('store', ['store-products']);
// Adding services via dependency injection
    app.controller('StoreController', ['$http', '$log', function($http, $log) {
//Is this proper use of vm=this?
        var vm = this;

        vm.products = [];

        $log.debug($http.get);

        $http.get('/products.json').then(function(response){
          $log.debug(response);
          vm.products = response.data;
        });
    }]);

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
  })();
