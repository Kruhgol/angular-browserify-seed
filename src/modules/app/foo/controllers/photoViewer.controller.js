'use strict';

//controller for tamplate "view.tamplate.js"

module.exports = /*@ngInject*/
    function photoViewerContrloller($scope, $http, $window, $location, $routeParams) {
	    
	    var root = 'http://jsonplaceholder.typicode.com/photos'
	    $http.get(root).success(function(data){
	    	$scope.imagesArray = data;

	    	//event "data uploaded from the server"

	    	$scope.$broadcast("dataUploaded", {message: true});
	    });	
	    
    };