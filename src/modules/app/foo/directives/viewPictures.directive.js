'use strict';

module.exports = function viewPictures() {
	return function(scope, element, attr) {	
			var begin = 0;
			var end = 12;

			scope.$on('sob', function(){
				var parentDiv = angular.element("<div class='view-container'>");
				element.append(parentDiv);
				appElement(scope.imagesArray.slice(begin,end));
				
				window.onscroll = function () {				
				    var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
				    var documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
				    var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

				    if((documentHeight - clientHeight) <= scrollTop) {
				        begin +=12;
				        end +=12;
				        appElement(scope.imagesArray.slice(begin,end));
				    }		
				}

				function appElement(arr){
					for(var i = 0; i < arr.length; i++){

						var pictureDiv = angular.element("<div class='view-picture'>");
						var aPicture = angular.element("<a class='view-a-picture'>");
						var img = angular.element("<img>");
						var span = angular.element("<span class='view-title'>"); 
						var aAlbum = angular.element("<a class='view-a-album'>");

						span.text(arr[i].title);
						aAlbum.text("Album " + arr[i].albumId);
						aAlbum.attr('href', '#/album/' + arr[i].albumId);
						aPicture.attr('href', '#/picture/' + arr[i].id);
						img.attr("src", arr[i].url);

						aPicture.append(img);
						pictureDiv.append(aPicture);
						pictureDiv.append(aAlbum);
						pictureDiv.append(span);
						parentDiv.append(pictureDiv);
					};	
				};
				

			});
		}
}