'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $location, $http, $routeParams) {
	    $scope.album_id = $routeParams.album_id;
    	var rootAlbumId = 'http://jsonplaceholder.typicode.com/albums/' + $scope.album_id + '/photos';

	    $http.get(rootAlbumId).success(function(data){
	     	$scope.albumIdArray = data;
	    });	

};