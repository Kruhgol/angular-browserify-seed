'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/bar', {
                templateUrl: 'app/foo/templates/bar.html',
                controller: 'barController'
            })
            .when('/',{
                templateUrl: 'app/foo/templates/view.html',
                controller: 'photoViewerContrloller'
            })
            .when('/album/:album_id',{
                templateUrl: 'app/foo/templates/album.html',
                controller: 'albumController'
            })
            .when('/picture/:id',{
                templateUrl: 'app/foo/templates/picture.html',
                controller: 'pictureController'
            })
            .otherwise({
                redirectTo: '/bar'
            });
    };