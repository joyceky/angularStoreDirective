(function() {
    'use strict';

    var app = angular.module('store', ['store-products']);

    // START Controllers
    app.controller('StoreController', ['$http', '$log', function($http, $log) {
        var store = this;

        store.products = [];

        $log.debug($http.get);

        $http.get('/products.json').then(function(response){
          $log.debug(response);
          store.products = response.data;
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


    // var gems = [{
    //         name: "Dodecahedron",
    //         price: 43.23,
    //         canPurchase: true, //change to false to hide button
    //         soldOut: false,
    //         images: [
    //             'img/gem2.png',
    //             'img/gem3.jpeg',
    //             'img/gem.jpeg'
    //         ],
    //         specifications: "Highly specific",
    //         reviews: [{
    //             stars: 4,
    //             body: "Review 1",
    //             author: "anon@anon.com"
    //         }, {
    //             stars: 3,
    //             body: "Review 2",
    //             author: "anon@anon.com"
    //         }, {
    //             stars: 1,
    //             body: "Review 3",
    //             author: "anon@anon.com"
    //         }],
    //         description: "delicious"
    //     },
    //
    //     {
    //         name: "Ruby",
    //         price: 3.23,
    //         canPurchase: true, //change to false to hide button
    //         soldOut: true,
    //         images: [],
    //         specifications: "Highly specific",
    //         reviews: [{
    //             stars: 4,
    //             body: "Review 1",
    //             author: "anon@anon.com"
    //         }, {
    //             stars: 3,
    //             body: "Review 2",
    //             author: "anon@anon.com"
    //         }, {
    //             stars: 1,
    //             body: "Review 3",
    //             author: "anon@anon.com"
    //         }],
    //         description: "delicious"
    //     },
    //
    //     {
    //         name: "Sapphire",
    //         price: 23.23,
    //         canPurchase: true, //change to false to hide button
    //         soldOut: false,
    //         images: [
    //             'img/gem2.png',
    //             'img/gem3.jpeg',
    //             'img/gem.jpeg'
    //         ],
    //         specifications: "Highly specific",
    //         reviews: [{
    //             stars: 4,
    //             body: "Review 1",
    //             author: "anon@anon.com"
    //         }, {
    //             stars: 3,
    //             body: "Review 2",
    //             author: "anon@anon.com"
    //         }, {
    //             stars: 1,
    //             body: "Review 3",
    //             author: "anon@anon.com"
    //         }],
    //         description: "delicious"
    //     }
    //
    // ];


//// Not using, keep for example
// app.controller('PanelController', function() {
//   this.tab = 1;
//
//   this.selectTab = function(setTab) {
//     this.tab = setTab;
//   };
//
//   this.isSelected = function(checkTab) {
//     return this.tab === checkTab;
//   };
// });
