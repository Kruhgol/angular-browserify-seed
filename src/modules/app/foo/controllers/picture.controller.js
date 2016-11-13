//controller for tamplate "picture.tamplate.js"

'use strict';

module.exports = /*@ngInject*/
    function pictureController($scope, $location, $http, $routeParams) {
	    $scope.id = $routeParams.id;  //link to id of images
		pictureUpdate($scope.id);

	    function pictureUpdate(root) {
	    	var rootId = 'http://jsonplaceholder.typicode.com/photos/' + root;
		    $http.get(rootId).success(function(data){
		     	$scope.picture = data;
		    });
		};
};