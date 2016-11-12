'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/bar', {
                templateUrl: 'app/foo/templates/bar.html',
                controller: 'barController'
            })
            .when('/',{
                templateUrl: 'app/foo/templates/first.html',
                controller: 'photoViewerContrloller'
            })
            .when('/album/:id',{
                templateUrl: 'app/foo/templates/album.html',
                controller: 'photoViewerContrloller'
            })
            .otherwise({
                redirectTo: '/bar'
            });
    };