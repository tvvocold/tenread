angular.module('TenRead', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/popup");
        //
        // Now set up the states
        $stateProvider
            .state('popup', {
                url: "/popup",
                templateUrl: "template/popup.html"
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "partials/state1.list.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })

    });