'use strict';

// this directive is used to show data (pictures) via   

module.exports = function viewPictures() {
	return function(scope, element, attr) {	
			

			// there are 12 images on the page to show
			var begin = 0;
			var end = 12;

			//when user gets the end of the page, 12 images shows on the page
			// event to show, that data uploaded from the server
			scope.$on('dataUploaded', function(){
				var parentDiv = angular.element("<div class='view-container'>");
				element.append(parentDiv);
				appElement(scope.imagesArray.slice(begin,end));
				
				//event "the end of the window"

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

				//view images on the page

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