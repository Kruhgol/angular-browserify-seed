'use strict';

module.exports = /*@ngInject*/
    function pictureController($scope, $location, $http, $routeParams) {
	    $scope.id = $routeParams.id;
    	var rootId = 'http://jsonplaceholder.typicode.com/photos/' + $scope.id;
	    $http.get(rootId).success(function(data){
	     	$scope.picture = data;
	    });
};