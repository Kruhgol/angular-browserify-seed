'use strict';

module.exports = /*@ngInject*/
    function photoViewerContrloller($scope, $http, $window) {
	    var root = 'http://jsonplaceholder.typicode.com/photos'
	    $http.get(root).success(function(data){
	    	$scope.imagesArray = data;
	    	console.log($scope.images);
	    	$scope.$broadcast("sob", {message: true});
	    });	
	    
    };