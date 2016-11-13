'use strict';

module.exports = /*@ngInject*/
    function pictureController($scope, $location, $http, $routeParams) {
	    $scope.id = $routeParams.id;
		pictureUpdate($scope.id);

	    function pictureUpdate(root) {
	    	var rootId = 'http://jsonplaceholder.typicode.com/photos/' + root;
		    $http.get(rootId).success(function(data){
		     	$scope.picture = data;
		    });
		};
};