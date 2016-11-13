'use strict';

module.exports = /*@ngInject*/
    function photoViewerContrloller($scope, $http, $window, $location, $routeParams) {
	    var root = 'http://jsonplaceholder.typicode.com/photos'
	    $http.get(root).success(function(data){
	    	$scope.imagesArray = data;
	    	$scope.$broadcast("sob", {message: true});
	    });	

	    $scope.albumId = $routeParams.id;
	    
    };